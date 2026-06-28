import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { createUserProfile, getUserProfile } from '../services/userService';

const mockProfile = { uid: 'guest', username: 'Guest Player', email: 'guest@anifine.local', points: 1240, level: 5, xp: 1180, gamesPlayed: 32, accuracy: 74, currentStreak: 4, highestStreak: 11 };
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(mockProfile);
  const [loading, setLoading] = useState(true);

  useEffect(() => onAuthStateChanged(auth, async (firebaseUser) => {
    setUser(firebaseUser);
    setProfile(firebaseUser ? (await getUserProfile(firebaseUser.uid)) || mockProfile : mockProfile);
    setLoading(false);
  }), []);

  const value = useMemo(() => ({
    user, profile, loading, setProfile,
    register: async ({ email, password, username }) => {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const nextProfile = await createUserProfile(result.user, username);
      setProfile(nextProfile);
      return result;
    },
    login: ({ email, password }) => signInWithEmailAndPassword(auth, email, password),
    logout: () => signOut(auth),
  }), [user, profile, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
