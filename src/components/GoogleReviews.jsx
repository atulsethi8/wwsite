import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// 🔗 Your exact Google reviews URL
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?kgmid=/g/11wnmq6793&hl=en-IN&q=Wander+Wyze+Holidays&shndl=30&shem=lcuae,lsptbl1c,sdl1pfh&source=sh/x/loc/osrp/m5/1&kgs=f33c1bdf7ecdfe72&utm_source=lcuae,lsptbl1c,sdl1pfh,sh/x/loc/osrp/m5/1#lrd=0x390d0181e6b3ed1b:0x58695912a3a6a8fe,1,,";

// ⭐ If you want different star counts per review, change "rating"
const TESTIMONIALS = [
  {
    pillar: "The Trust Builder",
    author: "Hema Jyala",
    location: "Maldives",
    rating: 5,
    text:
      "A huge thank you to Wander Wyze Holidays for arranging an absolutely flawless trip to Maldives! Every aspect of the journey, from the affordable air tickets to stunning accommodations to the thoughtfully curated activities, was handled with such precision and care. Your attention to detail and dedication to creating a personalized, stress-free experience made this vacation truly unforgettable. Highly recommended for anyone seeking a hassle-free, dream getaway at affordable prices!"
  },
  {
    pillar: "The Reliability Champion",
    author: "Riddhi Khandelwal",
    location: "Dubai",
    rating: 5,
    text:
      "Absolutely amazing experience! Our Dubai trip was planned to perfection by Wander Wyze. Everything from airport transfers to hotel stays and sightseeing was super smooth and stress-free. We didn’t have to worry about a thing. Thanks for making it such a memorable and hassle-free trip. Highly recommended!"
  },
  {
    pillar: "The Personalization Powerhouse",
    author: "Pawan Dabas",
    location: "Australia & Singapore",
    rating: 5,
    text:
      "WanderWyze is a brilliant travel curator, bespoke advice after customising our travel itinerary to Australia. Ravinder was helpful getting a Stayover in Singapore and was available for last minute changes on our activities and travel list. Personalisation is the way for travel as most other folks are doing automated itineraries. Best travel booking experience and will use them for all future travel plans."
  },
  {
    pillar: "The Value Proposition",
    author: "Mayank Awasthi",
    location: "",
    rating: 5,
    text:
      "Excellent service....No one can match their rates and the deals they offer."
  },
  {
    pillar: "The Professional Seal",
    author: "Jaikrit Singh Rawat",
    location: "Azerbaijan",
    rating: 5,
    text:
      "I had an amazing experience booking my Azerbaijan trip through Wander Wyze!! The process was seamless and everything was well organised, from the itinerary to the accommodations. Their professionalism and attention to detail made the trip unforgettable. Highly recommend their services for a hassle free travel experience!"
  }
];

const Stars = ({ rating }) => (
  <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
    {[1,2,3,4,5].map(i => (
      <Star
        key={i}
        className={`h-4 w-4 ${i <= Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))}
  </div>
);

export default function GoogleReviews() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto-advance every 4s; pause on hover/focus
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let paused = false;

    const onEnter = () => { paused = true; };
    const onLeave = () => { paused = false; };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("focusin", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("focusout", onLeave);

    const id = setInterval(() => {
      if (paused) return;
      slideTo(index + 1);
    }, 4000);

    return () => {
      clearInterval(id);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("focusin", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("focusout", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const slideTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const total = TESTIMONIALS.length;
    const next = (i + total) % total;
    const cards = el.querySelectorAll("[data-card]");
    const target = cards[next];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      setIndex(next);
    }
  };

  return (
    <>
      {/* Big heading above the carousel */}
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-wide text-gray-900">
          WHY CHOOSE US? OUR CLIENTS SAY IT BEST.
        </h3>
      </div>

      {/* Carousel shell */}
      <div className="relative">
        {/* Prev / Next (desktop) */}
        <button
          type="button"
          aria-label="Previous reviews"
          onClick={() => slideTo(index - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          aria-label="Next reviews"
          onClick={() => slideTo(index + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory overflow-x-auto gap-4 md:gap-6 px-1 pb-2 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <a
              key={idx}
              data-card
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] block group"
              aria-label={`Read ${t.author}'s full review on Google`}
            >
              <div className="bg-white rounded-xl p-5 shadow-sm group-hover:shadow-md transition h-full">
                {/* Pillar / point */}
                <div className="text-sm font-semibold text-primary-700 tracking-wide mb-2">
                  {t.pillar}
                </div>

                {/* Stars */}
                <Stars rating={t.rating} />

                {/* Review text */}
                <p className="text-gray-700 mt-3 line-clamp-8">{t.text}</p>

                {/* Reviewer line */}
                <div className="mt-4 text-sm text-gray-600">
                  — {t.author}{t.location ? ` (${t.location})` : ""}
                </div>

                <span className="inline-block mt-3 text-sm text-primary-600 group-hover:underline">
                  Read on Google →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="inline-block btn-secondary px-6 py-3"
        >
          See all reviews on Google
        </a>
      </div>
    </>
  );
}
