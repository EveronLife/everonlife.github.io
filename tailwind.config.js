const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: "jit",
    content: [
        './**/*.{razor,html}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'brandgreen': '#A7F413'
            },
        }
    },
    //variants: {
    //    extend: {
    //        fontWeight: ['hover'],
    //        backgroundColor: ['active']
    //    },
    //},
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
}
