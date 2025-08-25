import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { googleReviews } from '../data/googleReviews'

const GoogleReviews = () => {
  // Show only the first 3 reviews on homepage
  const displayReviews = googleReviews.slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayReviews.map((review, index) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="flex items-center mb-6">
            <div className="flex space-x-1 mr-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <Quote className="h-6 w-6 text-primary-600" />
          </div>
          
          <p className="text-gray-700 mb-6 italic leading-relaxed">
            "{review.text}"
          </p>
          
          <div className="flex items-center">
            <img
              src={review.profile_photo_url}
              alt={review.author_name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-semibold text-gray-900">{review.author_name}</h4>
              <p className="text-sm text-gray-500">{review.location} • {review.relative_time_description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default GoogleReviews
