import { motion } from "framer-motion"
import { Scale, Compass, Fish, Gem, Heart, Star, Leaf, Skull } from "lucide-react"
import { ZodiacButton } from "./ZodiacButton"

interface ZodiacGridProps {
  onSignClick: (question: string) => void
}

export function ZodiacGrid({ onSignClick }: ZodiacGridProps) {
  const zodiacSigns = [
    { icon: Scale, sign: "Libra" },
    { icon: Compass, sign: "Sagittarius" },
    { icon: Fish, sign: "Pisces" },
    { icon: Gem, sign: "Gemini" },
    { icon: Heart, sign: "Cancer" },
    { icon: Star, sign: "Leo" },
    { icon: Leaf, sign: "Virgo" },
    { icon: Skull, sign: "Scorpio" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl mx-auto"
    >
      {zodiacSigns.map(({ icon: Icon, sign }) => (
        <motion.div key={sign} variants={itemVariants}>
          <ZodiacButton
            icon={<Icon className="w-6 h-6" />}
            sign={sign}
            onClick={() => onSignClick(`Tell me about ${sign}'s characteristics and destiny.`)}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}