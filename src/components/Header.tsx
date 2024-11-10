import { Moon, Stars, Sun } from "lucide-react"

export function Header() {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Moon className="w-8 h-8 text-purple-300 animate-pulse" />
        <Stars className="w-8 h-8 text-purple-300 animate-pulse delay-100" />
        <Sun className="w-8 h-8 text-purple-300 animate-pulse delay-200" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider">
        Cosmic Insights
      </h1>
      <p className="text-purple-200 text-lg italic">
        Explore the mysteries of the zodiac
      </p>
    </div>
  )
}