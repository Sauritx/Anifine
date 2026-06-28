import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../lib/firebase/config';
export const LeaderboardRepository = { async top(limitCount = 50) { const snap = await getDocs(query(collection(db, 'users'), orderBy('points', 'desc'), limit(limitCount))); return snap.docs.map(doc => doc.data()); } };
