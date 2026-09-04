interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative bg-primary text-white py-16 sm:py-20 md:py-24 pt-32 sm:pt-36 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-3">{label}</span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-white/70 text-base sm:text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}
