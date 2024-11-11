import {useState} from React
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { generateRecipe } from '@/lib/gemini';

export function RecipeMaker() {
  const [preferences, setPreferences] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');

  const handleGenerateRecipe = async () => {
    const generatedRecipe = await generateRecipe(preferences, ingredients);
    setRecipe(generatedRecipe);
  };

  const handleAddIngredient = (ingredient: string) => {
    setIngredients((prevIngredients) => `${prevIngredients}, ${ingredient}`);
  };

  return (
    <div className="recipe-maker">
      <h2 className="text-2xl font-bold mb-4">Personalized Recipe Maker</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Preferences</label>
        <Input
          type="text"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          placeholder="Enter your preferences"
          className="mt-1 block w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Ingredients</label>
        <Input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients"
          className="mt-1 block w-full"
        />
      </div>
      <Button onClick={handleGenerateRecipe} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
        Generate Recipe
      </Button>
      <Button onClick={() => handleAddIngredient('New Ingredient')} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg ml-2">
        Add Ingredient
      </Button>
      {recipe && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Generated Recipe</h3>
          <p>{recipe}</p>
        </div>
      )}
    </div>
  );
}
