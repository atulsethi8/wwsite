import { motion } from 'framer-motion'
import DestinationCard from '../components/DestinationCard'

const destinations = [
  {
    id: 1,
    name: 'Maldives Paradise',
    location: 'Maldives',
    description: 'Beach villas, overwater villas and resort stays matched to your budget, meal plan and transfer preference.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80',
    duration: '5N / 6D sample',
    url: '/maldives-paradise'
  },
  {
    id: 2,
    name: 'Kenya Safari Adventure',
    location: 'Kenya',
    description: 'Masai Mara, Amboseli, Lake Naivasha and Diani Beach with private safari and fly-in options.',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80',
    duration: 'Custom safari',
    url: '/kenya-safari-packages'
  },
  {
    id: 3,
    name: 'Bali Cultural Journey',
    location: 'Indonesia',
    description: 'Ubud, temples, waterfalls, private drivers and a beach stay in Seminyak, Nusa Dua or another area.',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=80',
    duration: '6N / 7D sample',
    url: '/bali-cultural-journey'
  },
  {
    id: 4,
    name: 'Dubai Holiday Packages',
    location: 'UAE',
    description: 'Hotels, private transport, Desert Safari, Abu Dhabi, yachts and Dubai’s top attractions.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
    duration: 'Custom package',
    url: '/dubai-combo-deals'
  },
  {
    id: 5,
    name: 'Vietnam Discovery',
    location: 'Vietnam',
    description: 'Hanoi, Halong Bay, Ninh Binh and Hoi An with cruises, transfers and local experiences.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80',
    duration: '4–7 day samples',
    url: '/vietnam-tour-packages'
  },
  {
    id: 6,
    name: 'Ladakh Adventure',
    location: 'India',
    description: 'Leh, Nubra and Pangong with altitude-aware pacing, permits and private SUV options.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80',
    duration: '6N / 7D sample',
    url: '/ladakh-adventure'
  },
  {
    id: 7,
    name: 'Thailand Beach Holiday',
    location: 'Thailand',
    description: 'Phuket, Krabi, island tours and hotel areas chosen around families, couples or groups of friends.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80',
    duration: '5N / 6D sample',
    url: '/thailand-family-fun'
  },
  {
    id: 8,
    name: 'Singapore City Break',
    location: 'Singapore',
    description: 'Marina Bay, Sentosa, Universal Studios and family attractions in one compact city holiday.',
    image: 'https://images.unsplash.com/photo-1560613717-c793db79055e?auto=format&fit=crop&w=900&q=80',
    duration: '3N / 4D sample',
    url: '/singapore-city-break'
  },
  {
    id: 9,
    name: 'Switzerland Alpine Magic',
    location: 'Switzerland',
    description: 'Lucerne, Interlaken, Zermatt, scenic trains and mountain excursions with rail-pass planning.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80',
    duration: '9N / 10D sample',
    url: '/switzerland-alpine-magic'
  }
]

const Destinations = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="relative py-20 bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="uppercase tracking-[0.24em] text-sm font-semibold text-amber-300 mb-4">Wander Wyze Holidays</p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Explore Our Holiday Packages</h1>
            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
              Choose a destination to see sample routes, seasonality, travel tips and current enquiry options. Every trip can be tailored to your dates, budget and travel style.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard key={destination.id} destination={destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950 text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need a destination that is not listed?</h2>
          <p className="text-gray-300 mb-7">
            Send us your travel month, number of travellers and approximate budget. We’ll suggest suitable options and build a customised itinerary.
          </p>
          <a
            href="https://wa.me/919833834836?text=Hi%20Wander%20Wyze!%20I%20need%20help%20choosing%20a%20holiday%20destination."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-7 py-4 rounded-lg transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

export default Destinations
