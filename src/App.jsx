import { Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home'; import Play from './pages/Play'; import Leaderboard from './pages/Leaderboard'; import Profile from './pages/Profile'; import NotFound from './pages/NotFound';
import { Login, Register } from './features/auth/AuthScreen';
import SplashGate from './features/auth/SplashGate';
export default function App(){ return <SplashGate><Routes><Route element={<AppLayout/>}><Route index element={<Home/>}/><Route path="play" element={<Play/>}/><Route path="leaderboard" element={<Leaderboard/>}/><Route path="profile" element={<Profile/>}/><Route path="login" element={<Login/>}/><Route path="register" element={<Register/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></SplashGate>; }
