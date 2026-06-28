import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase/config';
import { UserRepository } from '../../repositories/UserRepository';

const guestProfile = { uid: 'guest', username: 'Guest Player', email: 'guest@anifine.local', points: 1240, xp: 1180, level: 5, gamesPlayed: 32, accuracy: 74, currentStreak: 4, highestStreak: 11 };
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); const [profile, setProfile] = useState(guestProfile); const [loading, setLoading] = useState(true);
  useEffect(() => onAuthStateChanged(auth, async firebaseUser => { setUser(firebaseUser); setProfile(firebaseUser ? (await UserRepository.findById(firebaseUser.uid)) || guestProfile : guestProfile); setLoading(false); }), []);
  const value = useMemo(() => ({ user, profile, setProfile, loading, register: async ({ email, password, username }) => { const result = await createUserWithEmailAndPassword(auth, email, password); const next = await UserRepository.create(result.user, username); setProfile(next); return result; }, login: ({ email, password }) => signInWithEmailAndPassword(auth, email, password), logout: () => signOut(auth) }), [user, profile, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
