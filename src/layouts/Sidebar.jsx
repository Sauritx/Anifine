import { NavLink } from 'react-router-dom';
import { Gamepad2, Home, Trophy, User } from 'lucide-react';
const links = [{to:'/',label:'Home',icon:Home},{to:'/play',label:'Play',icon:Gamepad2},{to:'/leaderboard',label:'Leaderboard',icon:Trophy},{to:'/profile',label:'Profile',icon:User}];
export default function Sidebar(){ return <aside className="fixed inset-x-3 bottom-3 z-40 rounded-3xl border border-white/10 bg-black/70 p-2 backdrop-blur-xl md:hidden"><nav className="grid grid-cols-4 gap-1">{links.map(({to,label,icon:Icon})=><NavLink key={to} to={to} className={({isActive})=>`grid place-items-center rounded-2xl py-2 text-[11px] font-bold ${isActive?'bg-anifine-primary text-white':'text-white/55'}`}><Icon size={18}/><span>{label}</span></NavLink>)}</nav></aside>; }
