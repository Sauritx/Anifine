import { User } from 'lucide-react';
export default function Avatar({ name = 'Player', className = '' }) { const initials = name.split(' ').map(p=>p[0]).join('').slice(0,2).toUpperCase(); return <div className={`grid place-items-center rounded-3xl bg-gradient-to-br from-anifine-primary to-red-950 font-display font-bold text-white ${className}`}>{initials || <User size={20}/>}</div>; }
