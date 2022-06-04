import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: "src",
    modules: ['@nuxtjs/tailwindcss'],
    vue: {
        compilerOptions: {
            isCustomElement: tag => ['luc-header', 'luc-footer'].includes(tag)
        }
    }
});
