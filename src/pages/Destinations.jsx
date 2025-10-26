import { motion } from 'framer-motion'
import DestinationCard from '../components/DestinationCard'
import { Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Maldives Paradise",
      location: "Maldives",
      description:
        "Crystal clear waters, pristine beaches, and overwater villas for the ultimate romantic getaway. Perfect for honeymooners and couples seeking luxury.",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "85,000",
      rating: "4.9",
      duration: "6 Days",
      category: "Beach",
      url: "/maldives-paradise"
    },
    {
      id: 2,
      name: "Kenya Safari Adventure",
      location: "Kenya",
      description:
        "Experience the thrill of wildlife safaris in the heart of Africa's most beautiful landscapes. See the Big Five in their natural habitat.",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "1,25,000",
      rating: "4.8",
      duration: "8 Days",
      category: "Adventure",
      url: "/kenya-safari-packages"
    },
    {
      id: 3,
      name: "Bali Cultural Journey",
      location: "Indonesia",
      description:
        "Immerse yourself in Balinese culture, temples, and tropical paradise. Perfect for families seeking cultural experiences and relaxation.",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "65,000",
      rating: "4.7",
      duration: "7 Days",
      category: "Cultural",
      url: "/bali-cultural-journey"
    },
    {
      id: 4,
      name: "Dubai Luxury Experience",
      location: "UAE",
      description:
        "Experience the perfect blend of modern luxury and traditional Arabian culture. From desert safaris to world-class shopping.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "95,000",
      rating: "4.8",
      duration: "5 Days",
      category: "Luxury",
      url: "/dubai-combo-deals"
    },
    {
      id: 5,
      name: "Vietnam Discovery",
      location: "Vietnam",
      description:
        "Explore the rich history, delicious cuisine, and stunning landscapes of Vietnam. From Hanoi to Ho Chi Minh City.",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "55,000",
      rating: "4.6",
      duration: "8 Days",
      category: "Cultural",
      url: "/vietnam-tour-packages"
    },
    {
      id: 6,
      name: "Ladakh Adventure",
      location: "India",
      description:
        "Discover the mystical landscapes of Ladakh, from high-altitude lakes to ancient monasteries in the Himalayas.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "45,000",
      rating: "4.7",
      duration: "7 Days",
      category: "Adventure",
      url: "/ladakh-adventure"
    },
    {
      id: 7,
      name: "Thailand Family Fun",
      location: "Thailand",
      description:
        "Perfect family destination with beautiful beaches, cultural sites, and exciting activities for all ages.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "75,000",
      rating: "4.8",
      duration: "6 Days",
      category: "Family",
      url: "/thailand-family-fun"
    },
    {
      id: 8,
      name: "Singapore City Break",
      location: "Singapore",
      description:
        "Modern city-state offering world-class attractions, shopping, and dining. Perfect for short family getaways.",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "60,000",
      rating: "4.7",
      duration: "4 Days",
      category: "City",
      url: "/singapore-city-break"
    },
    {
      id: 9,
      name: "Switzerland Alpine Magic",
      location: "Switzerland",
      description:
        "Breathtaking Alpine scenery, charming villages, and world-class skiing. Perfect for adventure and relaxation.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "1,50,000",
      rating: "4.9",
      duration: "10 Days",
      category: "Adventure",
      url: "/switzerland-alpine-magic"
    }
  ]

  const categories = ["All", "Beach", "Adventure", "Cultural", "Luxury", "Family", "City"]

  const standardItineraries = [
    {
      id: 1,
      name: "Maldives Honeymoon Special",
      duration: "6 Days / 5 Nights",
      highlights: ["Overwater Villa", "Private Beach Dinner", "Spa Treatment", "Sunset Cruise"],
      price: "₹85,000",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Bali Family Adventure",
      duration: "7 Days / 6 Nights",
      highlights: ["Temple Tours", "Beach Activities", "Cultural Shows", "Adventure Sports"],
      price: "₹65,000",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Dubai Luxury Experience",
      duration: "5 Days / 4 Nights",
      highlights: ["Desert Safari", "Burj Khalifa", "Shopping Tour", "Dhow Cruise"],
      price: "₹95,000",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Kenya Wildlife Safari",
      duration: "8 Days / 7 Nights",
      highlights: ["Game Drives", "Masai Village", "Lake Nakuru", "Amboseli"],
      price: "₹1,25,000",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-50 to-teal-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Explore Our Destinations
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From tropical paradises to cultural wonders, discover handpicked destinations 
              perfect for Indian families and couples
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick links to static pages */}
      <section className="mt-0 mb-6">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/kenya-safari-packages" className="px-4 py-2 rounded-md bg-slate-800 text-gray-200 hover:bg-slate-700 transition">
              Kenya Safari Packages
            </a>
            <a href="/vietnam-tour-packages" className="px-4 py-2 rounded-md bg-slate-800 text-gray-200 hover:bg-slate-700 transition">
              Vietnam Packages
            </a>
            <a href="/dubai-combo-deals" className="px-4 py-2 rounded-md bg-slate-800 text-gray-200 hover:bg-slate-700 transition">
              Dubai Combo Deals
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard key={destination.id} destination={destination} index={index} />
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-primary text-lg px-8 py-4">
              Load More Destinations
            </button>
          </motion.div>
        </div>
      </section>

      {/* Standard Itineraries */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Standard Itineraries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready-to-book packages with carefully curated experiences for different travel preferences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standardItineraries.map((itinerary, index) => (
              <motion.div
                key={itinerary.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={itinerary.image}
                    alt={itinerary.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {itinerary.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {itinerary.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{itinerary.duration}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {itinerary.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center">
                          <span className="w-1 h-1 bg-primary-600 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to="/contact#contact-form" 
                    className="w-full btn-primary text-sm py-2 flex items-center justify-center space-x-2"
                  >
                    <span>Get Quote</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              All itineraries include flights, hotels, transfers, and guided tours
            </p>
            <Link 
              to="/contact#contact-form" 
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Contact for Customization</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-teal-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We specialize in custom itineraries. Let us create the perfect journey for your specific needs and preferences.
            </p>
            <Link to="/contact#contact-form" className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block">
              Request Custom Itinerary
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Destinations
