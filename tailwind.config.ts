import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Headings
            'h3': {
              marginBottom: '6px',
            },
            
            // Code blocks
            'pre': {
              backgroundColor: '#f6f8fa',
              color: '#24292e',
              borderRadius: '6px',
              border: '1px solid #e1e4e8',
              // padding: '16px',
              // margin: '16px 0',
            },
            
            // Regular code styling
            'code': {
              backgroundColor: "#f6f8fa",
              color: "#24292e",
            },
            
            // Inline code (not in pre blocks)
            ':not(pre) > code': {
              backgroundColor: "#f1f1f1",
              padding: "2px 4px",
              borderRadius: "3px",
              color: "#e03131",
              fontWeight: "500",
            },
            
            // Remove quote marks from code blocks
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            
            // KaTeX styling
            '.katex': {
              marginTop: '50px',
              marginBottom: '50px',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
