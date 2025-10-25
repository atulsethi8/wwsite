import React, { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

/**
 * TestimonialsCarousel
 * - Autoplay (6s), pauses on hover & when not visible
 * - Keyboard (←/→), swipe on touch
 * - Dots + arrows + a11y labels
 * - Large heading: “WHY CHOOSE US? OUR CLIENTS SAY IT BEST.”
 */

const slides = [
  {
    name: "Hema Jyala",
    role: "The Trust Builder",
    rating: 5,
    avatar: "/assets/testimonials/hema-jyala.png",
    text:
      "A huge thank you to Wander Wyze Holidays for arranging an absolutely flawless trip to Maldives! Every aspect of the journey, from the affordable air tickets to stunning accommodations to the thoughtfully curated activities, was handled with such precision and care. Your attention to detail and dedication to creating a personalized, stress-free experience made this vacation truly unforgettable. Highly recommended for anyone seeking a hassle-free, dream getaway at affordable prices!",
    link:
      "https://www.google.com/search?kgmid=/g/11wnmq6793&hl=en-IN&q=Wander+Wyze+Holidays&shndl=30&shem=lcuae,lsptbl1c,sdl1pfh&source=sh/x/loc/osrp/m5/1&kgs=f33c1bdf7ecdfe72&utm_source=lcuae,lsptbl1c,sdl1pfh,sh/x/loc/osrp/m5/1#lrd=0x390d0181e6b3ed1b:0x58695912a3a6a8fe,1,,,,",
  },
  {
    name: "Riddhi Khandelwal",
    role: "The Reliability Champion",
    rating: 5,
    avatar: "/assets/testimonials/riddhi-khandelwal.png",
    text:
      "Absolutely amazing experience! Our Dubai trip was planned to perfection by Wander Wyze. Everything from airport transfers to hotel stays and sightseeing was super smooth and stress-free. We didn’t have to worry about a thing. Thanks for making it such a memorable and hassle-free trip. Highly recommended!",
    link:
      "https://www.google.com/search?kgmid=/g/11wnmq6793&hl=en-IN&q=Wander+Wyze+Holidays&shndl=30&shem=lcuae,lsptbl1c,sdl1pfh&source=sh/x/loc/osrp/m5/1&kgs=f33c1bdf7ecdfe72&utm_source=lcuae,lsptbl1c,sdl1pfh,sh/x/loc/osrp/m5/1#lrd=0x390d0181e6b3ed1b:0x58695912a3a6a8fe,1,,,,",
  },
  {
    name: "Pawan Dabas",
    role: "The Personalization Powerhouse",
    rating: 5,
    avatar: "/assets/testimonials/pawan-dabas.png",
    text:
      "WanderWyze is a brilliant travel curator, bespoke advice after customising our travel itinerary to Australia. Ravinder was helpful getting a Stayover in Singapore and was available for last minute changes on our activities and travel list. Personalisation is the way for travel as most other folks are doing automated itineraries. Best travel booking experience and will use them for all future travel plans.",
    link:
      "https://www.google.com/search?kgmid=/g/11wnmq6793&hl=en-IN&q=Wander+Wyze+Holidays&shndl=30&shem=lcuae,lsptbl1c,sdl1pfh&source=sh/x/loc/osrp/m5/1&kgs=f33c1bdf7ecdfe72&utm_source=lcuae,lsptbl1c,sdl1pfh,sh/x/loc/osrp/m5/1#lrd=0x390d0181e6b3ed1b:0x58695912a3a6a8fe,1,,,,",
  },
  {
    name: "Mayank Awasthi",
    role: "The Value Proposition",
    rating: 5,
    avatar: "/assets/testimonials/mayank-awasthi.png",
    text:
      "Excellent service.... No one can match their rates and the deals they offer.",
    link:
      "https://www.google.com/search?kgmid=/g/11wnmq6793&hl=en-IN&q=Wander+Wyze+Holidays&shndl=30&shem=lcuae,lsptbl1c,sdl1pfh&source=sh/x/loc/osrp/m5/1&kgs=f33c1bdf7ecdfe72&utm_source=lcuae,lsptbl1c,sdl1pfh,sh/x/loc/osrp/m5/1#lrd=0x390d0181e6b3ed1b:0x58695912a3a6a8fe,1,,,,",
  },
  {
    name: "Jaikrit Singh Rawat",
    role: "The Professional Seal",
    rating: 5,
    avatar: "/assets/testimonials/jaikrit-singh-rawat.png",
    text:
      "I had an amazing experience booking my Azerbaijan trip through Wander Wyze!! The process was seamless and everything was well organised, from the itinerary to the accommodations. Their professionalism and attention to detail made the trip unforgettable. Highly recommend their services for a hassle free travel experience!",
    link:
      "https://www.google.com/search?kgmid=/g/11wnmq6793&hl=en-IN&q=Wander+Wyze+Holidays&shndl=30&shem=lcuae,lsptbl1c,sdl1pfh&source=sh/x/loc/osrp/m5/1&kgs=f33c1bdf7ecdfe72&utm_source=lcuae,lsptbl1c,sdl1pfh,sh/x/loc/osrp/m5/1#lrd=0x390d0181e6b3ed1b:0x58695912a3a6a8fe,1,,,,",
  },
];

const STAR = () => <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />;

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const wrap = (n) => (n + slides.length) % slides.length;

  const next = () => setIndex((i) => wrap(i + 1));
  const prev = () => setIndex((i) => wrap(i - 1));

  // Autoplay (pause on hover & when not visible)
  const ref = useRef(null);
  useEffect(() => {
    let timer;
    const on = () => {
      timer = setInterval(() => {
        if (!hovered && document.visibilityState === "visible") next();
      }, 6000);
    };
    const off = () => timer && clearInterval(timer);
    on();
    return off;
  }, [hovered]);

  // Keyboard + swipe
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // touch swipe
  useEffect(() => {
    let startX = 0;
    const el = ref.current;
    if (!el) return;
    const down = (e) => (startX = e.touches[0].clientX);
    const up = (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 50) prev();
      if (dx < -50) next();
    };
    el.addEventListener("touchstart", down, { passive: true });
    el.addEventListener("touchend", up, { passive: true });
    return () => {
      el.removeEventListener("touchstart", down);
      el.removeEventListener("touchend", up);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-roledescription="carousel"
    >
      {/* Big Heading */}
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          WHY CHOOSE US? <span className="text-primary-600">OUR CLIENTS SAY IT BEST.</span>
        </h3>
      </div>

      {/* Slide frame */}
      <div className="relative mx-auto max-w-4xl">
        {slides.map((s, i) => {
          const active = i === index;
          return (
            <article
              key={s.name}
              className={`absolute inset-0 transition-opacity duration-500 ${
                active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={!active}
              aria-live={active ? "polite" : "off"}
            >
              <div className="rounded-3xl bg-white/95 shadow-xl ring-1 ring-black/5 p-8 md:p-10 text-center">
                {/* Avatar */}
                <div className="-mt-16 mb-4 flex justify-center">
                  <img
                    src={s.avatar}
                    alt={s.name}
                    className="w-24 h-24 rounded-full ring-4 ring-white shadow-xl object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Name / role / rating */}
                <h4 className="text-xl font-bold text-gray-900">{s.name}</h4>
                <p className="text-primary-700 font-semibold mt-1">{s.role}</p>
                <div className="mt-2 flex justify-center gap-1" aria-label={`${s.rating} out of 5 stars`}>
                  {Array.from({ length: s.rating }).map((_, k) => (
                    <STAR key={k} />
                  ))}
                </div>

                {/* Quote */}
                <div className="mt-5 relative">
                  <Quote className="absolute -top-2 -left-2 h-5 w-5 text-primary-300" />
                  <p className="text-gray-700 leading-relaxed">{s.text}</p>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm font-semibold text-primary-600 hover:text-primary-700 underline underline-offset-4"
                    aria-label={`Read full review on Google from ${s.name}`}
                  >
                    Read full review on Google
                  </a>
                </div>
              </div>
            </article>
          );
        })}

        {/* Keep height so layout doesn't jump */}
        <div className="invisible">
          <div className="rounded-3xl p-10">placeholder</div>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute left-0 top-1/2 -translate-y-1/2 ml-1 md:ml-4 rounded-full bg-white shadow-lg ring-1 ring-black/10 p-2 hover:bg-gray-50"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-0 top-1/2 -translate-y-1/2 mr-1 md:mr-4 rounded-full bg-white shadow-lg ring-1 ring-black/10 p-2 hover:bg-gray-50"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-primary-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
