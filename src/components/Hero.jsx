import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import VideoBackground from './VideoBackground'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
                           <VideoBackground />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto pt-16 sm:pt-20 md:pt-24"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight text-shadow"
          >
            Wander Wyze Holidays
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-center space-x-1 sm:space-x-2 mb-6"
          >
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg sm:text-xl md:text-2xl">⭐</span>
              ))}
            </div>
            <span className="text-white text-base sm:text-lg md:text-xl font-semibold ml-1 sm:ml-2">5.0</span>
            <span className="text-gray-200 text-base sm:text-lg md:text-xl">Google Reviews</span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 text-gray-100 font-light leading-relaxed max-w-4xl mx-auto px-4"
          >
            Tailored experience | Flights | Hotels | Group Tours | Visa 🌍
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 text-white px-4"
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base md:text-lg">
              <span className="text-lg sm:text-xl md:text-2xl">🏡</span>
              <span>Customise Trips</span>
            </div>
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base md:text-lg">
              <span className="text-lg sm:text-xl md:text-2xl">💰</span>
              <span>Best Price Guarantee</span>
            </div>
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base md:text-lg">
              <span className="text-lg sm:text-xl md:text-2xl">📞</span>
              <span>24/7 Support</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <Link to="/contact#contact-form" className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 flex items-center justify-center space-x-2 sm:space-x-3 w-full sm:w-auto">
              <span>Plan Your Journey</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            
            <a 
              href="https://g.co/kgs/YzD3cJJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 flex items-center justify-center space-x-2 sm:space-x-3 w-full sm:w-auto"
            >
              <span className="text-yellow-400 text-lg sm:text-xl">⭐</span>
              <span>Read Our Reviews</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
