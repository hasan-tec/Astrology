import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ZodiacButtonProps {
  icon: React.ReactNode
  sign: string
  onClick?: () => void
}

export function ZodiacButton({ icon, sign, onClick }: ZodiacButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full"
    >
      <Button
        variant="outline"
        className="w-full flex flex-col items-center gap-2 p-4 h-auto bg-slate-900/30 border-purple-500/30 text-purple-200 hover:bg-purple-500/20 transition-all duration-200"
        onClick={onClick}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {icon}
        </motion.div>
        <span className="text-sm font-medium">{sign}</span>
      </Button>
    </motion.div>
  )
}