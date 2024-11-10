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

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
      {zodiacSigns.map(({ icon: Icon, sign }) => (
        <ZodiacButton
          key={sign}
          icon={<Icon className="w-6 h-6" />}
          sign={sign}
          onClick={() => onSignClick(`Tell me about ${sign}'s characteristics and destiny.`)}
        />
      ))}
    </div>
  )
}