"use client"
import dynamic from "next/dynamic"

// Dynamically load the Lottie Player to disable SSR
const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player), {
  ssr: false,
})

import loaderAnimation from "./loader.json" // Update with your actual path

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Player
        autoplay
        loop
        src={loaderAnimation}
        style={{ height: "200px", width: "200px" }} // Adjust size as needed
      />
    </div>
  )
}

export default Loader
