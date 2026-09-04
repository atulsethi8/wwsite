const VideoBackground = () => (
  <div className="absolute inset-0 z-0">
    <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2074&q=85" aria-hidden="true">
      <source src="/videos/Destinations.mp4" type="video/mp4" />
    </video>
  </div>
)

export default VideoBackground
