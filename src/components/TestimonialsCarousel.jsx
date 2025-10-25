// src/components/TestimonialsCarousel.jsx
import React, { useEffect, useRef, useState } from "react";

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

function Stars({ value = 5 }) {
  return (
    <div className="flex gap-1" aria-label={`${value} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${
            i < value ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15.27l-5.18 3.05 1.64-5.81L1 7.97l6-.52L10 2l3 5.45 6 .52-5.46 4.54 1.64 5.81z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  // Auto-advance every 6s (no scrollIntoView here, so it won't jump the page)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const go = (i) => setIndex((i + slides.length) % slides.length);

  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Big heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          WHY CHOOSE US? <span className="text-primary-600">OUR CLIENTS SAY IT BEST.</span>
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)`, width: `${slides.length * 100}%` }}
        >
          {slides.map((s, i) => (
            <article
              key={s.name + i}
              className="w-full shrink-0 px-3 md:px-6"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              <div className="mx-auto max-w-3xl rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-6 sm:p-10 relative">
                {/* Avatar */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <img
                    src={s.photo}
                    alt={s.name}
                    className="h-16 w-16 rounded-full object-cover ring-4 ring-white shadow-md"
                    loading="lazy"
                  />
                </div>

                {/* Header */}
                <div className="pt-6 text-center">
                  <div className="text-sm uppercase tracking-wide text-teal-600 font-semibold">
                    {s.pillar}
                  </div>
                  <div className="mt-1 font-bold text-lg text-gray-900">{s.name}</div>
                  <div className="mt-2 flex justify-center">
                    <Stars value={s.rating} />
                  </div>
                </div>

                {/* Body */}
                <p className="mt-5 text-gray-700 leading-relaxed text-center">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={() => go(index - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow p-2"
          aria-label="Previous testimonial"
        >
          ‹
        </button>
        <button
          onClick={() => go(index + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow p-2"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-2.5 w-2.5 rounded-full ${
              i === index ? "bg-primary-600" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
