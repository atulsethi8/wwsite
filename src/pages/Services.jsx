import { motion } from 'framer-motion'
import { Users, Heart, Plane, Hotel, Map, Shield, Clock, Star } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Map,
      title: "Custom Itineraries",
      description: "Personalized travel plans designed around your preferences, budget, and travel style. Every detail is carefully crafted for your perfect journey.",
      features: ["Tailored to your interests", "Flexible scheduling", "Local expert recommendations", "Budget optimization"]
    },
    {
      icon: Plane,
      title: "Flight & Hotel Bookings",
      description: "Comprehensive booking services for flights, hotels, and transportation. We secure the best rates and ensure seamless connections.",
      features: ["Best price guarantee", "24/7 booking support", "Premium seat selection", "Hotel upgrades available"]
    },
    {
      icon: Users,
      title: "Family Packages",
      description: "Specially designed packages for families with children of all ages. Activities and accommodations that keep everyone happy and engaged.",
      features: ["Kid-friendly activities", "Family rooms & suites", "Educational experiences", "Safety-first approach"]
    },
    {
      icon: Heart,
      title: "Honeymoon Packages",
      description: "Romantic getaways perfect for newlyweds. From intimate beach resorts to luxury city breaks, create memories that last a lifetime.",
      features: ["Private experiences", "Romantic dining", "Luxury accommodations", "Special honeymoon perks"]
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance coverage to protect your investment and provide peace of mind throughout your journey.",
      features: ["Medical coverage", "Trip cancellation", "Baggage protection", "24/7 emergency support"]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance before, during, and after your trip. We're always here when you need us, no matter the time or place.",
      features: ["WhatsApp support", "Emergency assistance", "Local guides", "Real-time updates"]
    }
  ]

  const packages = [
    {
      name: "Starter Package",
      price: "₹25,000",
      duration: "3-5 Days",
      description: "Perfect for short getaways and weekend trips",
      features: ["Flight booking", "Hotel accommodation", "Basic itinerary", "Email support"],
      popular: false
    },
    {
      name: "Premium Package",
      price: "₹50,000",
      duration: "6-8 Days",
      description: "Our most popular choice for families and couples",
      features: ["Custom itinerary", "Premium hotels", "Local experiences", "24/7 support", "Travel insurance"],
      popular: true
    },
    {
      name: "Luxury Package",
      price: "₹1,00,000",
      duration: "8-12 Days",
      description: "Ultimate luxury experience with exclusive services",
      features: ["Luxury accommodations", "Private transfers", "Exclusive experiences", "Dedicated concierge", "Premium insurance"],
      popular: false
    }
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive travel solutions designed specifically for Indian families and couples. 
              From planning to execution, we handle every detail of your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From custom itineraries to comprehensive travel support, we provide everything you need for a perfect journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 text-primary-500 fill-current" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
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
              Choose Your Package
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible packages designed to suit different travel needs and budgets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card p-8 relative ${pkg.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600 mb-4">{pkg.duration}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  Choose Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-teal-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We understand Indian travelers and provide services tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Families" },
              { number: "200+", label: "Romantic Couples" },
              { number: "25+", label: "Countries Covered" },
              { number: "98%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const CheckCircle = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

export default Services
