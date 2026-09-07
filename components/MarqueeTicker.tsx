'use client';

const items = ['AI systems', 'Product design', 'Web platforms', 'Mobile apps', 'Immersive experiences', 'From strategy to shipped'];

export default function MarqueeTicker() {
  const repeated = [...items, ...items];
  return (
    <section aria-label="Capabilities" className="overflow-hidden border-y border-[#171719] bg-[#c9f44c] py-4">
      <div className="animate-marquee flex w-max items-center">
        {repeated.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-7 px-7 text-sm font-semibold uppercase tracking-[-.025em] text-[#171719] md:text-base">
            <span>{item}</span><span className="text-[#6d5dfc]">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
