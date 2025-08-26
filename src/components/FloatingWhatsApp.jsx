import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919833834836', '_blank')
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-4 md:right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 md:right-full md:left-auto md:mr-3 md:top-1/2 md:-translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Chat with us on WhatsApp
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 md:left-full md:top-1/2 md:-translate-y-1/2 w-0 h-0 border-t-4 border-t-gray-900 border-l-2 border-l-transparent border-r-2 border-r-transparent md:border-l-4 md:border-l-gray-900 md:border-t-2 md:border-t-transparent md:border-b-2 md:border-b-transparent"></div>
          </div>
        </div>
      </motion.button>
    </motion.div>
  )
}

export default FloatingWhatsApp
