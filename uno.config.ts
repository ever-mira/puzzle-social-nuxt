import { defineConfig, transformerDirectives, presetUno } from "unocss"

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerDirectives()],
  shortcuts: [
    ["text-sub", "text-gray-600"],
    ["text-sub-dark", "text-gray-400"],
    ["bg-highlight", "bg-[#f6f6f6]"],
    ["bg-highlight-dark", "bg-[#0b0b19]"],
  ],
  theme: {
    fontFamily: {
      figtree: "Figtree",
      pacifico: "Pacifico",
      inter: "Inter",
    },
    boxShadow: {
      mdsm: "0 2px 4px rgba(0, 0, 140, 0.1)",
    },
  },
})
