export type RecipeIngredient = {
  amount?: string;
  item: string;
  note?: string;
};

export type RecipeStep = {
  title: string;
  body: string;
};

export type RecipeFaqItem = {
  question: string;
  answer: string;
  amazonLink?: boolean;
};

export type RecipeMoreUse = {
  title: string;
  href: string;
  description: string;
};

export type RecipeImages = {
  hero: string;
  cutOpen: string;
  product: string;
  /** Editorial/decorative lifestyle imagery only - not a documentary photo of this bake. */
  lifestyle?: string;
};

export type RecipeTechniqueSection = {
  headline: string;
  items: string[];
};

export type RecipeDefinition = {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  subheadline: string;
  meta: string[];
  /** ISO date for structured data and visible freshness (YYYY-MM-DD) */
  dateModified: string;
  /** ISO first publication date when known from deployment history */
  datePublished?: string;
  /** Visible "Updated" label, e.g. "August 22, 2026" */
  updatedLabel: string;
  surpriseHeadline: string;
  surpriseBody: string[];
  whyHeadline: string;
  whyBody: string[];
  techniqueSections: RecipeTechniqueSection[];
  tipsHeadline: string;
  tipsBody: string[];
  ingredients: RecipeIngredient[];
  ingredientsNote: string;
  stepsHeadline: string;
  stepsIntro: string;
  steps: RecipeStep[];
  bakeTemp: string;
  bakeTempConvection: string;
  bakeTime: string;
  difficulty: string;
  faq: RecipeFaqItem[];
  moreUses: RecipeMoreUse[];
  images: RecipeImages;
  ogImage: string;
  /** Recipe concept attribution — not ownership */
  recipeSource: string;
  /** Visible note distinguishing source 8 oz jar from linked 5 oz product */
  productJarNote: string;
  /** Independent operator disclosure shown near product area */
  disclosureText: string;
  sourceMessages?: Record<string, string>;
};
