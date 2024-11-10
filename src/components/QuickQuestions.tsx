import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Stars } from "lucide-react"

interface QuickQuestionsProps {
  onQuestionClick: (question: string) => void
}

export function QuickQuestions({ onQuestionClick }: QuickQuestionsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl">
      <Button
        variant="outline"
        className="bg-slate-900/30 border-purple-500/30 text-purple-200 hover:bg-purple-500/20 transition-all duration-200"
        onClick={() => onQuestionClick("What's my horoscope for today?")}
      >
        <Sparkles className="w-4 h-4 mr-2" />
        Daily Horoscope
      </Button>
      <Button
        variant="outline"
        className="bg-slate-900/30 border-purple-500/30 text-purple-200 hover:bg-purple-500/20 transition-all duration-200"
        onClick={() => onQuestionClick("Tell me about love compatibility between zodiac signs.")}
      >
        <Heart className="w-4 h-4 mr-2" />
        Love Compatibility
      </Button>
      <Button
        variant="outline"
        className="bg-slate-900/30 border-purple-500/30 text-purple-200 hover:bg-purple-500/20 transition-all duration-200"
        onClick={() => onQuestionClick("What career paths are favored by the stars right now?")}
      >
        <Stars className="w-4 h-4 mr-2" />
        Career Path
      </Button>
    </div>
  )
}