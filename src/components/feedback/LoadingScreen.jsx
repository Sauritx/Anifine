import { motion } from 'framer-motion';
export default function LoadingScreen({ label = 'Loading ANIFINE' }) { return <div className="grid min-h-screen place-items-center bg-anifine-bg"><motion.div animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 1.4, repeat: Infinity }} className="font-display text-xl font-bold tracking-[.35em] text-white/70">{label}</motion.div></div>; }
