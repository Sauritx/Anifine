export const normalizeAnswer = (value) => value.toLowerCase().trim().replace(/[.'-]/g, '').replace(/\s+/g, ' ');
export const isCorrectAnswer = (guess, question) => [question.answer, ...(question.aliases || [])].some(answer => normalizeAnswer(answer) === normalizeAnswer(guess));
export const calculateScore = ({ basePoints, hintsRevealed, wrongAttempts }) => Math.max(10, basePoints - hintsRevealed * 30 - wrongAttempts * 10);
export const xpToNextLevel = (level) => level * 250;
export const calculateLevel = (totalXp) => Math.floor(totalXp / 250) + 1;
export const applyGameResult = (profile, { points, correct }) => {
  const gamesPlayed = profile.gamesPlayed + 1;
  const previousCorrect = Math.round((profile.accuracy / 100) * profile.gamesPlayed);
  const correctCount = previousCorrect + (correct ? 1 : 0);
  const xp = profile.xp + (correct ? points : 10);
  const currentStreak = correct ? profile.currentStreak + 1 : 0;
  return { ...profile, points: profile.points + (correct ? points : 0), xp, level: calculateLevel(xp), gamesPlayed, accuracy: Math.round((correctCount / gamesPlayed) * 100), currentStreak, highestStreak: Math.max(profile.highestStreak, currentStreak) };
};
