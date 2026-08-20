import { DotField, type DotFieldConfig } from "@/shared/ui/DotField/DotField";
import { HANDS_DOTS } from "./hands-dots";

const CONFIG: Partial<DotFieldConfig> = {
  // The Hero headline sits on top of the canvas and would otherwise
  // swallow pointer events, so track them across the whole section.
  pointerScopeSelector: "section",
  // Below the Hero's 768px breakpoint, the field goes from a full-cover
  // background to a short bottom strip — pull the two hands in toward
  // each other so they don't read as spread too far apart in that shape.
  centerPull: 40,
  centerPullBelow: 768,
};

export function HandsField() {
  return <DotField field={HANDS_DOTS} config={CONFIG} />;
}
