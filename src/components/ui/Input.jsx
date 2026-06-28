export default function Input({ label, error, className = '', ...props }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold text-white/70">{label}</span><input className={`w-full rounded-2xl border border-white/10 bg-white/[.06] px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-anifine-primary focus:ring-2 focus:ring-anifine-primary/20 ${className}`} {...props} />{error && <span className="mt-2 block text-sm text-red-300">{error}</span>}</label>;
}
