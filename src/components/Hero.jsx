import { motion } from 'framer-motion'
import { ArrowDownRight, Star } from 'lucide-react'
import VideoBackground from './VideoBackground'

const Hero = () => (
  <section className="relative min-h-[92vh] overflow-hidden bg-slate-950 text-white">
    <VideoBackground />
    <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#06181e]/82 via-[#06181e]/48 to-[#06181e]/5" />
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#06181e]/62 via-transparent to-[#06181e]/10" />
    <div className="container-custom relative z-20 flex min-h-[92vh] items-end pb-16 pt-36 lg:items-center lg:pb-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-4xl py-3">
        <div className="mb-7 inline-flex items-center gap-3 border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-md"><span className="h-1.5 w-1.5 rounded-full bg-[#d7b56d]" />Private journeys, thoughtfully made</div>
        <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] sm:text-6xl lg:text-[5.6rem]">Travel that feels <span className="italic text-[#f0d69c]">entirely yours.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">Bespoke holidays for couples, families and private groups—designed around your pace, your taste and the moments you want to remember.</p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="/#design-trip" className="premium-button group">Design my journey <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
          <a href="https://g.co/kgs/YzD3cJJ" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-[#071b22]"><Star className="h-4 w-4 fill-[#d7b56d] text-[#d7b56d]" /> 5.0 on Google</a>
        </div>
      </motion.div>
    </div>
    <div className="absolute bottom-6 right-8 z-20 hidden text-right text-xs uppercase tracking-[0.2em] text-white/60 lg:block">Wander further<br /><span className="text-white">We handle the details</span></div>
  </section>
)

export default Hero
