module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('/src/assets/images/bg.png')",
        'appointment-bg': "url('/src/assets/images/appointment.png')",
        'testimonial-bg': "url('/src/assets/icons/quote.svg')",
        'footer-bg': "url('/src/assets/images/footer.png')"
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#4F5B7A",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}