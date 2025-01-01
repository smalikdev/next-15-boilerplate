import { useEffect, useState } from "react"
import screenfull from "screenfull"
import { MdFullscreen, MdOutlineFullscreenExit } from "react-icons/md"

const FullScreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleFullscreenChange = () => {
    setIsFullscreen(screenfull.isFullscreen)
  }

  const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle()
    }
  }

  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.on("change", handleFullscreenChange)
    }

    return () => {
      if (screenfull.isEnabled) {
        screenfull.off("change", handleFullscreenChange)
      }
    }
  }, [])

  return (
    <div>
      <button onClick={toggleFullscreen} className="transition-all duration-300 ease-in-out">
        <div className="block rounded-full border-lightshadow bg-lightsecondary p-2 shadow dark:bg-darksecondary">
          {isFullscreen ? (
            <MdOutlineFullscreenExit size={25} className="text-lightHeaderIcons dark:text-darkHeaderIcons" />
          ) : (
            <MdFullscreen size={25} className="text-lightHeaderIcons dark:text-darkHeaderIcons" />
          )}
        </div>
      </button>
    </div>
  )
}

export default FullScreenToggle
