<template>
    <div className="h-screen flex flex-col">
        <luc-header />
        <div class="my-0 flex-1 mx-auto w-fit">
            <div class="mx-4 px-2 w-full max-w-4xl">
                <h1 class="text-xl">Tools</h1>
                <p>
                    This page is an collection of various projects I work on and
                    maintain.<br />Alec
                </p>
                <div class="flex gap-4 flex-wrap place-content-evenly overscroll-auto justify-between">
                    <a
                        v-bind:href="tool.href"
                        v-for="tool in tools"
                        v-bind:key="tool.name"
                        class="block rounded-lg border-neutral-800 border-2"
                        style="width: calc(50% - 0.5rem)"
                    >
                        <img
                            v-bind:src="tool.image"
                            v-bind:alt="tool.name"
                            class="hover:scale-105"
                        />
                    </a>
                </div>
            </div>
        </div>
        <luc-footer />
    </div>
</template>

<script>
// import "https://header.luc.computer/index.js";
import banner from "../assets/banner.png";
import bookmarks4dev from "../assets/screenshot-bookmarks4dev.png";
import collectionofsites from "../assets/screenshot-collectionofsites.png";
import guide4css from "../assets/screenshot-guide4css.png";
import hackernews4u from "../assets/screenshot-hackernews4u.png";
import maddiesworld from "../assets/screenshot-maddies-world.png";
import portfolios4me from "../assets/screenshot-portfolios4me.png";
import nextjsstarters from "../assets/screenshot-nextjs-starters.png";
import picknemoji from "../assets/screenshot-picknemoji.png";

export default {
    head() {
        return {
            meta: [
                {
                    hid: "og-type",
                    property: "og:type",
                    content: "website",
                },
                { hid: "og-title", property: "og:title", content: "luc.tools" },
                {
                    hid: "og-desc",
                    property: "og:description",
                    content: "list of things i make",
                },
                {
                    hid: "og-image",
                    property: "og:image",
                    content: "https://luc.tools/" + banner,
                },
                {
                    hid: "og-url",
                    property: "og:url",
                    content: "https://luc.tools",
                },
                {
                    hid: "twitter:type",
                    name: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    hid: "twitter:title",
                    name: "twitter:title",
                    content: "luc.tools",
                },
                {
                    hid: "twitter:description",
                    name: "twitter:description",
                    content: "list of things i make",
                },
                {
                    hid: "twitter:image",
                    property: "twitter:image",
                    content: "https://luc.tools/" + banner,
                },
            ],
        };
    },
    data() {
        return {
            tools: [
                {
                    image: bookmarks4dev,
                    name: "bookmarks4dev",
                    href: "https://bookmarks4dev.vercel.app",
                },
                {
                    image: collectionofsites,
                    name: "collectionofsites",
                    href: "https://collectionofsites.vercel.app",
                },
                {
                    image: guide4css,
                    name: "guide4css",
                    href: "https://guide4css.vercel.app",
                },
                {
                    image: maddiesworld,
                    name: "maddiesworld",
                    href: "https://maddiesworld.vercel.app",
                },
                {
                    image: hackernews4u,
                    name: "hackernews4u",
                    href: "https://hackernews4u.vercel.app",
                },
                {
                    image: nextjsstarters,
                    name: "nextjsstarters",
                    href: "https://nextjs-starters.vercel.app",
                },
                {
                    image: picknemoji,
                    name: "picknemoji",
                    href: "https://picknemoji.vercel.app",
                },
                        {
                    image: portfolios4me,
                    name: "portfolios4me",
                    href: "https://portfolios4me.vercel.app",
                },
            ],
        };
    },
};
</script>

<style>
html,
body {
    background: var(--color-bg);
    color: var(--color-main);
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: monospace, sans-serif;
    overflow: hidden;
}
html {
    overflow-y: overlay;
}
* {
    box-sizing: border-box;
}
:root {
    color-scheme: dark;
    --font-fallback: monospace;
    --font-body: "Hack", var(--font-fallback);
    --font-mono: "Hack", var(--font-fallback);
    --max-width: calc(100% - 2rem);
    font-size: 18px;
    --color-gray: #2d2e2f;
    --color-white: #fff;
    --color-text-white: #c8c8c8;
    --color-offwhite: #888;
    --color-almost-black: #121212;
    --color-black: #000;
    --color-pink: #ff43ac;
    --color-pink-alt: #ff81ba;
    --color-blue: #299bfd;
    --color-blue-alt: #59b8ff;
    --color-red: #ff5459;
    --color-yellow: #ffb85e;
    --color-yellow-alt: #ffcd8c;
    --color-green: #8dffde;
    --theme-round: 4px;
    background: transparent;
}
:root {
    font-size: 16px;
    --theme-bg: var(--color-almost-black);
    --theme-text-main: var(--color-white);
    --theme-text-post: var(--color-text-white);
    --theme-text-alt: var(--color-offwhite);
    --theme-link: var(--color-blue);
    --theme-code-border: 1px solid white;
    --theme-code-inline: var(--color-pink);
    --theme-person-link: var(--color-pink);
    --theme-person-bg: var(--color-almost-black);
    --theme-person-border: var(--color-white);
    --theme-person-highlight: rgba(255, 255, 255, 0.1);
    --theme-line-color: #686868;
    --theme-bg-hover: var(--color-offwhite);
    --theme-bg-focus: var(--color-offwhite);
    --color-bg: var(--theme-bg);
    --color-main: var(--theme-text-main);
    --color-alt: var(--theme-text-alt);
}
</style>
