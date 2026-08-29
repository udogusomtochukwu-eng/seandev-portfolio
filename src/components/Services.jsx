import Reveal from "./Reveal.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { services } from "../data/services.js";

const LAYOUT_CLASSES = [
  "lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-6",
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative border-t border-white/[0.05] bg-ink"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
        <Reveal className="text-center lg:text-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent/80">
            // what i offer
          </p>
          <h2
            id="services-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Services<span className="text-accent">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fog sm:text-base lg:mx-0">
            What I can help you build.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-6 lg:mt-16">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={120 + index * 100}
              className={`h-full ${LAYOUT_CLASSES[index]}`}
            >
              <ServiceCard
                number={service.number}
                title={service.title}
                description={service.description}
                Icon={service.icon}
                featured={service.id === "business-websites"}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
