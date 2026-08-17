import { PRODUCT } from "@/config/product";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-dark bg-charcoal px-4 py-10 text-sand/80 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-lg font-bold text-sand">
              Prickly Pear Jelly Guide
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed">
              An independent educational resource about prickly pear fruit and{" "}
              {PRODUCT.name}. Product information is sourced from the product
              label. This site is not owned or operated by {PRODUCT.brand}.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-medium text-sand">{PRODUCT.brand}</p>
            <p className="mt-1">{PRODUCT.manufacturer.address}</p>
            <p className="mt-1">
              <a
                href={`https://${PRODUCT.manufacturer.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {PRODUCT.manufacturer.website}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 space-y-2 border-t border-sand/20 pt-6 text-xs text-sand/60">
          <p>
            Amazon availability, pricing, and promotions are subject to change.
          </p>
          <p>
            &copy; {currentYear} Prickly Pear Jelly Guide. This page contains
            links to Amazon. Product facts are based on the manufacturer&apos;s
            label. Not affiliated with or endorsed by Amazon or {PRODUCT.brand}.
          </p>
        </div>
      </div>
    </footer>
  );
}
