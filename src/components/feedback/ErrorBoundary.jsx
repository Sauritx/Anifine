import { Component } from 'react';
import GlassCard from '../ui/GlassCard';
export default class ErrorBoundary extends Component { state = { hasError: false }; static getDerivedStateFromError(){ return { hasError: true }; } render(){ if(this.state.hasError) return <div className="grid min-h-screen place-items-center bg-anifine-bg p-6"><GlassCard className="max-w-lg text-center"><h1 className="font-display text-2xl font-bold">Something went wrong</h1><p className="mt-3 text-white/60">Refresh the page or try again later.</p></GlassCard></div>; return this.props.children; } }
