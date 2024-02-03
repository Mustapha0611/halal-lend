/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors:{
        btn:'#CEAD50',
        main:'#000819',
        secondary:'#70798C',
        content:'#192233'
     }
   },
  
  },
  plugins: [],
}

