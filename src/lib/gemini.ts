import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const ASTROLOGY_PROMPT = `You are a mystical astrologer with deep knowledge of zodiac signs, planetary alignments, and cosmic energies. 
Respond to questions with an ethereal and mystical tone, while providing insightful astrological guidance.
Keep responses concise (max 3 paragraphs) and always relate to astrological concepts.
Include relevant zodiac signs, planetary influences, and cosmic energies in your responses. talk in easy language, dont use big words.talk like the person is infront of you.`;

export async function getAstrologyResponse(query: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent([ASTROLOGY_PROMPT, query]);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error getting astrology response:", error);
    throw new Error("Failed to get astrological insights");
  }
}

const RECIPE_PROMPT = `You are a culinary expert with a deep understanding of flavors, ingredients, and cooking techniques. 
Respond to requests with a friendly and helpful tone, while providing detailed and easy-to-follow recipes.
Keep responses concise (max 3 paragraphs) and always relate to culinary concepts.
Include relevant ingredients, cooking methods, and tips in your responses.`;

export async function generateRecipe(preferences: string, ingredients: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent([RECIPE_PROMPT, `Preferences: ${preferences}`, `Ingredients: ${ingredients}`]);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating recipe:", error);
    throw new Error("Failed to generate recipe");
  }
}
