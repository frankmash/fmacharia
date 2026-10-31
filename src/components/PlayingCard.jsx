const COLOR = { "♠": "text-neutral-900", "♣": "text-neutral-900", "♥": "text-rose-600", "♦": "text-rose-600" };

const hand = [
  { rank: "A", suit: "♠", label: "Full-Stack", r: -16, y: 16 },
  { rank: "K", suit: "♥", label: "WordPress", r: -5, y: 3 },
  { rank: "Q", suit: "♦", label: "Automation", r: 6, y: 3 },
  { rank: "J", suit: "♣", label: "SEO & GEO", r: 17, y: 16 },
];

function PlayingCard({ rank, suit, label, r, y, i }) {
  const color = COLOR[suit];
  const corner = (
    <div className={`flex flex-col items-center leading-none ${color}`}>
      <span className="text-[16px] font-bold">{rank}</span>
      <span className="text-[14px]">{suit}</span>
    </div>
  );
  return (
    <div
      className="deal-card absolute top-0 h-[140px] w-[98px] rounded-xl border border-neutral-300 bg-[#fffdf8] shadow-lg"
      style={{ left: i * 57, "--r": `${r}deg`, "--y": `${y}px`, animationDelay: `${i * 130}ms` }}
    >
      <div className="relative m-1 h-[calc(100%-8px)] rounded-lg border border-neutral-200">
        <div className="absolute left-1.5 top-1">{corner}</div>
        <div className="absolute bottom-1 right-1.5 rotate-180">{corner}</div>
        <div className="flex h-full flex-col items-center justify-center gap-1">
          <span className={`text-4xl leading-none ${color}`}>{suit}</span>
          <span className="text-[9px] font-bold uppercase tracking-wide text-neutral-500">{label}</span>
        </div>
      </div>
    </div>
  );
}

export default function CardFan() {
  return (
    <div className="relative order-first mx-auto h-[175px] w-[270px] shrink-0 sm:order-last sm:mx-0" aria-hidden="true">
      {hand.map((c, i) => (
        <PlayingCard key={c.rank} {...c} i={i} />
      ))}
    </div>
  );
}
