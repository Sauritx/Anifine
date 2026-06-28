import { collection, doc, getDoc, getDocs, limit, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../lib/firebase/config';

const users = 'users';
export const createDefaultProfile = (user, username) => ({ uid: user.uid, username, usernameLower: username.trim().toLowerCase(), email: user.email, points: 0, xp: 0, level: 1, gamesPlayed: 0, correctAnswers: 0, wrongAnswers: 0, accuracy: 0, currentStreak: 0, highestStreak: 0, recentActivity: [], createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
export const UserRepository = {
  async create(user, username) { const profile = createDefaultProfile(user, username); await setDoc(doc(db, users, user.uid), profile); return { ...profile, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }; },
  async findById(uid) { const snap = await getDoc(doc(db, users, uid)); return snap.exists() ? snap.data() : null; },
  /** Checks whether a normalized username is not already claimed. */
  async isUsernameAvailable(username) { const normalized = username.trim().toLowerCase(); if (!normalized) return false; const snap = await getDocs(query(collection(db, users), where('usernameLower', '==', normalized), limit(1))); return snap.empty; },
  async update(uid, updates) { await updateDoc(doc(db, users, uid), { ...updates, updatedAt: serverTimestamp() }); },
};
