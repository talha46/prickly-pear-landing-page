export type RecipeIngredient = {
  amount?: string;
  item: string;
  note?: string;
};

export type RecipeIngredientGroup = {
  label: string;
  items: RecipeIngredient[];
};

export type RecipeStep = {
  title: string;
  body: string;
};

export type RecipeStepPhase = {
  label: string;
  steps: RecipeStep[];
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

export type RecipeCardMeta = {
  label: string;
  value: string;
};

export type RecipeJarHighlight = {
  headline: string;
  body: string;
  highlightItems: string[];
  ctaLabel: string;
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
  heroEyebrow: string;
  heroImageAlt: string;
  cutOpenImageAlt: string;
  heroSecondaryCta: string;
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
  ingredientGroups?: RecipeIngredientGroup[];
  ingredientsIntro: string;
  ingredientsNote: string;
  stepsHeadline: string;
  stepsIntro: string;
  steps: RecipeStep[];
  stepPhases?: RecipeStepPhase[];
  bakeTemp: string;
  bakeTempConvection: string;
  bakeTime: string;
  chillTime?: string;
  difficulty: string;
  recipeYield?: string;
  cookTimeIso?: string;
  totalTimeIso?: string;
  recipeCategory: string;
  recipeCuisine: string;
  schemaKeywords: string[];
  faq: RecipeFaqItem[];
  moreUses: RecipeMoreUse[];
  images: RecipeImages;
  ogImage: string;
  /** Recipe concept attribution — not ownership */
  recipeSource: string;
  productJarNote: string;
  disclosureText: string;
  jarHighlight?: RecipeJarHighlight;
  cardMeta?: RecipeCardMeta[];
  cardAmazonCtaLabel?: string;
  finalCtaHeadline: string;
  finalCtaBody: string;
  finalCtaPrimaryLabel: string;
  finalCtaHeroAlt: string;
  sourceMessages?: Record<string, string>;
};
