import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home'; import Play from './pages/Play'; import Leaderboard from './pages/Leaderboard'; import Profile from './pages/Profile'; import NotFound from './pages/NotFound';
import { Login, Register } from './features/auth/AuthScreen';
import SplashGate from './features/auth/SplashGate';
import LoadingScreen from './components/feedback/LoadingScreen';
import { useAuth } from './features/auth/AuthContext';

function RequireAuth({ children }) { const { user, loading } = useAuth(); const location = useLocation(); if (loading) return <LoadingScreen label="Restoring session"/>; if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />; return children; }
export default function App(){ return <SplashGate><Routes><Route element={<AppLayout/>}><Route path="login" element={<Login/>}/><Route path="register" element={<Register/>}/><Route index element={<RequireAuth><Home/></RequireAuth>}/><Route path="play" element={<RequireAuth><Play/></RequireAuth>}/><Route path="leaderboard" element={<RequireAuth><Leaderboard/></RequireAuth>}/><Route path="profile" element={<RequireAuth><Profile/></RequireAuth>}/><Route path="*" element={<NotFound/>}/></Route></Routes></SplashGate>; }
