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

export type RecipeDefinition = {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  subheadline: string;
  meta: string[];
  surpriseHeadline: string;
  surpriseBody: string[];
  whyHeadline: string;
  whyBody: string[];
  ingredients: RecipeIngredient[];
  ingredientsNote: string;
  steps: RecipeStep[];
  bakeTemp: string;
  bakeTempConvection: string;
  bakeTime: string;
  difficulty: string;
  faq: RecipeFaqItem[];
  moreUses: RecipeMoreUse[];
  images: RecipeImages;
  ogImage: string;
  sourceMessages?: Record<string, string>;
};
