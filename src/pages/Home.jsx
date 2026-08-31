import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import DestinationCard from "../components/DestinationCard";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const Home = () => {
  const featuredDestinations = [
    {
      id: 1,
      name: "Dubai Holiday Packages",
      location: "UAE",
      description:
        "Hotels, private transport, Desert Safari, Abu Dhabi, yachts and Dubai’s top attractions.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
      duration: "Custom package",
      url: "/dubai-combo-deals",
    },
    {
      id: 2,
      name: "Kenya Safari Adventure",
      location: "Kenya",
      description:
        "Masai Mara, Amboseli, Lake Naivasha and Diani Beach with private safari and fly-in options.",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80",
      duration: "Custom safari",
      url: "/kenya-safari-packages",
    },
    {
      id: 3,
      name: "Maldives Paradise",
      location: "Maldives",
      description:
        "Beach villas, overwater villas and resort stays matched to your budget, meal plan and transfer preference.",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80",
      duration: "5N / 6D sample",
      url: "/maldives-paradise",
    },
    {
      id: 4,
      name: "Bali Cultural Journey",
      location: "Indonesia",
      description:
        "Ubud, temples, waterfalls, private drivers and a beach stay in Seminyak, Nusa Dua or another area.",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=80",
      duration: "6N / 7D sample",
      url: "/bali-cultural-journey",
    },
    {
      id: 5,
      name: "Vietnam Discovery",
      location: "Vietnam",
      description:
        "Hanoi, Halong Bay, Ninh Binh and Hoi An with cruises, transfers and local experiences.",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
      duration: "4–7 day samples",
      url: "/vietnam-tour-packages",
    },
    {
      id: 6,
      name: "Thailand Beach Holiday",
      location: "Thailand",
      description:
        "Phuket, Krabi, island tours and hotel areas chosen around families, couples or groups of friends.",
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80",
      duration: "5N / 6D sample",
      url: "/thailand-family-fun",
    },
  ];

  const moreDestinations = [
    { name: "Switzerland", url: "/switzerland-alpine-magic" },
    { name: "Singapore", url: "/singapore-city-break" },
    { name: "Ladakh", url: "/ladakh-adventure" },
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
            <p className="uppercase tracking-widest text-sm text-primary-600 mb-3">
              Where will you go next?
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Curated Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From short Dubai escapes to African safaris and tropical beach holidays,
              explore some of our most-requested journeys.
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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-semibold text-gray-500 mr-1">More favourites:</span>
            {moreDestinations.map((destination) => (
              <a
                key={destination.name}
                href={destination.url}
                className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-primary-500 hover:text-primary-600"
              >
                {destination.name}
              </a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
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

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="uppercase tracking-widest text-sm text-primary-600 mb-3">
              Google Reviews
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us? Our Clients Say It Best.
            </h2>
            <p className="text-lg text-gray-600">
              Real words from real travellers—curated highlights from our Google reviews.
            </p>
          </motion.div>

          <TestimonialsCarousel />
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
