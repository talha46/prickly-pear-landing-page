import { Footer } from "@/components/Footer";
import { TrafficDebugPanel } from "@/components/TrafficDebugPanel";
import type { RecipeDefinition } from "@/config/recipes";
import { buildRecipeJsonLd } from "@/lib/recipe-schema";
import { RecipeBreadcrumbs } from "./RecipeBreadcrumbs";
import { RecipeHeader } from "./RecipeHeader";
import { RecipeHero } from "./RecipeHero";
import { RecipeSurprise } from "./RecipeSurprise";
import { RecipeWhy } from "./RecipeWhy";
import { RecipeTechnique } from "./RecipeTechnique";
import { RecipeIngredients } from "./RecipeIngredients";
import { RecipeSteps } from "./RecipeSteps";
import { RecipeCard } from "./RecipeCard";
import { RecipeTips } from "./RecipeTips";
import { RecipeProductSpotlight } from "./RecipeProductSpotlight";
import { RecipeDisclosure } from "./RecipeDisclosure";
import { RecipeMoreUses } from "./RecipeMoreUses";
import { RecipeFAQ } from "./RecipeFAQ";
import { RecipeFinalCTA } from "./RecipeFinalCTA";
import { RecipeStickyCTA } from "./RecipeStickyCTA";

export function RecipePage({ recipe }: { recipe: RecipeDefinition }) {
  return (
    <>
      {buildRecipeJsonLd(recipe).map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <RecipeHeader recipe={recipe} />
      <RecipeBreadcrumbs recipe={recipe} />
      <main className="pb-24 md:pb-0">
        <RecipeHero recipe={recipe} />
        <RecipeSurprise recipe={recipe} />
        <RecipeWhy recipe={recipe} />
        <RecipeTechnique recipe={recipe} />
        <RecipeIngredients recipe={recipe} />
        <RecipeSteps recipe={recipe} />
        <RecipeCard recipe={recipe} />
        <RecipeTips recipe={recipe} />
        <RecipeProductSpotlight recipe={recipe} />
        <RecipeDisclosure recipe={recipe} />
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
