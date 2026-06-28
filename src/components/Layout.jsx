import { Link, NavLink, Outlet } from 'react-router-dom';
import { Gamepad2, LogOut, Menu, Trophy, User, Home } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const links = [{ to: '/', label: 'Home', icon: Home }, { to: '/play', label: 'Play', icon: Gamepad2 }, { to: '/leaderboard', label: 'Leaderboard', icon: Trophy }, { to: '/profile', label: 'Profile', icon: User }];
export default function Layout() {
  const [open, setOpen] = useState(false); const { user, logout } = useAuth();
  const nav = <>{links.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-anifine-primary text-white' : 'text-white/65 hover:bg-white/10 hover:text-white'}`}><Icon size={17} />{label}</NavLink>)}</>;
  return <div className="bg-radial-noise min-h-screen"><header className="sticky top-0 z-30 border-b border-white/10 bg-black/45 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"><Link to="/" className="font-display text-2xl font-extrabold tracking-[.18em]">ANIFINE</Link><nav className="hidden items-center gap-2 md:flex">{nav}</nav><div className="flex items-center gap-2">{user ? <button onClick={logout} className="hidden rounded-xl p-3 text-white/65 hover:bg-white/10 md:block"><LogOut size={18}/></button> : <Link to="/login" className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-black">Login</Link>}<button onClick={() => setOpen(!open)} className="rounded-xl p-3 hover:bg-white/10 md:hidden"><Menu /></button></div></div>{open && <nav className="mx-5 mb-4 grid gap-2 md:hidden">{nav}</nav>}</header><main className="mx-auto max-w-7xl px-5 py-8"><Outlet /></main></div>;
}
