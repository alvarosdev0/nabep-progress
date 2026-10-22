import { en, type Copy, type Part } from "./en";
import { es } from "./es";

export type { Copy, Part };
export { en, es };

/** The two languages the page ships. `en` is the root route. */
export type Lang = "en" | "es";

export const copy: Record<Lang, Copy> = { en, es };

/** Number formatting per language, so 200,000 never leaks into the Spanish page. */
export const locales: Record<Lang, string> = { en: "en-US", es: "es-VE" };

/**
 * Replaces `{{placeholders}}` with live values. Used so computed numbers are
 * never duplicated as literals in the copy.
 */
export function fill(
  text: string,
  vars?: Record<string, string | number>,
): string {
  if (!vars) return text;

  return text.replace(/\{\{(\w+)\}\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}
