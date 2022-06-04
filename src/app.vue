<template>
    <div className="h-screen flex flex-col">
        <luc-header />
        <div class="my-0 flex-1 mx-auto w-fit">
            <div class="mx-4 px-2 w-full max-w-4xl">
                <h1 class="text-xl">Tools</h1>
                <p>
                    This page is an aggregate of all the weird tools I work on /
                    maintain.<br />~Luc
                </p>
                <div class="flex gap-4 flex-wrap justify-between">
                    <a
                        v-bind:href="tool.href"
                        v-for="tool in tools"
                        v-bind:key="tool.name"
                        class="block overflow-hidden rounded-lg"
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
import "https://header.luc.computer/index.js";
import scyllo from "../assets/scyllo.png";
import logger from "../assets/logger.png";
import signal from "../assets/signal.png";
import sunflake from "../assets/sunflake.png";

export default {
    data() {
        return {
            tools: [
                {
                    image: scyllo,
                    name: "scyllo",
                    href: "https://github.com/lvkdotsh/scyllo",
                },
                {
                    image: logger,
                    name: "@lvksh/logger",
                    href: "https://github.com/lvkdotsh/logger",
                },
                {
                    image: signal,
                    name: "edgeserver",
                    href: "https://edgeserver.io",
                },
                {
                    image: sunflake,
                    name: "sunflake",
                    href: "https://github.com/lvkdotsh/sunflake",
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
