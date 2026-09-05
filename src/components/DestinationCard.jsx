import { ArrowUpRight, Clock, MapPin } from 'lucide-react'

const DestinationCard = ({ destination, index }) => {
  const { name, location, description, image, duration, url, styles = [] } = destination
  const linkTarget = url || '/contact#contact-form'

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#173b40]/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(18,61,67,0.12)]" style={{ animationDelay: `${index * 70}ms` }}>
      <a href={linkTarget} className="relative block h-64 overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071f24]/70 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 bg-[#fbf8f1]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#173b40] backdrop-blur">Tailor-made</span>
        <span className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-white/45 bg-[#071f24]/25 text-white backdrop-blur transition group-hover:bg-white group-hover:text-[#173b40]"><ArrowUpRight className="h-4 w-4" /></span>
      </a>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">{styles.slice(0, 2).map(style => <span key={style} className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#91713e]">{style}</span>)}</div>
        <a href={linkTarget}><h3 className="mt-3 font-serif text-2xl font-medium leading-tight text-[#123d43] transition group-hover:text-[#91713e]">{name}</h3></a>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#718183]"><span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{location}</span>{duration && <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{duration}</span>}</div>
        <p className="mt-4 flex-1 leading-relaxed text-[#5c6f71]">{description}</p>
        <a href={linkTarget} className="editorial-link mt-6 self-start">Explore journey <ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </article>
  )
}

export default DestinationCard
