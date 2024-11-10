import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { SendHorizontal } from "lucide-react"

interface QueryInputProps {
  query: string
  loading: boolean
  response: string
  onQueryChange: (value: string) => void
  onSubmit: () => void
}

export function QueryInput({ query, loading, response, onQueryChange, onSubmit }: QueryInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="w-full bg-slate-900/50 backdrop-blur-lg border-purple-500/20 p-6 rounded-xl mb-8 shadow-lg shadow-purple-500/10">
        <div className="relative">
          <Input
            className="w-full bg-slate-800/50 border-purple-500/30 text-white placeholder-purple-300/50 pr-12 py-6 text-lg rounded-xl focus:ring-purple-500/50"
            placeholder="Ask about your cosmic destiny..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onSubmit()}
          />
          <Button
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500 hover:bg-purple-600 rounded-lg p-2 transition-all duration-200 ${loading ? 'animate-pulse' : ''}`}
            size="icon"
            onClick={onSubmit}
            disabled={loading}
          >
            <SendHorizontal className="w-5 h-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        
        {response && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 p-4 bg-slate-800/50 rounded-lg text-purple-100 border border-purple-500/20"
          >
            <p className="whitespace-pre-wrap leading-relaxed">{response}</p>
          </motion.div>
        )}
      </Card>
    </motion.div>
  )
}