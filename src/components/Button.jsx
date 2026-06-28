export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles = variant === 'ghost' ? 'border-white/10 bg-white/5 hover:bg-white/10' : 'bg-anifine-primary hover:bg-red-500 text-white shadow-lg shadow-red-950/30';
  return <button className={`rounded-xl px-5 py-3 font-bold transition duration-200 disabled:opacity-50 ${styles} ${className}`} {...props}>{children}</button>;
}
