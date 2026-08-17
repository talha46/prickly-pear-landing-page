import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PricklyPearFacts } from "@/components/PricklyPearFacts";
import { IntroSection } from "@/components/IntroSection";
import { UsesGrid } from "@/components/UsesGrid";
import { WhyInteresting } from "@/components/WhyInteresting";
import { ProductSpotlight } from "@/components/ProductSpotlight";
import { ProductTransparency } from "@/components/ProductTransparency";
import { GiftSection } from "@/components/GiftSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { TrafficDebugPanel } from "@/components/TrafficDebugPanel";
import {
  getWebPageSchema,
  getFAQSchema,
  getProductSchema,
} from "@/lib/schema";

export function PageContent() {
  const schemas = [getWebPageSchema(), getFAQSchema(), getProductSchema()];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <PricklyPearFacts />
        <IntroSection />
        <UsesGrid />
        <WhyInteresting />
        <ProductSpotlight />
        <ProductTransparency />
        <GiftSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <TrafficDebugPanel />
    </>
  );
}
