import { motion } from 'framer-motion'
import { MapPin, Star, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const DestinationCard = ({ destination, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary-600 px-3 py-1 rounded-sm text-sm font-semibold">
          ₹{destination.price}
        </div>
        
        {/* Rating */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-semibold">{destination.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
            {destination.name}
          </h3>
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{destination.location}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {destination.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{destination.duration}</span>
          </div>
          
                     <Link to="/contact#contact-form" className="btn-primary text-sm px-6 py-2">
             View Itinerary
           </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default DestinationCard
