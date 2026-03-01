import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/GlemirDocs/',
  lang: 'ja',
  title: 'Glemir',
  description: 'Glemir の操作説明サイト',

  head: [
    ['link', { rel: 'icon', href: '/images/glemir_icon.svg', type: 'image/svg+xml' }]
  ],

  themeConfig: {
    logo: '/images/glemir_icon.svg',

    nav: [
      { text: 'ガイド', link: '/guide/introduction' },
      { text: 'BOOTH', link: 'https://warabi1062.booth.pm/items/8044462' }
    ],

    sidebar: [
      {
        text: 'ガイド',
        items: [
          { text: 'はじめに', link: '/guide/introduction' },
          { text: '基本操作', link: '/guide/basic-usage' },
          { text: '設定パラメータ', link: '/guide/settings' },
          { text: 'OBS連携', link: '/guide/obs' }
        ]
      }
    ],

    outline: {
      label: '目次'
    },

    footer: {
      copyright: 'Copyright © 2026 Glemir'
    }
  }
})
