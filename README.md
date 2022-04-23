# Next i18n Starter

This is a [Next.js](https://nextjs.org/) Template implementing [Internationalization (i18n)](https://nextjs.org/docs/advanced-features/i18n-routing).

> I wrote this because I found it hard to compose all the demos and docs together into what resembled a fully functioning content-centric website.

## Features To Consider ✨

This template:

- relies on local MDX files. Put your long-form content in any locale. This might be a deal-breaker for you.
- doesn't choose one of the [5 i18n libraries](https://nextjs.org/docs/advanced-features/i18n-routing) Next shortlists. Instead, it [creates its own translation API](https://xkcd.com/927/) 😅. Replace it if you need something more robust.
- implements gentle TypeScript hinting to ensure consistent translation across locales. (see below)
- doesn't make any choices about your styling solution. [Bikeshed](http://phk.freebsd.dk/sagas/bikeshed/) away.

## Translations 💬

Current locales are defined within `next.config.js`:

<!-- CODEBLOCK_START {"value": "next.config.js"} -->
<!-- prettier-ignore -->
~~~~~~~~~~js
File: next.config.js

module.exports = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
}
~~~~~~~~~~

<!-- CODEBLOCK_END -->

The `content/` directory contains a TypeScript definition file ensuring you never miss mapping a new value.

<!-- CODEBLOCK_START {"value": "content/translation.d.ts"} -->
<!-- prettier-ignore -->
~~~~~~~~~~ts
File: content\translation.d.ts

export type Nav = {
  home: string,
  chapter1: string,
}

export type Translation = {
    nav: Nav,
    welcome: string,
  }
~~~~~~~~~~

<!-- CODEBLOCK_END -->

### Adding a New Locale 🆕

1. Add the locale to `next.config.js`
1. Add a new locale directory under `/content`
1. Add `translation.ts` under the new locale directory, implementing the `Translation` type.
1. Add any long-form MDX content you wish to author.

## Development Getting Started 🚀

Node environment:

<!-- CODEBLOCK_START {"value": ".nvmrc"} -->
<!-- prettier-ignore -->
~~~~~~~~~~bash
File: .nvmrc

v16.14.2
~~~~~~~~~~

<!-- CODEBLOCK_END -->

> Use a tool like [nvm](https://github.com/nvm-sh/nvm) or [volta](https://volta.sh/) to manage Node versions.

Install dependencies:

```
npm ci
```

Then, run the development server:

```bash
npm run dev
```

### Installation options 🚧

**Option one:** One-click deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbmuenzenmeyer%2Fnext-i18n-starter)

**Option two:** Manual clone

1. Clone this repo: `git clone git@github.com:bmuenzenmeyer/next-i18n-starter.git`
2. Navigate to the directory and run `npm ci`
3. Run `npm run dev`

## Prior Art 🎨

I composed some resources to get this far. Thank you to:

- :heart: [Next Netlify Starter](https://github.com/netlify-templates/next-netlify-starter) - from which these docs are derived
- 🌐 [Next i18n-routing example](https://github.com/vercel/next.js/tree/canary/examples/i18n-routing) - for the LocaleSwitcher
- 📦 [Next MDX Remote](https://github.com/hashicorp/next-mdx-remote) via [Albert Barsegyan's demo](https://medium.com/@albert_barsegyan/i18n-internationalization-with-next-js-and-markdown-6477d818e906)
- 🔺 [Vercel](https://vercel.com/) for easy and free hosting supporting Server-Side Rendering

## Alternatives 🤔

- [nextjs-i18n-static-page-starter](https://github.com/Xairoo/nextjs-i18n-static-page-starter) - Consider this if you want Tailwind and i18next baked into your experience.
