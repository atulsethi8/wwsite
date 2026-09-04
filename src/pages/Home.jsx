import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Compass, Headphones, Map, MessageCircle, ShieldCheck, Sparkles, Star } from 'lucide-react'
import Hero from '../components/Hero'

const journeys = [
  { name: 'African Safaris', line: 'Wild landscapes. Remarkable lodges.', url: '/kenya-safari-packages', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Island Retreats', line: 'Barefoot days, beautifully arranged.', url: '/maldives-paradise', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Europe, Your Way', line: 'Iconic cities and quieter discoveries.', url: '/europe-tour-packages', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=85' },
]

const steps = [
  { icon: MessageCircle, number: '01', title: 'Tell us your vision', text: 'Share your dates, travel style and the experiences that matter to you.' },
  { icon: Map, number: '02', title: 'We craft the journey', text: 'Your travel designer shapes a considered itinerary, refined with your feedback.' },
  { icon: Compass, number: '03', title: 'Travel with confidence', text: 'Every booking is coordinated, with personal support before and throughout your trip.' },
]

const stories = [
  { quote: 'Every hotel, activity and destination felt handpicked just for us. It wasn’t just a holiday, it was an experience.', name: 'Bhavya Bhardwaj', trip: 'Private holiday' },
  { quote: 'Bespoke advice after customising our travel itinerary to Australia. Personalisation is the way for travel.', name: 'Pawan Dabas', trip: 'Australia & Singapore' },
  { quote: 'Everything from airport transfers to hotel stays and sightseeing was super smooth and stress-free.', name: 'Riddhi Khandelwal', trip: 'Dubai' },
]

const Home = () => {
  const [form, setForm] = useState({ name: '', phone: '', destination: '', dates: '', travellers: '', budget: '', style: '' })

  const submitTrip = (event) => {
    event.preventDefault()
    const details = ['Hello Wander Wyze, I would like help designing a trip.', `Name: ${form.name}`, `Destination: ${form.destination || 'Open to ideas'}`, `Travel dates: ${form.dates || 'Flexible'}`, `Travellers: ${form.travellers || 'Not decided'}`, `Approx. budget: ${form.budget || 'To discuss'}`, `Travel style: ${form.style || 'To discuss'}`, `Phone: ${form.phone}`].join('\n')
    window.open(`https://wa.me/919833834836?text=${encodeURIComponent(details)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-[#fbf8f1] text-[#102f34]">
      <Hero />

      <section className="border-b border-[#173b40]/10 bg-[#f0e8da]">
        <div className="container-custom grid grid-cols-2 divide-x divide-[#173b40]/10 py-7 lg:grid-cols-4">
          {[["5.0", "Google rating"], ["Bespoke", "Itineraries"], ["Personal", "Travel expert"], ["End-to-end", "Journey support"]].map(([value, label]) => (
            <div key={label} className="px-3 py-3 text-center lg:py-0"><p className="font-serif text-2xl text-[#123d43]">{value}</p><p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#607477]">{label}</p></div>
          ))}
        </div>
      </section>

      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.65fr]"><div><p className="eyebrow">Signature journeys</p><h2 className="premium-heading max-w-3xl">Places worth going.<br /><span className="italic text-[#91713e]">Journeys worth keeping.</span></h2></div><p className="max-w-xl text-lg leading-relaxed text-[#5c6f71]">We begin with what moves you, then build the route, stays and experiences around it. These are starting points—not off-the-shelf packages.</p></div>
          <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:auto-rows-[230px]">
            {journeys.map((journey, index) => (
              <motion.a key={journey.name} href={journey.url} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: index * 0.08 }} className={`journey-card group ${index === 0 ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-5'}`}>
                <img src={journey.image} alt={journey.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#071b22]/90 via-[#071b22]/10 to-transparent" />
                <div className="relative z-10 flex h-full items-end justify-between gap-5 p-7 lg:p-9"><div><p className="text-xs uppercase tracking-[0.2em] text-[#e2c88e]">Explore</p><h3 className="mt-2 text-3xl text-white">{journey.name}</h3><p className="mt-1 text-sm text-white/70">{journey.line}</p></div><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/40 text-white transition group-hover:bg-white group-hover:text-[#123d43]"><ArrowRight className="h-4 w-4" /></span></div>
              </motion.a>
            ))}
          </div>
          <div className="mt-9 text-center"><Link to="/destinations" className="editorial-link">Explore every destination <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="section-padding bg-[#0b3035] text-white">
        <div className="container-custom">
          <div className="text-center"><p className="eyebrow text-[#d7b56d]">The Wander Wyze way</p><h2 className="premium-heading mx-auto max-w-3xl text-white">Effortless for you.<br /><span className="italic text-[#e2c88e]">Meticulous behind the scenes.</span></h2></div>
          <div className="mt-16 grid gap-px bg-white/15 md:grid-cols-3">
            {steps.map(({ icon: Icon, number, title, text }) => <div key={number} className="bg-[#0b3035] p-8 lg:p-11"><div className="flex items-center justify-between"><Icon className="h-7 w-7 text-[#d7b56d]" /><span className="font-serif text-3xl text-white/20">{number}</span></div><h3 className="mt-10 text-2xl">{title}</h3><p className="mt-4 leading-relaxed text-white/65">{text}</p></div>)}
          </div>
          <div className="mt-12 grid gap-4 text-sm text-white/75 sm:grid-cols-3">{[[ShieldCheck,'Carefully selected partners'],[Headphones,'A real person when you need one'],[Sparkles,'Details tailored to your celebration']].map(([Icon,text]) => <div key={text} className="flex items-center justify-center gap-3"><Icon className="h-4 w-4 text-[#d7b56d]" />{text}</div>)}</div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-28"><p className="eyebrow">Travel stories</p><h2 className="premium-heading">The best journeys are <span className="italic text-[#91713e]">felt.</span></h2><p className="mt-6 text-[#607477]">Words from travellers who trusted us with their time away.</p><a href="https://g.co/kgs/YzD3cJJ" target="_blank" rel="noopener noreferrer" className="editorial-link mt-7">Read Google reviews <ArrowRight className="h-4 w-4" /></a></div>
          <div className="grid gap-5">{stories.map(story => <blockquote key={story.name} className="border border-[#173b40]/10 bg-[#fbf8f1] p-7 sm:p-9"><div className="flex gap-1 text-[#c2923f]">{[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}</div><p className="mt-5 font-serif text-2xl leading-relaxed text-[#173b40]">“{story.quote}”</p><footer className="mt-6 text-sm"><span className="font-bold">{story.name}</span><span className="mx-2 text-[#b39b71]">—</span><span className="text-[#718183]">{story.trip}</span></footer></blockquote>)}</div>
        </div>
      </section>

      <section id="design-trip" className="section-padding scroll-mt-20 bg-[#e9dfce]">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div><p className="eyebrow">Your journey starts here</p><h2 className="premium-heading">Let’s design something <span className="italic text-[#91713e]">wonderful.</span></h2><p className="mt-6 max-w-md text-lg leading-relaxed text-[#5c6f71]">Tell us the broad shape of your trip. A Wander Wyze travel expert will continue the conversation personally on WhatsApp.</p><div className="mt-8 space-y-3 text-sm text-[#435d60]">{['No fixed package or pressure','Ideas tailored to your budget','One point of contact throughout'].map(item => <p key={item} className="flex items-center gap-3"><Check className="h-4 w-4 text-[#91713e]" />{item}</p>)}</div></div>
          <form onSubmit={submitTrip} className="grid gap-5 bg-white p-6 shadow-[0_25px_70px_rgba(18,61,67,0.10)] sm:grid-cols-2 sm:p-10">
            <label className="premium-field"><span>Your name *</span><input required value={form.name} onChange={e => setForm({...form,name:e.target.value})} placeholder="Full name" /></label>
            <label className="premium-field"><span>WhatsApp number *</span><input required type="tel" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} placeholder="+91" /></label>
            <label className="premium-field"><span>Where would you like to go?</span><input value={form.destination} onChange={e => setForm({...form,destination:e.target.value})} placeholder="Destination or open to ideas" /></label>
            <label className="premium-field"><span>Travel dates</span><input value={form.dates} onChange={e => setForm({...form,dates:e.target.value})} placeholder="Dates or month" /></label>
            <label className="premium-field"><span>Number of travellers</span><input value={form.travellers} onChange={e => setForm({...form,travellers:e.target.value})} placeholder="Adults and children" /></label>
            <label className="premium-field"><span>Approximate total budget</span><select value={form.budget} onChange={e => setForm({...form,budget:e.target.value})}><option value="">Select a range</option><option>Under ₹1 lakh</option><option>₹1–3 lakh</option><option>₹3–6 lakh</option><option>₹6–10 lakh</option><option>₹10 lakh+</option></select></label>
            <label className="premium-field sm:col-span-2"><span>What kind of trip is this?</span><select value={form.style} onChange={e => setForm({...form,style:e.target.value})}><option value="">Choose your travel style</option><option>Honeymoon / Couple</option><option>Family holiday</option><option>Friends / Private group</option><option>Luxury escape</option><option>Adventure</option></select></label>
            <button className="premium-button mt-2 sm:col-span-2" type="submit">Continue on WhatsApp <ArrowRight className="h-4 w-4" /></button><p className="text-center text-xs text-[#718183] sm:col-span-2">By continuing, you agree to be contacted about this enquiry.</p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
