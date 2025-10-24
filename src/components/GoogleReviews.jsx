import { Star } from "lucide-react";

// 🔗 Your exact Google reviews URL
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?kgmid=/g/11wnmq6793&hl=en-IN&q=Wander+Wyze+Holidays&shndl=30&shem=lcuae,lsptbl1c,sdl1pfh&source=sh/x/loc/osrp/m5/1&kgs=f33c1bdf7ecdfe72&utm_source=lcuae,lsptbl1c,sdl1pfh,sh/x/loc/osrp/m5/1#lrd=0x390d0181e6b3ed1b:0x58695912a3a6a8fe,1,,";

// ✍️ Edit these 3 items to your favorite real reviews (text kept short for design)
const TESTIMONIALS = [
  {
    name: "Client 1",
    text:
      "Flawless planning and super responsive throughout our Kenya safari. Lodges were top notch and transfers smooth!",
    rating: 5,
    when: "2 weeks ago",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" // optional
  },
  {
    name: "Client 2",
    text:
      "Vietnam itinerary was perfectly paced for our parents. Indian meals arranged most days—huge plus!",
    rating: 5,
    when: "1 month ago",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Client 3",
    text:
      "Seamless Dubai combo—flights, hotel and activities bundled. We just showed up and enjoyed!",
    rating: 5,
    when: "3 months ago",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop"
  }
];

const Stars = ({ rating }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i <= Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

export default function GoogleReviews() {
  return (
    <>
      {/* 3 clickable review cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <a
            key={idx}
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label={`Read ${t.name}'s full review on Google`}
            className="block group"
          >
            <div className="bg-white rounded-xl p-5 shadow-sm group-hover:shadow-md transition h-full">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
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

      {/* See all button */}
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
