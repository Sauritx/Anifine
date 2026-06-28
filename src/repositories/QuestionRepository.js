import easy from '../data/questions/easy.json';
import medium from '../data/questions/medium.json';
import hard from '../data/questions/hard.json';
import impossible from '../data/questions/impossible.json';

const questions = { Easy: easy, Medium: medium, Hard: hard, Impossible: impossible };
export const difficulties = Object.keys(questions);
export const QuestionRepository = { listByDifficulty(difficulty) { return questions[difficulty] ?? []; } };
