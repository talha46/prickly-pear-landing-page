import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "secondary-light" | "text";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center rounded-sm bg-pear px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-pear-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pear",
  secondary:
    "inline-flex items-center justify-center rounded-sm border-2 border-cactus bg-transparent px-6 py-3.5 text-base font-semibold text-cactus transition-colors hover:bg-cactus hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cactus",
  "secondary-light":
    "inline-flex items-center justify-center rounded-sm border-2 border-sand/50 bg-transparent px-6 py-3.5 text-base font-semibold text-sand transition-colors hover:bg-sand hover:text-cactus-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand",
  text: "inline-flex items-center gap-1 font-semibold text-pear underline-offset-4 transition-colors hover:text-pear-dark hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pear",
};

type AnchorLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "secondary-light";
};

export function AnchorLink({
  href,
  children,
  className = "",
  variant = "secondary",
}: AnchorLinkProps) {
  return (
    <Link
      href={href}
      className={`${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  id,
  title,
  subtitle,
  align = "left",
  theme = "light",
}: {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}) {
  const titleColor = theme === "dark" ? "text-white" : "text-charcoal";
  const subtitleColor =
    theme === "dark" ? "text-sand/90" : "text-charcoal-light";

  return (
    <div
      className={`mb-10 md:mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <h2
        id={id}
        className={`font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${subtitleColor} ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function SectionContainer({
  children,
  className = "",
  id,
  ariaLabelledBy,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`px-4 py-16 md:px-8 md:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
