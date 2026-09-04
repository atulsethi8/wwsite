import { Link } from 'react-router-dom'
import { Instagram, MessageCircle, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#071f24] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-medium mb-4">Wander Wyze <span className="italic text-[#d7b56d]">Holidays</span></h3>
              <p className="max-w-xl text-white/60 leading-relaxed mb-6">
                Bespoke journeys, designed with care and supported by real people from first idea to final flight home.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/wanderwyzeholidays/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-white/20 p-3 transition-colors hover:border-[#d7b56d] hover:text-[#d7b56d]"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/919833834836" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-white/20 p-3 transition-colors hover:border-[#d7b56d] hover:text-[#d7b56d]"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7b56d] mb-6">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>

              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
          <li>
    <a href="/kenya-safari-packages" className="text-gray-300 hover:text-white transition-colors">
      Kenya Safari
    </a>
  </li>
  <li>
    <a href="/vietnam-tour-packages" className="text-gray-300 hover:text-white transition-colors">
      Vietnam
    </a>
  </li>
  <li>
    <a href="/dubai-combo-deals" className="text-gray-300 hover:text-white transition-colors">
      Dubai
    </a>
  </li>
       </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7b56d] mb-6">Talk to us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+91 9833834836</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <a href="mailto:info@wanderwyze.com" className="text-gray-300 hover:text-white">info@wanderwyze.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1" />
                <span className="text-gray-300">
                  255 2nd floor, Aggarwal Plaza, Sector-14, Rohini, Delhi-110085
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center"><p className="font-serif text-2xl">Have a place in mind?</p><a href="/#design-trip" className="inline-flex items-center gap-2 text-sm font-bold text-[#d7b56d]">Design your journey <ArrowUpRight className="h-4 w-4" /></a></div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Wander Wyze Holidays. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
