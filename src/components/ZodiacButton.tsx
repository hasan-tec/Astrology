import { Button } from "@/components/ui/button"

interface ZodiacButtonProps {
  icon: React.ReactNode
  sign: string
  onClick?: () => void
}

export function ZodiacButton({ icon, sign, onClick }: ZodiacButtonProps) {
  return (
    <Button
      variant="outline"
      className="flex flex-col items-center gap-2 p-4 h-auto bg-slate-900/30 border-purple-500/30 text-purple-200 hover:bg-purple-500/20 transition-all duration-200 hover:scale-105"
      onClick={onClick}
    >
      {icon}
      <span className="text-sm font-medium">{sign}</span>
    </Button>
  )
}