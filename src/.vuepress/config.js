const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'TangoSwap Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      }
    ],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#3a0839'
      }
    ],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ],

  backToTop: true,

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/assets/img/logo.png',
    repo: 'https://github.com/tangoswap-cash',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Tokenomics',
        link: '/tokenomics/',
      },
      {
        text: 'Products',
        link: '/products/',
      },
      {
        text: 'Exchange',
        link: 'https://tangoswap.cash'
      },
    ],
    sidebar: [
      '/',
      ['/tokenomics/', 'Tokenomics'],
      ['/security/', 'Security'],
      {
        title: 'Products',
        collapsable: false,
        children: [
          ['/products/', 'Overview'],
          {
            title: 'Exchange',
            children: [
              ['/products/amm-exchange/', 'Overview'],
              ['/products/amm-exchange/liquidity-pools/', 'Liquidity Pools'],
              // ['/products/amm-exchange/farm-allocation-algorithm/', 'Farm Allocation Algorithm'],
            ],
          },
          {
            title: 'Yield Farming',
            children: [
              ['/products/yield-farming/', 'Overview'],
              ['/products/yield-farming/the-tangobar/', 'TangoBar'],
            ],
          },
          {
            title: 'DEX Aggregator',
            children: [
              ['/products/dex-aggregator/', 'Overview'],
            ],
          },          
        ],
      },
      {
        title: 'Ecosystem',
        collapsable: false,
        children: [
          ['/ecosystem/developers/', 'Developers'],
          ['/ecosystem/branding/', 'Branding'],
          ['/ecosystem/token-listing/', 'Token Listing'],
        ],
      }
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [],

  /**
   * Internationalization locales
   */
  // TODO: Recovery config after most of the docs are translated.
  // locales: {
  //   // The key is the path for the locale to be nested under.
  //   // As a special case, the default locale can use '/' as its path.
  //   '/': {
  //     lang: 'English', // this will be set as the lang attribute on <html>
  //     title: 'TangoSwap Docs',
  //     description: description
  //   },
  //   '/i18n/de/': {
  //     lang: 'Deutsch',
  //     title: 'TangoSwap Doku',
  //     description: 'TangoSwap Dokumentation'
  //   },
  //   '/i18n/zh/': {
  //     lang: '简体中文',
  //     title: 'TangoSwap 文档',
  //     description: 'TangoSwap 文档'
  //   },
  // }
}
