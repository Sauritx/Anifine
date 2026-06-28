import ProgressBar from './ProgressBar';
export default function XPBar({ xp, nextLevelXp, level }) { return <div><div className="mb-2 flex justify-between text-sm text-white/60"><span>Level {level}</span><span>{xp} / {nextLevelXp} XP</span></div><ProgressBar value={(xp / nextLevelXp) * 100} /></div>; }
