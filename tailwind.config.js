/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          "dark-text": "hsl(229, 25%, 31%)",
          "score-text": "hsl(229, 64%, 46%)",
          "header-outline": "hsl(217, 16%, 45%)",
        }
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle 100vh at 50% 0, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        "rock-gradient": "linear-gradient(180deg, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)",
        "paper-gradient": "linear-gradient(180deg, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)",
        "scissors-gradient": "linear-gradient(180deg, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)",
        "lizard-gradient": "linear-gradient(180deg, hsl(261, 73%, 60%) 0%, hsl(261, 72%, 63%) 100%)",
        "spock-gradient": "linear-gradient(180deg, hsl(189, 59%, 53%) 0%, hsl(189, 58%, 57%) 100%)",
      },
      //need refactor
      boxShadow: {
        "inner-top": "inset 0 4px 0 0 rgba(0,0,0,0.2)",
        "inner-bottom": "inset 0 -4px 0 0 rgba(0,0,0,0.2)",
      },
      //need refactor
      width: {
        "1366": "1366px",
        "599": "599px",
        "400": "400px",
        "200": "200px",
        "150": "150px",
        "100": "100px",
        "75": "75px",
      },
      //need refactor
      height: {
        "599": "599px",
        "200": "200px",
        "150": "150px",
        "100": "100px",
        "75": "75px",
        "60": "60px",
        "35": "35px",
      }
    },
  },
  plugins: [],
}

