export type ThemePreset = {
  id: string;
  name: string;
  accent: string;
  gray: string;
  background: string;
};

export const presets: ThemePreset[] = [
  {
    id: "aura",
    name: "Aura",
    accent: "#4015ca",
    gray: "#7254cb",
    background: "#100b21",
  },
  {
    id: "iris",
    name: "Iris",
    accent: "#584dff",
    gray: "#79767a",
    background: "#000000",
  },
  {
    id: "ember",
    name: "Ember",
    accent: "#f75000",
    gray: "#54524e",
    background: "#2a2823",
  },
  {
    id: "cobalt",
    name: "Cobalt",
    accent: "#0040e6",
    gray: "#858585",
    background: "#0d0d0d",
  },
  {
    id: "lime",
    name: "Lime",
    accent: "#aeff00",
    gray: "#71706e",
    background: "#f5f2ef",
  },
  {
    id: "lagoon",
    name: "Lagoon",
    accent: "#43ceb9",
    gray: "#8c8c8c",
    background: "#ffffff",
  },
  {
    id: "amber",
    name: "Amber",
    accent: "#c38133",
    gray: "#b3b3b3",
    background: "#ffffff",
  },
  {
    id: "orchid",
    name: "Orchid",
    accent: "#8d30ad",
    gray: "#86738c",
    background: "#fafafa",
  },
  {
    id: "signal",
    name: "Signal",
    accent: "#18f260",
    gray: "#738c7b",
    background: "#0a122a",
  },
  {
    id: "sunbeam",
    name: "Sunbeam",
    accent: "#ffea28",
    gray: "#757575",
    background: "#f4f4f4",
  },
  {
    id: "coral",
    name: "Coral",
    accent: "#f84657",
    gray: "#8c7375",
    background: "#1a131b",
  },
];
