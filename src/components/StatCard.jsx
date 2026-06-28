import Card from './Card';
export default function StatCard({ icon: Icon, label, value }) { return <Card><div className="flex items-center gap-4"><div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-anifine-accent"><Icon size={22} /></div><div><p className="text-sm text-white/55">{label}</p><p className="font-display text-2xl font-bold">{value}</p></div></div></Card>; }
