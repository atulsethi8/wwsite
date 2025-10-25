// src/components/TestimonialsCarousel.jsx
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const GMB_URL =
  "https://www.google.com/search?kgmid=/g/11wnmq6793&hl=en-IN&q=Wander+Wyze+Holidays&shndl=30&shem=lcuae,lsptbl1c,sdl1pfh&source=sh/x/loc/osrp/m5/1#lrd=0x390d0181e6b3ed1b:0x58695912a3a6a8fe,1,,,,";

const getInitials = (name = "") =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Stars = ({ count = 5 }) => (
  <div
    className="flex items-center justify-center gap-0.5 text-amber-500 mb-2"
    aria-label={`${count} star rating`}
  >
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-amber-500" />
    ))}
  </div>
);

const slides = [
  {
    name: "Hema Jyala",
    place: "Maldives",
    badge: "The Trust Builder",
    rating: 5,
    img: "/images/testimonials/hema-jyala.png",
    text:
      "A huge thank you to Wander Wyze Holidays for arranging an absolutely flawless trip to Maldives! Every aspect of the journey, from the affordable air tickets to stunning accommodations to the thoughtfully curated activities, was handled with excellence. Highly recommended for stress-free travel!",
  },
  {
    name: "Riddhi Khandelwal",
    place: "Dubai",
    badge: "The Reliability Champion",
    rating: 5,
    img: "/images/testimonials/riddhi-khandelwal.png",
    text:
      "Absolutely amazing experience! Our Dubai trip was planned to perfection by Wander Wyze. Everything from airport transfers to hotel stays and sightseeing was super smooth and stress-free. We didn’t have to worry about a thing. Thanks for making it such a memorable and hassle-free trip. Highly recommended!",
  },
  {
    name: "Pawan Dabas",
    place: "Australia & Singapore",
    badge: "The Personalization Powerhouse",
    rating: 5,
    img: "/images/testimonials/pawan-dabas.png",
    text:
      "WanderWyze is a brilliant travel curator—bespoke advice after customising our travel itinerary to Australia. Ravinder arranged a stayover in Singapore and handled last-minute activity changes. Personalisation beats automated itineraries. Best booking experience—will use them for all future plans.",
  },
  {
    name: "Mayank Awasthi",
    place: "",
    badge: "The Value Proposition",
    rating: 5,
    img: "/images/testimonials/mayank-awasthi.png",
    text:
      "Excellent service… No one can match their rates and the deals they offer.",
  },
  {
    name: "Jaikrit Singh Rawat",
    place: "Azerbaijan",
    badge: "The Professional Seal",
    rating: 5,
    img: "/images/testimonials/jaikrit-singh-rawat.png",
    text:
      "I had an amazing experience booking my Azerbaijan trip through Wander Wyze! The process was seamless and everything was well organised, from the itinerary to the accommodations. Their professionalism and attention to detail made the trip unforgettable. Highly recommend!",
  },
  {
    name: "Bhavya Bhardwaj",
    place: "Dubai",
    badge: "The Ultimate Experience Creator",
    rating: 5,
    img: "/images/testimonials/bhavya-bhardwaj.png",
    text:
      "Traveling with Wander Wyze Holidays was one of the best decisions I’ve ever made! The entire trip was thoughtfully curated—every hotel, activity, and route felt handpicked just for us. Everything ran like clockwork and the team helped instantly whenever needed. Wholeheartedly recommend—already dreaming about the next trip!",
  },
];

function ReviewCard({ t }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10">
      {/* Avatar */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <div className="h-20 w-20 rounded-full ring-4 ring-white shadow-md bg-gray-200 overflow-hidden flex items-center justify-center text-gray-700 font-semibold">
          <img
            src={t.img}
            alt={`${t.name} avatar`}
            className="h-full w-full object-cover"
            onError={(e) => {
              // fall back to initials block if image fails
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.textContent = getInitials(t.name);
            }}
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          {t.name}
          {t.place ? <span className="text-gray-500"> ({t.place})</span> : null}
        </h3>

        <Stars count={t.rating} />

        <p className="text-primary-700 font-semibold mb-4">{t.badge}</p>

        {/* Opening + closing quotes INSIDE the card */}
        <div className="relative px-2">
          <Quote
            aria-hidden="true"
            className="absolute top-0 left-0 h-5 w-5 text-primary-600/60"
          />
          <p
            className="text-gray-700 leading-relaxed text-[15px]"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 5, // clamp to 5 lines
              overflow: "hidden",
            }}
          >
            {t.text}
          </p>
          <Quote
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-5 w-5 text-primary-600/60 rotate-180"
          />
        </div>

        <a
          href={GMB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-primary-600 hover:text-primary-700 font-medium underline underline-offset-4"
        >
          Read full review on Google
        </a>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [page, setPage] = useState(0);

  // 3 cards per view (slides chunked by 3)
  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < slides.length; i += 3) out.push(slides.slice(i, i + 3));
    return out;
  }, []);

  const goPrev = () => setPage((p) => (p === 0 ? pages.length - 1 : p - 1));
  const goNext = () => setPage((p) => (p === pages.length - 1 ? 0 : p + 1));

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <p className="text-center text-xs tracking-[0.3em] text-primary-700 font-semibold mb-2">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900">
          WHY CHOOSE US? OUR CLIENTS SAY IT BEST.
        </h2>
        <p className="text-center text-gray-600 mt-3">
          Real words from real travelers—curated highlights from our Google
          reviews.
        </p>

        <div className="relative mt-12">
          {/* Controls */}
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg rounded-full p-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next"
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-lg rounded-full p-2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* 3-up grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pages[page].map((t, idx) => (
              <ReviewCard key={`${t.name}-${idx}`} t={t} />
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full ${
                  i === page ? "bg-primary-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
