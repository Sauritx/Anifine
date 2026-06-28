import { UserRepository } from '../repositories/UserRepository';
import { LeaderboardRepository } from '../repositories/LeaderboardRepository';
export const createUserProfile = (user, username) => UserRepository.create(user, username);
export const getUserProfile = (uid) => UserRepository.findById(uid);
export const updateUserProfile = (uid, updates) => UserRepository.update(uid, updates);
export const getLeaderboardUsers = () => LeaderboardRepository.top();
