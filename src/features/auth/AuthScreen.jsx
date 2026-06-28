import { Link, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import Button from '../../components/ui/Button';
import GlassCard from '../../components/ui/GlassCard';
import Input from '../../components/ui/Input';
import { useAuth } from './AuthContext';
import { friendlyAuthError, getPasswordRules, isStrongPassword, normalizeUsername } from './authValidation';
export function Login(){return <AuthForm mode="login"/>} export function Register(){return <AuthForm mode="register"/>}
function AuthForm({ mode }) {
  const isRegister = mode === 'register';
  const { login, register, checkUsername, user, loading } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(''); const [success, setSuccess] = useState(''); const [busy, setBusy] = useState(false); const [available, setAvailable] = useState(null);
  const rules = useMemo(() => getPasswordRules(form.password), [form.password]);
  useEffect(() => { if (!isRegister || normalizeUsername(form.username).length < 3) { setAvailable(null); return; } const timer = setTimeout(async () => { try { setAvailable(await checkUsername(form.username)); } catch { setAvailable(null); } }, 350); return () => clearTimeout(timer); }, [form.username, isRegister, checkUsername]);
  if (!loading && user) return <Navigate to="/" replace />;
  const submit = async e => { e.preventDefault(); setBusy(true); setError(''); setSuccess(''); try { if (isRegister) { if (normalizeUsername(form.username).length < 3) throw new Error('Username must be at least 3 characters.'); if (available === false) throw new Error('That username is already taken.'); if (!isStrongPassword(form.password)) throw new Error('Use a stronger password before continuing.'); await register(form); setSuccess('Account created. Welcome to ANIFINE.'); } else { await login(form); setSuccess('Login successful. Opening dashboard.'); } setTimeout(()=>navigate('/'), 450); } catch (err) { setError(friendlyAuthError(err)); } finally { setBusy(false); } };
  return <div className="mx-auto grid min-h-[72vh] max-w-md place-items-center"><motion.div className="w-full" initial={{opacity:0,y:18,scale:.98}} animate={{opacity:1,y:0,scale:1}}><GlassCard className="w-full"><p className="text-sm uppercase tracking-[.3em] text-anifine-accent">ANIFINE ACCESS</p><h1 className="mt-3 font-display text-4xl font-extrabold">{isRegister ? 'Create Account' : 'Login'}</h1><form onSubmit={submit} className="mt-7 space-y-4">{isRegister && <div><Input required label="Username" value={form.username} onChange={e=>setForm({...form, username:e.target.value})}/>{available !== null && <p className={`mt-2 flex items-center gap-2 text-sm ${available?'text-emerald-300':'text-red-300'}`}>{available ? <CheckCircle2 size={15}/> : <XCircle size={15}/>} {available ? 'Username is available.' : 'Username is already taken.'}</p>}</div>}<Input required type="email" label="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/><Input required type="password" minLength="8" label="Password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})}/>{isRegister && <div className="grid gap-1 text-sm">{rules.map(rule=><span key={rule.label} className={rule.valid?'text-emerald-300':'text-white/45'}>• {rule.label}</span>)}</div>}{error && <p role="alert" className="rounded-2xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">{error}</p>}{success && <p className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">{success}</p>}<Button className="w-full" isLoading={busy}>{isRegister ? 'Register' : 'Login'}</Button></form><p className="mt-5 text-center text-sm text-white/55">{isRegister ? 'Already have an account?' : 'Need an account?'} <Link className="font-bold text-anifine-accent" to={isRegister ? '/login' : '/register'}>{isRegister ? 'Login' : 'Register'}</Link></p></GlassCard></motion.div></div>;
}
