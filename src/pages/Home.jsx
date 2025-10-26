import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import DestinationCard from "../components/DestinationCard";

const Home = () => {
  const featuredDestinations = [
    {
      id: 1,
      name: "Maldives Paradise",
      location: "Maldives",
      description:
        "Crystal clear waters, pristine beaches, and overwater villas for the ultimate romantic getaway.",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "85,000",
      rating: "4.9",
      duration: "6 Days",
      url: "/maldives-paradise",
    },
    {
      id: 2,
      name: "Kenya Safari Adventure",
      location: "Kenya",
      description:
        "Experience the thrill of wildlife safaris in the heart of Africa's most beautiful landscapes.",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "1,25,000",
      rating: "4.8",
      duration: "8 Days",
      url: "/kenya-safari-packages",
    },
    {
      id: 3,
      name: "Bali Cultural Journey",
      location: "Indonesia",
      description:
        "Immerse yourself in Balinese culture, temples, and tropical paradise for families.",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "65,000",
      rating: "4.7",
      duration: "7 Days",
      url: "/bali-cultural-journey",
    },
  ];

  return (
    <div>
      <Hero />

      {/* Featured Destinations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Curated Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most exclusive destinations, carefully curated for discerning travelers
              seeking extraordinary experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/destinations"
              className="btn-primary text-lg px-10 py-4 flex items-center space-x-3 mx-auto"
            >
              <span>Explore All Destinations</span>
              <ArrowRight className="h-5 w-5" />
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Begin Your Extraordinary Journey
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let us craft the perfect bespoke travel experience tailored to your unique desires and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact#contact-form"
                className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-10 rounded-none transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
              >
                Plan Your Journey
              </Link>
              <Link
                to="/contact#contact-form"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-10 rounded-none transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
