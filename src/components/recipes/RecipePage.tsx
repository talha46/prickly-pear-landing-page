import { Footer } from "@/components/Footer";
import { TrafficDebugPanel } from "@/components/TrafficDebugPanel";
import type { RecipeDefinition } from "@/config/recipes";
import { RecipeHeader } from "./RecipeHeader";
import { RecipeHero } from "./RecipeHero";
import { RecipeSurprise } from "./RecipeSurprise";
import { RecipeWhy } from "./RecipeWhy";
import { RecipeIngredients } from "./RecipeIngredients";
import { RecipeSteps } from "./RecipeSteps";
import { RecipeCard } from "./RecipeCard";
import { RecipeProductSpotlight } from "./RecipeProductSpotlight";
import { RecipeMoreUses } from "./RecipeMoreUses";
import { RecipeFAQ } from "./RecipeFAQ";
import { RecipeFinalCTA } from "./RecipeFinalCTA";
import { RecipeStickyCTA } from "./RecipeStickyCTA";
import { getBreadcrumbSchema, getRecipeSchema } from "@/lib/recipe-schema";

export function RecipePage({ recipe }: { recipe: RecipeDefinition }) {
  const schemas = [getRecipeSchema(recipe), getBreadcrumbSchema(recipe)];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <RecipeHeader recipe={recipe} />
      <main className="pb-24 md:pb-0">
        <RecipeHero recipe={recipe} />
        <RecipeSurprise recipe={recipe} />
        <RecipeWhy recipe={recipe} />
        <RecipeIngredients recipe={recipe} />
        <RecipeSteps recipe={recipe} />
        <RecipeCard recipe={recipe} />
        <RecipeProductSpotlight recipe={recipe} />
        <RecipeMoreUses recipe={recipe} />
        <RecipeFAQ recipe={recipe} />
        <RecipeFinalCTA recipe={recipe} />
      </main>
      <Footer />
      <RecipeStickyCTA />
      <TrafficDebugPanel />
    </>
  );
}
