export default function GlassCard({ as: Component = 'section', className = '', children }) {
  return <Component className={`glass rounded-3xl border border-white/10 p-6 shadow-glass ${className}`}>{children}</Component>;
}
