import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import PageTransition from '../components/feedback/PageTransition';
export default function AppLayout(){ return <div className="bg-radial-noise min-h-screen"><Navbar/><main className="mx-auto max-w-7xl px-5 py-8 pb-28 md:pb-8"><PageTransition><Outlet/></PageTransition></main><Sidebar/></div>; }
