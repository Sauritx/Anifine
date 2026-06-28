import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase/config';

const users = 'users';
export const createDefaultProfile = (user, username) => ({ uid: user.uid, username, email: user.email, points: 0, xp: 0, level: 1, gamesPlayed: 0, accuracy: 0, currentStreak: 0, highestStreak: 0, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
export const UserRepository = {
  async create(user, username) { const profile = createDefaultProfile(user, username); await setDoc(doc(db, users, user.uid), profile); return { ...profile, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }; },
  async findById(uid) { const snap = await getDoc(doc(db, users, uid)); return snap.exists() ? snap.data() : null; },
  async update(uid, updates) { await updateDoc(doc(db, users, uid), { ...updates, updatedAt: serverTimestamp() }); },
};
