module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#28272D",
        "selected-text": "#A3A3FF",
        theme: "#ff7495",
        nav: "#404053",
        secondary: "#9191A4",
        badge: "#3F3F51",
        "input-border": "#565666",
        input: "#2A2A35",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      dropShadow: {
        xl: "0 3px 3px rgba(247, 37, 133, 0.25)",
      },
    },
  },
  plugins: [],
};
