import { useState } from "react"
import { motion} from "framer-motion"
import { Header } from "@/components/Header"
import { QueryInput } from "@/components/QueryInput"
import { QuickQuestions } from "@/components/QuickQuestions"
import { ZodiacGrid } from "@/components/ZodiacGrid"
import { getAstrologyResponse } from "@/lib/gemini"
import { LandingPage } from "@/components/LandingPage"
import { RecipeMaker } from "@/components/RecipeMaker"
import { Button } from "@/components/ui/button"
import "./App.css"

export default function App() {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)
  const [showLandingPage, setShowLandingPage] = useState(true)
  const [showRecipeMaker, setShowRecipeMaker] = useState(false)

  const handleSubmit = async () => {
    if (!query.trim()) return
    
    setLoading(true)
    try {
      const result = await getAstrologyResponse(query)
      setResponse(result)
    } catch (error) {
      console.error('Error:', error)
      setResponse('The cosmic energies are unclear at the moment. Please try again later.')
    }
    setLoading(false)
  }

  const handleQuickQuestion = async (question: string) => {
    setQuery(question)
    await handleSubmit()
  }

  const handleNavigateToApp = () => {
    setShowLandingPage(false)
  }

  const handleNavigateToRecipeMaker = () => {
    setShowRecipeMaker(true)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {showLandingPage ? (
        <LandingPage onNavigate={handleNavigateToApp} />
      ) : showRecipeMaker ? (
        <RecipeMaker />
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto min-h-screen px-4 py-8 flex flex-col items-center max-w-4xl"
        >
          <div className="w-full">
            <Header />
            <QueryInput
              query={query}
              loading={loading}
              response={response}
              onQueryChange={setQuery}
              onSubmit={handleSubmit}
            />
            <QuickQuestions onQuestionClick={handleQuickQuestion} />
            <ZodiacGrid onSignClick={handleQuickQuestion} />
            <Button onClick={handleNavigateToRecipeMaker} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-4">
              Go to Recipe Maker
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
