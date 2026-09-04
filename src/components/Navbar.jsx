import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Explorer Club', path: '/explorer-club', external: true },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
         className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
         isScrolled 
           ? 'border-[#173b40]/10 bg-[#fbf8f1]/95 backdrop-blur-md shadow-sm'
           : 'border-white/15 bg-[#071b22]/20 backdrop-blur-sm'
       }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Wander Wyze Holidays home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="leading-none"
            >
              <span className={`block font-serif text-2xl ${isScrolled ? 'text-[#123d43]' : 'text-white'}`}>Wander Wyze</span>
              <span className={`mt-1 block text-[9px] font-semibold uppercase tracking-[0.35em] ${isScrolled ? 'text-[#91713e]' : 'text-[#e2c88e]'}`}>Holidays</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
  item.external ? (
    <a
      key={item.name}
      href={item.path}
      className={`nav-link ${
        isScrolled ? 'text-[#173b40]' : 'text-white'
      }`}
    >
      {item.name}
    </a>
  ) : (
    <Link
      key={item.name}
      to={item.path}
      className={`nav-link ${
        isScrolled ? 'text-[#173b40]' : 'text-white'
      } ${
        location.pathname === item.path ? 'text-[#c2923f]' : ''
      }`}
    >
      {item.name}
    </Link>
  )
))}
            
            <a href="/#design-trip" className="hidden min-h-11 items-center gap-2 bg-[#caa55c] px-5 text-sm font-bold text-[#102f34] transition hover:bg-[#e2c88e] xl:inline-flex">Design my trip <ArrowUpRight className="h-4 w-4" /></a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
                         className={`lg:hidden p-2 rounded-md ${
               isScrolled ? 'text-[#173b40]' : 'text-white'
             }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[#173b40]/10 bg-[#fbf8f1] lg:hidden"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
  item.external ? (
    <a
      key={item.name}
      href={item.path}
      onClick={() => setIsOpen(false)}
      className="text-gray-800 hover:text-primary-600 font-medium transition-colors duration-300"
    >
      {item.name}
    </a>
  ) : (
    <Link
      key={item.name}
      to={item.path}
      onClick={() => setIsOpen(false)}
      className={`text-gray-800 hover:text-primary-600 font-medium transition-colors duration-300 ${
        location.pathname === item.path ? 'text-primary-600' : ''
      }`}
    >
      {item.name}
    </Link>
  )
))}
                <a href="/#design-trip" onClick={() => setIsOpen(false)} className="premium-button mt-2">Design my trip <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
