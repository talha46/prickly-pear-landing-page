import Link from "next/link";

type CtaMicrocopyProps = {
  theme?: "light" | "dark";
  className?: string;
};

export function CtaMicrocopy({
  theme = "light",
  className = "",
}: CtaMicrocopyProps) {
  const textColor =
    theme === "dark" ? "text-sand/70" : "text-charcoal-light";
  const linkColor =
    theme === "dark"
      ? "text-sand underline-offset-4 hover:underline"
      : "text-pear underline-offset-4 hover:underline";

  return (
    <p className={`mt-3 text-xs leading-relaxed md:text-sm ${textColor} ${className}`}>
      5 OZ / 140g · Southwest specialty · Made in USA ·{" "}
      <Link href="#transparency" className={linkColor}>
        View ingredients
      </Link>
      {" · "}
      <Link href="#ways-to-use" className={linkColor}>
        Explore serving ideas
      </Link>
    </p>
  );
}
