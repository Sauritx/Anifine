import { X } from 'lucide-react';
import Button from './Button';
import GlassCard from './GlassCard';
export default function Modal({ open, title, children, onClose }) { if (!open) return null; return <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur"><GlassCard className="w-full max-w-lg"><div className="mb-4 flex items-center justify-between"><h2 className="font-display text-2xl font-bold">{title}</h2><Button variant="ghost" onClick={onClose} aria-label="Close"><X size={18}/></Button></div>{children}</GlassCard></div>; }
