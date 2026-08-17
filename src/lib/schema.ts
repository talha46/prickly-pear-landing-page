import { AMAZON_PRODUCT_URL, GUIDE_PATH, PRODUCT, SEO, SITE_URL, IMAGES, FAQ_ITEMS } from "@/config/product";

export function getWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: SEO.title,
    description: SEO.description,
    url: `${SITE_URL}${GUIDE_PATH}`,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Prickly Pear Jelly Guide",
      url: SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: "Prickly Pear Jelly",
      description:
        "A guide to prickly pear fruit and prickly pear cactus jelly, including uses and product information.",
    },
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: PRODUCT.name,
    description: SEO.description,
    brand: {
      "@type": "Brand",
      name: PRODUCT.brand,
    },
    image: `${SITE_URL}${IMAGES.jar}`,
    sku: PRODUCT.asin,
    weight: {
      "@type": "QuantitativeValue",
      value: 140,
      unitCode: "GRM",
    },
    offers: {
      "@type": "Offer",
      url: AMAZON_PRODUCT_URL,
      availability: "https://schema.org/OnlineOnly",
      seller: {
        "@type": "Organization",
        name: PRODUCT.brand,
      },
    },
  };
}
