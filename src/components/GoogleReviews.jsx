import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// 🔗 Your exact Google reviews URL
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?kgmid=/g/11wnmq6793&hl=en-IN&q=Wander+Wyze+Holidays&shndl=30&shem=lcuae,lsptbl1c,sdl1pfh&source=sh/x/loc/osrp/m5/1&kgs=f33c1bdf7ecdfe72&utm_source=lcuae,lsptbl1c,sdl1pfh,sh/x/loc/osrp/m5/1#lrd=0x390d0181e6b3ed1b:0x58695912a3a6a8fe,1,,";

// ✍️ Replace with your real 5 reviews (keep text short for layout)
const TESTIMONIALS = [
  {
    name: "Ritika A.",
    when: "2 weeks ago",
    rating: 5,
    text:
      "Flawless Kenya safari planning! Great lodges and super smooth transfers. Highly recommended.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop"
  },
  {
    name: "Rahul S.",
    when: "1 month ago",
    rating: 5,
    text:
      "Vietnam itinerary was perfect for parents. Indian meals arranged most days—huge help.",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=120&auto=format&fit=crop"
  },
  {
    name: "Nisha K.",
    when: "3 months ago",
    rating: 5,
    text:
      "Dubai combo deal was seamless—flights, hotel, activities. We just enjoyed. Great value!",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=120&auto=format&fit=crop"
  },
  {
    name: "Manish P.",
    when: "5 months ago",
    rating: 5,
    text:
      "Super responsive team. Clear pricing and honest advice. Will book again for Africa.",
    avatar:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=120&auto=format&fit=crop"
  },
  {
    name: "Shreya D.",
    when: "6 months ago",
    rating: 5,
    text:
      "Loved the custom touches—birthday surprise and a perfect room view. Thank you Wander Wyze!",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=120&auto=format&fit=crop"
  }
];

const Stars = ({ rating }) => (
  <div className="flex gap-1">
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
      {/* Carousel shell */}
      <div className="relative">
        {/* Prev / Next */}
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
              aria-label={`Read ${t.name}'s full review on Google`}
            >
              <div className="bg-white rounded-xl p-5 shadow-sm group-hover:shadow-md transition h-full">
                <div className="flex items-center gap-3 mb-3">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.when}</div>
                  </div>
                </div>
                <Stars rating={t.rating} />
                <p className="text-gray-700 mt-3 line-clamp-6">{t.text}</p>
                <span className="inline-block mt-4 text-sm text-primary-600 group-hover:underline">
                  Read on Google →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-6">
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
