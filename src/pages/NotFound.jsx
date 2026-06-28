import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
export default function NotFound(){return <div className="grid min-h-[60vh] place-items-center"><GlassCard className="max-w-lg text-center"><p className="font-display text-7xl font-black text-anifine-primary">404</p><h1 className="mt-4 font-display text-3xl font-bold">Page not found</h1><p className="mt-3 text-white/55">This route does not exist yet. Return to the dashboard to continue playing.</p><Link to="/"><Button className="mt-6">Back to Dashboard</Button></Link></GlassCard></div>}
