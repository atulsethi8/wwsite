import { useState, useMemo } from "react";
import { Star } from "lucide-react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?kgmid=/g/11wnmq6793&hl=en-IN&q=Wander+Wyze+Holidays&shndl=30&shem=lcuae,lsptbl1c,sdl1pfh&source=sh/x/loc/osrp/m5/1&kgs=f33c1bdf7ecdfe72&utm_source=lcuae,lsptbl1c,sdl1pfh,sh/x/loc/osrp/m5/1#lrd=0x390d0181e6b3ed1b:0x58695912a3a6a8fe,1";

const slides = [
  {
    id: "hema",
    name: "Hema Jyala",
    location: "Maldives",
    title: "The Trust Builder!",
    rating: 5,
    img: "/images/testimonials/hema-jyala.png",
    text:
      "A huge thank you to Wander Wyze Holidays for arranging an absolutely flawless trip to Maldives! Every aspect of the journey, from the affordable air tickets to stunning accommodations to the thoughtfully curated activities, was handled with excellence. Highly recommended for stress-free travel!"
  },
  {
    id: "riddhi",
    name: "Riddhi Khandelwal",
    location: "Dubai",
    title: "The Reliability Champion!",
    rating: 5,
    img: "/images/testimonials/riddhi-khandelwal.png",
    text:
      "Absolutely amazing experience! Our Dubai trip was planned to perfection by Wander Wyze. Everything from airport transfers to hotel stays and sightseeing was super smooth and stress-free. We didn’t have to worry about a thing. Thanks for making it such a memorable and hassle-free trip. Highly recommended!"
  },
  {
    id: "pawan",
    name: "Pawan Dabas",
    location: "Australia & Singapore",
    title: "The Personalization Powerhouse",
    rating: 5,
    img: "/images/testimonials/pawan-dabas.png",
    text:
      "WanderWyze is a brilliant travel curator, bespoke advice after customising our itinerary to Australia. Ravinder got us a stayover in Singapore and was available for last-minute changes. Personalisation is the way—best booking experience; will use them for all future plans."
  },
  {
    id: "mayank",
    name: "Mayank Awasthi",
    location: "",
    title: "The Value Proposition!",
    rating: 5,
    img: "/images/testimonials/mayank-awasthi.png",
    text:
      "Excellent service. No one can match their rates and the deals they offer."
  },
  {
    id: "jaikrit",
    name: "Jaikrit Singh Rawat",
    location: "Azerbaijan",
    title: "The Professional Seal",
    rating: 5,
    img: "/images/testimonials/jaikrit-singh-rawat.png",
    text:
      "Amazing experience booking Azerbaijan with Wander Wyze! Seamless planning, well-organised itinerary and stays. Professional, detail-oriented, and truly hassle-free. Highly recommend!"
  },
  {
    id: "bhavya",
    name: "Bhavya Bhardwaj",
    location: "Dubai",
    title: "The Ultimate Experience Creator",
    rating: 5,
    img: "/images/testimonials/bhavya-bhardwaj.png",
    text:
      "Traveling with Wander Wyze Holidays was one of the best decisions I’ve made! Thoughtfully curated hotels, activities and routes—it wasn’t just a holiday, it was an experience. Everything ran like clockwork and the team helped instantly whenever needed. Wholeheartedly recommend!"
  }
];

export default function TestimonialsCarousel() {
  const pageSize = 3;
  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < slides.length; i += pageSize) {
      out.push(slides.slice(i, i + pageSize));
    }
    return out;
  }, []); // stable pages, dataset static

  const next = () => setPage((p) => (p + 1) % pages.length);
  const prev = () => setPage((p) => (p - 1 + pages.length) % pages.length);

  return (
    <div className="container-custom">
      {/* Internal headings intentionally omitted to avoid duplicate page headers */}

      <div className="relative">
        <button
          aria-label="Previous testimonials"
          onClick={prev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full border border-gray-300 bg-white p-2 shadow hover:bg-gray-50"
        >
          ◀
        </button>
        <button
          aria-label="Next testimonials"
          onClick={next}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full border border-gray-300 bg-white p-2 shadow hover:bg-gray-50"
        >
          ▶
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pages[page].map((s) => (
            <article
              key={s.id}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 relative"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="h-16 w-16 rounded-full ring-4 ring-white shadow overflow-hidden flex items-center justify-center bg-gray-100 text-gray-500 font-semibold">
                  {s.img ? (
                    <img
                      src={s.img}
                      alt={s.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to initials if the image can't load
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.removeChild(e.currentTarget);
                          parent.textContent = s.name
                            .split(" ")
                            .map((w) => w[0])
                            .slice(0, 2)
                            .join("");
                        }
                      }}
                    />
                  ) : (
                    s.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")
                  )}
                </div>
              </div>

              <div className="pt-8 text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  {s.name} {s.location ? <span className="text-gray-500">({s.location})</span> : null}
                </h3>

                <div className="mt-1 flex items-center justify-center gap-1 text-amber-400">
                  {Array.from({ length: s.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="mt-2 text-primary-600 font-semibold">{s.title}</p>

                {/* Trim long text and add ellipsis; no decorative quotes */}
                <p className="mt-3 text-gray-700">
                  {s.text.length > 420 ? s.text.slice(0, 420) + "…" : s.text}
                </p>

                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Read all reviews on Google
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to testimonials page ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${
                i === page ? "bg-primary-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
