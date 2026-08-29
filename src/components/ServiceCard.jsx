export default function ServiceCard({
  number,
  title,
  description,
  Icon,
  featured = false,
}) {
  return (
    <div
      className={`
        group relative flex h-full flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.015] p-5 sm:p-6 lg:p-8
        transition-all duration-300
        hover:border-accent/25 hover:bg-white/[0.03] hover:-translate-y-1
        ${featured ? "lg:col-span-6" : "lg:col-span-3"}
      `}
    >
      <div>
        <div className="flex justify-between items-center">
          <span className="font-mono text-[11px] text-fog/60 uppercase tracking-[0.25em]">
            {number}
          </span>
          <div className="flex justify-center items-center bg-white/[0.02] border border-white/[0.08] group-hover:border-accent/25 rounded-xl size-10 text-accent/70 group-hover:text-accent transition-all group-hover:-translate-y-0.5 duration-300">
            <Icon className="size-[18px]" aria-hidden="true" />
          </div>
        </div>

        <h3
          className={`mt-5 font-display font-semibold tracking-tight text-white ${
            featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {title}
        </h3>

        <p className="mt-3 text-[15px] text-fog leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
