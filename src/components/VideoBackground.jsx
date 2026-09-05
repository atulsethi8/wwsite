const VideoBackground = () => (
  <div className="absolute inset-0 z-0">
    <picture className="block h-full w-full">
      <source media="(max-width: 767px)" srcSet="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=88" />
      <img
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=90"
        alt="Mountain landscape at sunrise"
        fetchPriority="high"
        className="h-full w-full object-cover object-center"
      />
    </picture>
  </div>
)

export default VideoBackground
