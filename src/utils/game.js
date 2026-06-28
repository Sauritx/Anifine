export const normalizeAnswer = (value) => value.toLowerCase().trim().replace(/[.'-]/g, '').replace(/\s+/g, ' ');
export const isCorrectAnswer = (guess, question) => [question.answer, ...(question.aliases || [])].some((answer) => normalizeAnswer(answer) === normalizeAnswer(guess));
export const pointsForHint = (basePoints, hintsRevealed, wrongAttempts) => Math.max(10, basePoints - hintsRevealed * 30 - wrongAttempts * 10);
export const xpToNextLevel = (level) => level * 250;
export const calculateLevel = (xp) => Math.floor(xp / 250) + 1;
