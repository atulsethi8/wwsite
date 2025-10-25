import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?kgmid=/g/11wnmq6793&hl=en-IN&q=Wander+Wyze+Holidays&shndl=30&shem=lcuae,lsptbl1c,sdl1pfh&source=sh/x/loc/osrp/m5/1&kgs=f33c1bdf7ecdfe72&utm_source=lcuae,lsptbl1c,sdl1pfh,sh/x/loc/osrp/m5/1#lrd=0x390d0181e6b3ed1b:0x58695912a3a6a8fe,1,,,,';

const slides = [
  {
    name: 'Hema Jyala',
    location: 'Maldives',
    title: 'The Trust Builder!',
    stars: 5,
    text:
      'A huge thank you to Wander Wyze Holidays for arranging an absolutely flawless trip to Maldives! Every aspect of the journey, from the affordable air tickets to stunning accommodations to the thoughtfully curated activities, was handled with excellence. Highly recommended for stress-free travel!',
    photo: '/images/reviews/hema-jyala.png',
  },
  {
    name: 'Riddhi Khandelwal',
    location: 'Dubai',
    title: 'The Reliability Champion!',
    stars: 5,
    text:
      "Absolutely amazing experience! Our Dubai trip was planned to perfection by Wander Wyze. Everything from airport transfers to hotel stays and sightseeing was super smooth and stress-free. We didn’t have to worry about a thing. Thanks for making it such a memorable and hassle-free trip. Highly recommended!",
    photo: '/images/reviews/riddhi-khandelwal.png',
  },
  {
    name: 'Pawan Dabas',
    location: 'Australia & Singapore',
    title: 'The Personalization Powerhouse!',
    stars: 5,
    text:
      'WanderWyze is a brilliant travel curator, bespoke advice after customising our travel itinerary to Australia. Ravinder was helpful getting a Stayover in Singapore and was available for last minute changes on our activities and travel list. Personalisation is the way for travel as most other folks are doing automated itineraries. Best travel booking experience and will use them for all future travel plans.',
    photo: '/images/reviews/pawan-dabas.png',
  },
  {
    name: 'Mayank Awasthi',
    location: '—',
    title: 'The Value Proposition!',
    stars: 5,
    text:
      'Excellent service… No one can match their rates and the deals they offer.',
    photo: '/images/reviews/mayank-awasthi.png',
  },
  {
    name: 'Jaikrit Singh Rawat',
    location: 'Azerbaijan',
    title: 'The Professional Seal!',
    stars: 5,
    text:
      'I had an amazing experience booking my Azerbaijan trip through Wander Wyze!! The process was seamless and everything was well organised, from the itinerary to the accommodations. Their professionalism and attention to detail made the trip unforgettable. Highly recommend their services for a hassle free travel experience!',
    photo: '/images/reviews/jaikrit-singh-rawat.png',
  },
];

// responsive columns: 1 (mobile), 2 (sm+), 3 (lg+)
function getCols() {
  if (typeof window === 'undefined') return 1;
  if (window.matchMedia('(min-width: 1024px)').matches) return 3;
  if (window.matchMedia('(min-width: 640px)').matches) return 2;
  return 1;
}

export default function TestimonialsCarousel() {
  const [cols, setCols] = useState(getCols());
  const [page, setPage] = useState(0);

  // recalc on resize
  useEffect(() => {
    const onResize = () => {
      const next = getCols();
      setCols((prev) => {
        if (prev !== next) setPage(0);
        return next;
      });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // chunk slides into pages by current cols
  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < slides.length; i += cols) out.push(slides.slice(i, i + cols));
    return out;
  }, [cols]);

  const totalPages = pages.length || 1;
  const current = pages[Math.min(page, totalPages - 1)] || [];

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <div className="relative">
      {/* Cards grid */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.map((s, idx) => (
            <a
              key={idx}
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
              aria-label="Read full review on Google"
            >
              <div className="h-full rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 px-6 py-8 transition-shadow group-hover:shadow-2xl">
                {/* Avatar */}
                <div className="flex justify-center -mt-14 mb-4">
                  <img
                    src={s.photo}
                    alt={`${s.name} avatar`}
                    className="h-20 w-20 rounded-full border-4 border-white shadow-md object-cover bg-gray-100"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/80x80.png?text=%20';
                    }}
                  />
                </div>

                {/* Name + location */}
                <h3 className="text-center text-lg font-bold text-gray-900">
                  {s.name}
                  {s.location && (
                    <span className="text-gray-500 font-semibold"> ({s.location})</span>
                  )}
                </h3>

                {/* Stars + title */}
                <div className="mt-1 text-center">
                  <div className="text-amber-400" aria-hidden>
                    {'★★★★★'.slice(0, s.stars)}
                  </div>
                  <div className="mt-1 text-primary-600 font-semibold">{s.title}</div>
                </div>

                {/* Review */}
                <p className="mt-4 text-gray-700 leading-relaxed text-sm">
                  <Quote className="inline-block h-4 w-4 text-primary-300 align-text-top mr-1" />
                  {s.text}
                </p>

                {/* Hint */}
                <div className="mt-4 text-center text-xs text-primary-600 font-medium">
                  Read full review on Google →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {totalPages > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2.5 w-2.5 rounded-full ${
                i === page ? 'bg-primary-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
