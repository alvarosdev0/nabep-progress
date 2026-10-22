import { fill, type Part } from "@/i18n";

/**
 * Renders a copy block that carries inline emphasis.
 *
 * `["Reported", { strong: "figures" }, " are quoted."]` becomes a sentence with
 * one emphasised word, without splitting the sentence into separate keys.
 */
export function Rich({
  parts,
  vars,
}: {
  parts: Part[];
  vars?: Record<string, string | number>;
}) {
  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === "string") {
          return <span key={index}>{fill(part, vars)}</span>;
        }

        if ("em" in part) {
          return (
            <span key={index} className="text-foreground">
              {fill(part.em, vars)}
            </span>
          );
        }

        return (
          <span key={index} className="font-semibold text-foreground">
            {fill(part.strong, vars)}
          </span>
        );
      })}
    </>
  );
}
