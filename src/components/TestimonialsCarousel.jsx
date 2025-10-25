import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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
  // You can add more here later in the same format:
  // {
  //   name: 'Pawan Dabas',
  //   location: 'Australia & Singapore',
  //   title: 'The Personalization Powerhouse',
  //   stars: 5,
  //   text: '…',
  //   photo: '/images/reviews/pawan-dabas.png',
  // },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  // Optional: auto-rotate (commented to avoid any scroll focus perception)
  // useEffect(() => {
  //   const t = setInterval(next, 7000);
  //   return () => clearInterval(t);
  // }, []);

  const s = slides[index];

  return (
    <div className="relative">
      {/* Card */}
      <div className="mx-auto max-w-4xl rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 px-6 sm:px-10 py-10">
        {/* Avatar */}
        <div className="flex justify-center -mt-16 mb-6">
          <img
            src={s.photo}
            alt={`${s.name} avatar`}
            className="h-24 w-24 rounded-full border-4 border-white shadow-md object-cover bg-gray-100"
            onError={(e) => {
              // graceful fallback if an image path is wrong
              e.currentTarget.src = 'https://via.placeholder.com/96x96.png?text=%20';
            }}
          />
        </div>

        {/* Name (Location) */}
        <h3 className="text-center text-2xl font-bold text-gray-900">
          {s.name} <span className="text-gray-500 text-lg">({s.location})</span>
        </h3>

        {/* Stars + Tag line */}
        <div className="mt-2 text-center">
          <div className="text-amber-400 text-lg" aria-label={`${s.stars} star rating`}>
            {'★★★★★'.slice(0, s.stars)}
          </div>
          <div className="mt-1 font-semibold text-primary-600">
            {s.title}
          </div>
        </div>

        {/* Review */}
        <div className="mt-6 text-center text-gray-700 leading-relaxed relative">
          <Quote className="h-6 w-6 text-primary-300 inline-block align-top mr-1" />
          <span className="align-middle">{s.text}</span>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-1 ring-gray-200 hover:bg-gray-50"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full ${
              i === index ? 'bg-primary-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
