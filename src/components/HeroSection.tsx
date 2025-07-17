// src/components/HeroSection.tsx
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [showAfter, setShowAfter] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowAfter(true), 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white text-[#1E1E1E]">
      {/* Animated Gradient Ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#732EE1]/30 via-[#656565]/10 to-[#fff]/0 blur-3xl animate-spin-slow z-0" />
      {/* Floating Accent Shape */}
      <div className="absolute right-[-120px] top-1/3 w-80 h-80 bg-purple-400/20 rounded-full blur-2xl animate-float z-0" />
      {/* Background video restored */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      {/* Subtle white overlay for readability */}
      <div className="absolute inset-0 bg-white/60 z-10" />

      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#732EE1] via-[#656565] to-[#1E1E1E] bg-clip-text text-transparent drop-shadow-xl"
        >
          Expanding Creativity
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl md:text-4xl mt-4 text-[#732EE1] font-semibold drop-shadow-lg"
        >
          Beyond Limits
        </motion.h2>

        {/* Thumbnails */}
        <div className="flex gap-8 mt-16 items-center justify-center relative">
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            src="/thumbnail-before.jpg"
            alt="Before Edit"
            className="w-72 h-48 object-cover rounded-xl border-2 border-[#1E1E1E] shadow-lg"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.5, duration: 1, ease: 'easeInOut' }}
            className="w-2 h-48 bg-gradient-to-b from-[#732EE1] to-[#656565] origin-left"
          />
          <motion.img
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            src={showAfter ? "/thumbnail-after.jpg" : "/thumbnail-before.jpg"}
            alt="After Edit"
            className="w-72 h-48 object-cover rounded-xl border-2 border-[#732EE1] shadow-xl"
          />
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 0.8 }}
          className="mt-12 px-8 py-4 bg-gradient-to-r from-[#732EE1] to-[#656565] hover:brightness-110 text-white rounded-full font-bold text-lg shadow-lg transition-all duration-300"
          onClick={() => {
            const el = document.getElementById('services');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          View My Work
        </motion.button>
      </div>
    </section>
  )
}

export default HeroSection
