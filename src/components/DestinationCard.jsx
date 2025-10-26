import { Clock, MapPin, Star } from "lucide-react";

const DestinationCard = ({ destination, index }) => {
  const {
    name,
    location,
    description,
    image,
    price,
    rating,
    duration,
    url, // NEW: static itinerary page (in /public)
  } = destination;

  const linkTarget = url || "/contact#contact-form";

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <a href={linkTarget}>
        <div className="relative h-56 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          {price && (
            <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ₹{price}
            </div>
          )}
        </div>
      </a>

      {/* Content */}
      <div className="p-6">
        <a href={linkTarget} className="no-underline">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        </a>

        <div className="flex items-center text-gray-600 text-sm mb-3 space-x-4">
          <span className="inline-flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </span>
          {rating && (
            <span className="inline-flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>{rating}</span>
            </span>
          )}
          {duration && (
            <span className="inline-flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </span>
          )}
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        <div className="flex justify-between items-center">
          <a href={linkTarget} className="btn-primary px-5 py-3">
            View Itinerary
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
