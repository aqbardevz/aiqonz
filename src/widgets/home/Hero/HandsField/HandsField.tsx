import { DotField, type DotFieldConfig } from "@/shared/ui/DotField/DotField";
import { HANDS_DOTS } from "./hands-dots";

const CONFIG: Partial<DotFieldConfig> = {
  // The Hero headline sits on top of the canvas and would otherwise
  // swallow pointer events, so track them across the whole section.
  pointerScopeSelector: "section",
};

export function HandsField() {
  return <DotField field={HANDS_DOTS} config={CONFIG} />;
}
