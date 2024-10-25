/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
