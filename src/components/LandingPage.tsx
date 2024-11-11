import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function LandingPage({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to Cosmic Insights</h1>
        <p className="text-purple-200 text-lg mb-8">Explore the mysteries of the zodiac</p>
        <Button onClick={onNavigate} className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg">
          Enter the App
        </Button>
      </motion.div>
    </div>
  );
}
