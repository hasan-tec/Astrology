import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Stars } from "lucide-react"

interface QuickQuestionsProps {
  onQuestionClick: (question: string) => void
}

export function QuickQuestions({ onQuestionClick }: QuickQuestionsProps) {
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col sm:flex-row justify-center gap-3 mb-12 max-w-2xl mx-auto w-full"
    >
      <motion.div variants={buttonVariants} whileHover="hover" className="w-full sm:w-auto">
        <Button
          variant="outline"
          className="w-full sm:w-auto bg-slate-900/30 border-purple-500/30 text-purple-200 hover:bg-purple-500/20 transition-all duration-200"
          onClick={() => onQuestionClick("What's my horoscope for today?")}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Daily Horoscope
        </Button>
      </motion.div>
      <motion.div variants={buttonVariants} whileHover="hover" className="w-full sm:w-auto">
        <Button
          variant="outline"
          className="w-full sm:w-auto bg-slate-900/30 border-purple-500/30 text-purple-200 hover:bg-purple-500/20 transition-all duration-200"
          onClick={() => onQuestionClick("Tell me about love compatibility between zodiac signs.")}
        >
          <Heart className="w-4 h-4 mr-2" />
          Love Compatibility
        </Button>
      </motion.div>
      <motion.div variants={buttonVariants} whileHover="hover" className="w-full sm:w-auto">
        <Button
          variant="outline"
          className="w-full sm:w-auto bg-slate-900/30 border-purple-500/30 text-purple-200 hover:bg-purple-500/20 transition-all duration-200"
          onClick={() => onQuestionClick("What career paths are favored by the stars right now?")}
        >
          <Stars className="w-4 h-4 mr-2" />
          Career Path
        </Button>
      </motion.div>
    </motion.div>
  )
}