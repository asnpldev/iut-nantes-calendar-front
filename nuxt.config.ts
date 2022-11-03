export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/google-fonts'
    ],
    modules: [
        '@vueuse/nuxt',
        '@pinia/nuxt',
        '@kevinmarrec/nuxt-pwa'
    ],
    /**
     * @CSS
     * CSS Modules
     */
    css: [
        '~/assets/scss/variables.scss',
        '~/assets/scss/reset.scss',
        '~/assets/scss/global.scss',
        '~/assets/scss/transitions.scss',
    ],

    /**
     * @GoogleFonts
     * @Docs: https://google-fonts.nuxtjs.org/
     */
    googleFonts: {
        families: {
            'Inter': [300, 400, 500, 600, 700],
        },
        prefetch: true,
    },

    meta: {
        viewport: 'width=device-width, initial-scale=1, user-scalable=no',
    },


    pwa: {
        meta: {
            description: 'EDT Non officiel de l\'Université de Nantes',
            theme_color: '#181922',
            mobileAppIOS: true,
            mobileApp: true,
        },
    },
})
