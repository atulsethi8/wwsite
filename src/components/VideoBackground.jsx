import { useState, useEffect } from 'react'

const VideoBackground = () => {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is typical tablet/mobile breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const videoOptions = [
    {
      name: "Static Image",
      url: "/videos/Destinations.mp4"  // Your actual video file
    }
  ]

  // Auto-cycle through videos (only on mobile)
  useEffect(() => {
    if (!isMobile) return // Don't cycle videos on desktop
    
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentVideo((prev) => (prev + 1) % videoOptions.length)
        setIsTransitioning(false)
      }, 500) // Transition duration
    }, 8000) // Change video every 8 seconds

    return () => clearInterval(interval)
  }, [videoOptions.length, isMobile])

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 luxury-gradient z-10"></div>
      
      {/* Video Selector (for development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 z-30 bg-black/50 text-white p-2 rounded">
          <div className="text-xs mb-1">
            {isMobile ? 'Mobile: Video Mode' : 'Desktop: Image Mode'}
          </div>
          <select 
            value={currentVideo} 
            onChange={(e) => setCurrentVideo(Number(e.target.value))}
            className="bg-transparent text-white text-sm"
          >
            {videoOptions.map((video, index) => (
              <option key={index} value={index}>{video.name}</option>
            ))}
          </select>
          {isMobile && (
            <div className="text-xs mt-1">
              Auto-cycling every 8s
            </div>
          )}
        </div>
      )}

      {/* Video Progress Indicator (mobile only) */}
      {isMobile && (
        <div className="absolute top-4 right-4 z-30 bg-black/50 text-white p-2 rounded">
          <div className="text-xs mb-1">Video {currentVideo + 1} of {videoOptions.length}</div>
          <div className="w-24 h-1 bg-gray-600 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300 ease-linear"
              style={{ 
                width: `${((currentVideo + 1) / videoOptions.length) * 100}%` 
              }}
            ></div>
          </div>
        </div>
      )}

      {/* Transition Overlay (mobile only) */}
      {isMobile && isTransitioning && (
        <div className="absolute inset-0 z-20 bg-black/30 transition-opacity duration-500"></div>
      )}

      {/* Video Background (mobile only) */}
      {isMobile && (
        <video
          key={currentVideo}
          autoPlay
          muted
          loop={false}
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
          onError={(e) => {
            console.log('Video failed to load:', e);
            e.target.style.display = 'none';
          }}
        >
          <source src={videoOptions[currentVideo].url} type="video/mp4" />
        </video>
      )}
      
      {/* Static Background Image (desktop) or Fallback (mobile) */}
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
        }}
      ></div>
    </div>
  )
}

export default VideoBackground
