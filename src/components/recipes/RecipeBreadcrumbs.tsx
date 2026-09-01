import Link from "next/link";
import { GUIDE_PATH } from "@/config/product";
import type { RecipeDefinition } from "@/config/recipes";

export function RecipeBreadcrumbs({ recipe }: { recipe: RecipeDefinition }) {
  const crumbs = [
    { label: "Prickly Pear Guide", href: GUIDE_PATH },
    { label: "Recipes", href: `${GUIDE_PATH}#recipes` },
    { label: recipe.title, href: recipe.path, current: true },
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-cactus/10 bg-sand-light px-4 py-3 md:px-8 print:hidden"
    >
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 text-sm text-charcoal-light">
        {crumbs.map((crumb, index) => (
          <li key={crumb.label} className="flex items-center gap-2">
            {index > 0 && (
              <span aria-hidden="true" className="text-sand-dark">
                /
              </span>
            )}
            {crumb.current ? (
              <span aria-current="page" className="font-medium text-charcoal">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="transition-colors hover:text-pear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pear"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
