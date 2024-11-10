import { motion } from "framer-motion"
import { Moon, Stars, Sun } from "lucide-react"

export function Header() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-8"
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Moon className="w-8 h-8 text-purple-300" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Stars className="w-8 h-8 text-purple-300" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Sun className="w-8 h-8 text-purple-300" />
        </motion.div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider"
      >
        Cosmic Insights
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-purple-200 text-lg italic"
      >
        Explore the mysteries of the zodiac
      </motion.p>
    </motion.div>
  )
}