import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Search, Sparkles } from 'lucide-react'
import DestinationCard from '../components/DestinationCard'

const destinations = [
  { id: 1, name: 'Maldives Paradise', location: 'Maldives', description: 'Beach villas, overwater villas and resort stays matched to your budget, meal plan and transfer preference.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80', duration: '5N / 6D sample', url: '/maldives-paradise', styles: ['Beach', 'Honeymoon'] },
  { id: 2, name: 'Kenya Safari Adventure', location: 'Kenya', description: 'Masai Mara, Amboseli, Lake Naivasha and Diani Beach with private safari and fly-in options.', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80', duration: 'Custom safari', url: '/kenya-safari-packages', styles: ['Safari', 'Luxury'] },
  { id: 3, name: 'Bali Cultural Journey', location: 'Indonesia', description: 'Ubud, temples, waterfalls, private drivers and a beach stay in Seminyak, Nusa Dua or another area.', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=80', duration: '6N / 7D sample', url: '/bali-cultural-journey', styles: ['Asia', 'Beach', 'Honeymoon'] },
  { id: 4, name: 'Dubai Holiday Packages', location: 'UAE', description: 'Hotels, private transport, Desert Safari, Abu Dhabi, yachts and Dubai’s top attractions.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80', duration: 'Custom package', url: '/dubai-combo-deals', styles: ['Short Breaks', 'Family'] },
  { id: 5, name: 'Vietnam Discovery', location: 'Vietnam', description: 'Hanoi, Halong Bay, Ninh Binh and Hoi An with cruises, transfers and local experiences.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80', duration: '4–7 day samples', url: '/vietnam-tour-packages', styles: ['Asia', 'Culture'] },
  { id: 6, name: 'Ladakh Adventure', location: 'India', description: 'Leh, Nubra and Pangong with altitude-aware pacing, permits and private SUV options.', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=80', duration: '6N / 7D sample', url: '/ladakh-adventure', styles: ['India', 'Adventure'] },
  { id: 7, name: 'Thailand Beach Holiday', location: 'Thailand', description: 'Phuket, Krabi, island tours and hotel areas chosen around families, couples or groups of friends.', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80', duration: '5N / 6D sample', url: '/thailand-family-fun', styles: ['Asia', 'Beach', 'Family'] },
  { id: 8, name: 'Singapore City Break', location: 'Singapore', description: 'Marina Bay, Sentosa, Universal Studios and family attractions in one compact city holiday.', image: 'https://images.unsplash.com/photo-1560613717-c793db79055e?auto=format&fit=crop&w=900&q=80', duration: '3N / 4D sample', url: '/singapore-city-break', styles: ['Asia', 'Short Breaks', 'Family'] },
  { id: 9, name: 'Switzerland Alpine Magic', location: 'Switzerland', description: 'Lucerne, Interlaken, Zermatt, scenic trains and mountain excursions with rail-pass planning.', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80', duration: '9N / 10D sample', url: '/switzerland-alpine-magic', styles: ['Europe', 'Luxury'] },
  { id: 10, name: 'Sri Lanka Highlands & Beach', location: 'Sri Lanka', description: 'Kandy, Nuwara Eliya, Bentota, Galle and Colombo with private transport and flexible 4★ / 5★ hotel combinations.', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80', duration: '5N / 6D sample', url: '/sri-lanka-tour-packages', styles: ['Asia', 'Beach', 'Family'] },
  { id: 11, name: 'Mauritius Island Escape', location: 'Mauritius', description: 'Beach resorts, island sightseeing and catamaran options for honeymooners, couples and families.', image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=80', duration: '6N / 7D sample', url: '/mauritius-holiday-packages', styles: ['Beach', 'Honeymoon', 'Family'] },
  { id: 12, name: 'Azerbaijan Baku & Gabala', location: 'Azerbaijan', description: 'Baku city, Gabala mountains, Gobustan and Absheron in a compact short-haul international trip.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80', duration: '5N / 6D sample', url: '/azerbaijan-baku-packages', styles: ['Short Breaks', 'Culture'] },
  { id: 13, name: 'Georgia City & Mountains', location: 'Georgia', description: 'Tbilisi, Gudauri and Kazbegi with optional Batumi for longer nightlife and Black Sea itineraries.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80', duration: '5N / 6D sample', url: '/georgia-tour-packages', styles: ['Short Breaks', 'Adventure'] },
  { id: 14, name: 'Europe Multi-Country', location: 'Europe', description: 'Switzerland + Paris, Switzerland + Austria, Germany + Amsterdam and other routes planned around efficient rail and flight sectors.', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80', duration: '8–12 night ideas', url: '/europe-tour-packages', styles: ['Europe', 'Culture'] },
  { id: 15, name: 'Albania + Montenegro', location: 'Balkans', description: 'Tirana, Kotor and Budva for couples who want boutique stays, scenic Adriatic drives and a less-common Europe route.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80', duration: '8N / 9D sample', url: '/albania-montenegro-packages', styles: ['Europe', 'Honeymoon'] },
  { id: 16, name: 'Andaman Island Escape', location: 'India', description: 'Port Blair, Havelock and Neil Island with ferries, beachfront hotels, scuba and private land transfers.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80', duration: '6N / 7D sample', url: '/andaman-tour-packages', styles: ['India', 'Beach', 'Family'] },
  { id: 17, name: 'Meghalaya & Shillong', location: 'India', description: 'Shillong, Cherrapunji, Dawki and Mawlynnong with monsoon-focused or drier-season road-trip options.', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80', duration: '5N / 6D sample', url: '/meghalaya-shillong-packages', styles: ['India', 'Adventure'] },
]

const filters = ['All', 'Beach', 'Safari', 'Europe', 'Asia', 'India', 'Family', 'Honeymoon', 'Short Breaks']

const Destinations = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [query, setQuery] = useState('')

  const visibleDestinations = useMemo(() => {
    const search = query.trim().toLowerCase()
    return destinations.filter(destination => {
      const matchesFilter = activeFilter === 'All' || destination.styles.includes(activeFilter)
      const haystack = `${destination.name} ${destination.location} ${destination.description} ${destination.styles.join(' ')}`.toLowerCase()
      return matchesFilter && (!search || haystack.includes(search))
    })
  }, [activeFilter, query])

  return (
    <div className="min-h-screen bg-[#fbf8f1] pt-20 text-[#173b40]">
      <section className="relative overflow-hidden bg-[#071f24] py-14 text-white lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(202,165,92,0.16),transparent_34%)]" />
        <div className="container-custom relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <p className="eyebrow text-[#d7b56d]">Find your next journey</p>
            <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">Where will your story <span className="italic text-[#e2c88e]">take you?</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70">Explore places by travel style, then use each guide to understand routes, seasons and the choices that shape the experience.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative mx-auto w-full overflow-hidden border border-white/15 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
            <video className="h-[430px] w-full object-contain sm:h-[500px] lg:h-[520px]" autoPlay muted loop playsInline controls preload="metadata" aria-label="Wander Wyze destination inspiration video">
              <source src="/videos/Destinations.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-b border-[#173b40]/10 bg-[#fbf8f1]/95 py-5 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0" role="group" aria-label="Filter destinations by travel style">
              {filters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`whitespace-nowrap border px-4 py-2 text-sm font-semibold transition ${activeFilter === filter ? 'border-[#173b40] bg-[#173b40] text-white' : 'border-[#173b40]/15 bg-white text-[#435d60] hover:border-[#91713e] hover:text-[#91713e]'}`} aria-pressed={activeFilter === filter}>{filter}</button>)}
            </div>
            <label className="relative block w-full lg:w-72"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#718183]" /><span className="sr-only">Search destinations</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search a place or style" className="h-11 w-full border border-[#173b40]/15 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-[#829092] focus:border-[#91713e]" /></label>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-9 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="eyebrow">Curated places</p><h2 className="font-serif text-4xl font-medium text-[#123d43]">{activeFilter === 'All' ? 'All journeys' : `${activeFilter} journeys`}</h2></div><p className="text-sm text-[#718183]">Showing {visibleDestinations.length} of {destinations.length} destinations</p></div>
          {visibleDestinations.length ? <motion.div layout className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">{visibleDestinations.map((destination, index) => <DestinationCard key={destination.id} destination={destination} index={index} />)}</motion.div> : <div className="border border-[#173b40]/10 bg-white px-6 py-20 text-center"><Sparkles className="mx-auto h-7 w-7 text-[#c2923f]" /><h3 className="mt-5 font-serif text-3xl">No exact match yet</h3><p className="mx-auto mt-3 max-w-lg text-[#607477]">Try another search or tell us the kind of holiday you want—we plan destinations beyond this collection too.</p><button onClick={() => { setQuery(''); setActiveFilter('All') }} className="editorial-link mt-6">View all destinations <ArrowRight className="h-4 w-4" /></button></div>}
        </div>
      </section>

      <section className="bg-[#0b3035] py-20 text-white">
        <div className="container-custom grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="eyebrow text-[#d7b56d]">Not sure where to go?</p><h2 className="max-w-3xl font-serif text-4xl font-medium sm:text-5xl">Start with the feeling, <span className="italic text-[#e2c88e]">not the map.</span></h2><p className="mt-5 max-w-2xl text-white/65">Share your travel month, number of travellers and budget. We’ll suggest destinations that genuinely fit.</p></div><a href="https://wa.me/919833834836?text=Hi%20Wander%20Wyze!%20I%20need%20help%20choosing%20a%20holiday%20destination." target="_blank" rel="noopener noreferrer" className="premium-button">Help me choose <ArrowRight className="h-4 w-4" /></a></div>
      </section>
    </div>
  )
}

export default Destinations
