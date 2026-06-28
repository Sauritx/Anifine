export const normalizeAnswer = (value) => value.toLowerCase().trim().replace(/[.'-]/g, '').replace(/\s+/g, ' ');
export const isCorrectAnswer = (guess, question) => [question.answer, ...(question.aliases || [])].some(answer => normalizeAnswer(answer) === normalizeAnswer(guess));
export const calculateScore = ({ basePoints, hintsRevealed, wrongAttempts }) => Math.max(10, basePoints - hintsRevealed * 30 - wrongAttempts * 10);
export const xpToNextLevel = (level) => level * 250;
export const calculateLevel = (totalXp) => Math.floor(totalXp / 250) + 1;
/** Applies a single answered question to persistent player stats. */
export const applyGameResult = (profile, { points, correct }) => {
  const gamesPlayed = (profile.gamesPlayed || 0) + 1;
  const correctAnswers = (profile.correctAnswers ?? Math.round(((profile.accuracy || 0) / 100) * (profile.gamesPlayed || 0))) + (correct ? 1 : 0);
  const wrongAnswers = (profile.wrongAnswers ?? Math.max(0, (profile.gamesPlayed || 0) - (profile.correctAnswers || 0))) + (correct ? 0 : 1);
  const xp = (profile.xp || 0) + (correct ? points : 10);
  const currentStreak = correct ? (profile.currentStreak || 0) + 1 : 0;
  return { ...profile, points: (profile.points || 0) + (correct ? points : 0), xp, level: calculateLevel(xp), gamesPlayed, correctAnswers, wrongAnswers, accuracy: Math.round((correctAnswers / gamesPlayed) * 100), currentStreak, highestStreak: Math.max(profile.highestStreak || 0, currentStreak) };
};
/** Shuffles questions once to prevent repeats until the local session is exhausted. */
export const shuffleQuestions = (questions) => [...questions].sort(() => Math.random() - 0.5);
