import { useEffect, useMemo, useState } from "react";
import { Star } from "lucide-react";

// Link to your Google Reviews page
const GBP_URL =
  "https://www.google.com/search?kgmid=/g/11wnmq6793&hl=en-IN&q=Wander+Wyze+Holidays&shndl=30&shem=lcuae,lsptbl1c,sdl1pfh&source=sh/x/loc/osrp/m5/1&kgs=f33c1bdf7ecdfe72&utm_source=lcuae,lsptbl1c,sdl1pfh,sh/x/loc/osrp/m5/1#lrd=0x390d0181e6b3ed1b:0x58695912a3a6a8fe,1,,,,";

function Stars({ n = 5 }) {
  return (
    <div className="flex gap-1 justify-center">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function Avatar({ name, photo }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className="h-14 w-14 rounded-full ring-4 ring-white object-cover shadow-lg"
      />
    );
  }
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return
    <div className="h-14 w-14 rounded-full ring-4 ring-white bg-primary-600 text-white grid place-items-center font-bold shadow-lg">
      {initials}
    </div>;
}

export default function TestimonialsCarousel() {
 const slides = [
  {
    name: "Hema Jyala",
    pillar: "The Trust Builder",
    rating: 5,
    text:
      "A huge thank you to Wander Wyze Holidays for arranging an absolutely flawless trip to Maldives! Every aspect of the journey, from the affordable air tickets to stunning accommodations to the thoughtfully curated activities, was handled with such precision and care. Your attention to detail and dedication to creating a personalized, stress-free experience made this vacation truly unforgettable. Highly recommended for anyone seeking a hassle-free, dream getaway at affordable prices!",
    photo: "/images/reviews/hema.jpg",
  },
  {
    name: "Riddhi Khandelwal",
    pillar: "The Reliability Champion",
    rating: 5,
    text:
      "Absolutely amazing experience! Our Dubai trip was planned to perfection by Wander Wyze. Everything from airport transfers to hotel stays and sightseeing was super smooth and stress-free. We didn’t have to worry about a thing. Thanks for making it such a memorable and hassle-free trip. Highly recommended!",
    photo: "/images/reviews/riddhi.jpg",
  },
  {
    name: "Pawan Dabas",
    pillar: "The Personalization Powerhouse",
    rating: 5,
    text:
      "WanderWyze is a brilliant travel curator, bespoke advice after customising our travel itinerary to Australia. Ravinder was helpful getting a Stayover in Singapore and was available for last minute changes on our activities and travel list. Personalisation is the way for travel as most other folks are doing automated itineraries. Best travel booking experience and will use them for all future travel plans.",
    photo: "/images/reviews/pawan.jpg",
  },
  {
    name: "Mayank Awasthi",
    pillar: "The Value Proposition",
    rating: 5,
    text:
      "Excellent service... No one can match their rates and the deals they offer.",
    photo: "/images/reviews/mayank.jpg",
  },
  {
    name: "Jaikrit Singh Rawat",
    pillar: "The Professional Seal",
    rating: 5,
    text:
      "I had an amazing experience booking my Azerbaijan trip through Wander Wyze! The process was seamless and everything was well organised, from the itinerary to the accommodations. Their professionalism and attention to detail made the trip unforgettable. Highly recommend their services for a hassle-free travel experience!",
    photo: "/images/reviews/jaikrit.jpg",
  },
];

    []
  );

  const [i, setI] = useState(0);
  const go = (n) => setI((p) => (p + n + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative">
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="text-primary-700">WHY CHOOSE US?</span>{" "}
          <span className="text-gray-900">OUR CLIENTS SAY IT BEST.</span>
        </h3>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-6">
          <Card minimized slide={slides[(i - 1 + slides.length) % slides.length]} />
          <Card active slide={slides[i]} />
          <Card minimized slide={slides[(i + 1) % slides.length]} />
        </div>

        <button
          aria-label="Previous"
          onClick={() => go(-1)}
          className="hidden md:flex absolute left-[-14px] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 shadow hover:bg-white"
        >
          <span className="m-auto text-xl">‹</span>
        </button>
        <button
          aria-label="Next"
          onClick={() => go(1)}
          className="hidden md:flex absolute right-[-14px] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 shadow hover:bg-white"
        >
          <span className="m-auto text-xl">›</span>
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-primary-600" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            href={GBP_URL}
            className="inline-flex items-center gap-2 text-primary-700 hover:underline font-semibold"
            target="_blank"
            rel="noopener"
          >
            Read more Google reviews
          </a>
        </div>
      </div>
    </section>
  );
}

function Card({ slide, active, minimized }) {
  return (
    <a
      href={GBP_URL}
      target="_blank"
      rel="noopener"
      className={`relative block rounded-2xl bg-white p-6 md:p-8 shadow-lg transition-all
        ${active ? "scale-105 z-10" : "opacity-70"} 
        ${minimized ? "md:mt-6" : ""}`}
    >
      <div className="absolute -top-7 left-1/2 -translate-x-1/2">
        <Avatar name={slide.name} photo={slide.photo} />
      </div>

      <div className="pt-6 text-center">
        <div className="text-sm uppercase tracking-wide text-primary-700 font-extrabold">
          {slide.pillar}
        </div>
        <div className="mt-1 font-semibold">{slide.name}</div>
        <div className="mt-1"><Stars n={slide.rating} /></div>

        <blockquote className="mt-4 text-gray-700 leading-relaxed">
          “{slide.text}”
        </blockquote>
      </div>
    </a>
  );
}
