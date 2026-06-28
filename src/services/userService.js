import { doc, getDoc, setDoc, updateDoc, collection, getDocs, orderBy, query, limit, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export const createUserProfile = async (user, username) => {
  const profile = { uid: user.uid, username, email: user.email, points: 0, level: 1, xp: 0, gamesPlayed: 0, accuracy: 0, currentStreak: 0, highestStreak: 0, createdAt: serverTimestamp() };
  await setDoc(doc(db, 'users', user.uid), profile);
  return { ...profile, createdAt: new Date().toISOString() };
};

export const getUserProfile = async (uid) => {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? snap.data() : null;
};

export const updateUserProfile = (uid, updates) => updateDoc(doc(db, 'users', uid), updates);

export const getLeaderboardUsers = async () => {
  const snap = await getDocs(query(collection(db, 'users'), orderBy('points', 'desc'), limit(50)));
  return snap.docs.map((item) => item.data());
};
