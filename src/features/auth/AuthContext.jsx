import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase/config';
import { UserRepository } from '../../repositories/UserRepository';

const guestProfile = { uid: 'guest', username: 'Guest Player', email: 'guest@anifine.local', points: 1240, xp: 1180, level: 5, gamesPlayed: 32, correctAnswers: 24, wrongAnswers: 8, accuracy: 75, currentStreak: 4, highestStreak: 11, recentActivity: [] };
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfileState] = useState(guestProfile);
  const [loading, setLoading] = useState(true);

  useEffect(() => onAuthStateChanged(auth, async (firebaseUser) => {
    setUser(firebaseUser);
    setProfileState(firebaseUser ? { ...guestProfile, ...(await UserRepository.findById(firebaseUser.uid)), uid: firebaseUser.uid } : guestProfile);
    setLoading(false);
  }), []);

  /** Updates local profile immediately and persists best-effort for authenticated users. */
  const setProfile = async (nextProfile) => {
    setProfileState(nextProfile);
    if (user && nextProfile.uid !== 'guest') {
      const { uid, email, createdAt, ...updates } = nextProfile;
      await UserRepository.update(user.uid, updates).catch(() => undefined);
    }
  };

  const value = useMemo(() => ({
    user,
    profile,
    setProfile,
    loading,
    checkUsername: UserRepository.isUsernameAvailable,
    register: async ({ email, password, username }) => {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const next = await UserRepository.create(result.user, username);
      setProfileState(next);
      return result;
    },
    login: ({ email, password }) => signInWithEmailAndPassword(auth, email, password),
    logout: () => signOut(auth),
  }), [user, profile, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
