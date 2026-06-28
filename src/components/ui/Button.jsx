import { Loader2 } from 'lucide-react';

const variants = {
  primary: 'bg-anifine-primary text-white shadow-red hover:bg-red-500 focus-visible:ring-anifine-primary',
  secondary: 'border border-white/10 bg-white/10 text-white hover:bg-white/15 focus-visible:ring-white/40',
  ghost: 'text-white/70 hover:bg-white/10 hover:text-white focus-visible:ring-white/40',
};

export default function Button({ children, variant = 'primary', className = '', isLoading = false, ...props }) {
  return (
    <button className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition duration-200 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`} disabled={isLoading || props.disabled} {...props}>
      {isLoading && <Loader2 size={16} className="animate-spin" />}
      {children}
    </button>
  );
}
