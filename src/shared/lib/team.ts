export type Person = { name: string; title: string; photo: string };

// DiceBear-generated placeholder photo, seeded on the name so it's stable
// across renders. Deliberately not a real stranger's photo standing in as
// a "team member" — that reads as a real person to a visitor in a way a
// made-up name doesn't. Swap for real headshots once there's a roster.
function placeholderPhoto(seed: string) {
  // backgroundColor pinned to a neutral gray instead of DiceBear's random
  // default (which was landing on stark white/cream) — gray matches the
  // site's dark/white/gray-only palette; the old accent green doesn't
  // exist anymore.
  const params = new URLSearchParams({
    seed,
    backgroundColor: "d4d4d4",
  });
  return `https://api.dicebear.com/9.x/notionists/svg?${params.toString()}`;
}

// Placeholder team — names are made up (no real roster yet), to be swapped
// for the actual team later. Shared by HowWeWork (per-step avatars) and
// Team (the "Meet the Team" section) so both reference the same fictional
// people instead of drifting into two different made-up rosters.
function person(name: string, title: string): Person {
  return { name, title, photo: placeholderPhoto(name) };
}

export const TEAM = {
  founder: person("Akbar", "Founder"),
  pm: person("Elena Voss", "Product Manager"),
  dev: person("Marcus Lee", "Lead Developer"),
  designer: person("Sofia Ramos", "Product Designer"),
  qa: person("Daniel Kim", "QA Engineer"),
  security: person("Priya Nair", "Security Engineer"),
  devops: person("Tom Becker", "DevOps Engineer"),
  support: person("Nina Osei", "Support Lead"),
  // Represents the client's own involvement in the process (see
  // HowWeWork's "Review & Iterate" step) — not a real team member, so
  // Team.tsx filters this one out of the roster it renders.
  client: person("You", "Client"),
} satisfies Record<string, Person>;
