/** @type {import('./src/types/plugin-config').PluginConfig} */
module.exports = {
  manifest: {
    base: {
      manifest_version: 1,
      version: '1.0.0',
      type: 'APP',
      name: {
        en: 'kintone-plugin-template',
        ja: '関連フィールド表示プラグイン',
        zh: '插件模板',
      },
      description: {
        en: 'kintone-plugin-template',
        ja: '特定のキー情報が一対一に紐づくようなアプリから、フィールド情報を詳細画面に表示します',
        zh: '插件模板',
      },
      icon: 'icon.png',
      homepage_url: {
        ja: 'https://konomi.app/',
        en: 'https://konomi.app/',
      },
      desktop: {
        js: ['https://cdn.jsdelivr.net/gh/local-bias/kintone-cdn@latest/dist/desktop.js'],
        css: [],
      },
      mobile: {
        js: ['https://cdn.jsdelivr.net/gh/local-bias/kintone-cdn@latest/dist/desktop.js'],
        css: [],
      },
      config: {
        html: 'config.html',
        js: ['https://cdn.jsdelivr.net/gh/local-bias/kintone-cdn@latest/dist/config.js'],
        css: [],
        required_params: [],
      },
    },
    dev: {
      desktop: { js: ['desktop.js'] },
      mobile: { js: ['desktop.js'] },
      config: { js: ['config.js'] },
    },
    prod: {
      desktop: {
        js: [
          'https://cdn.jsdelivr.net/gh/local-bias/kintone-plugin-template@latest/cdn/desktop.js',
        ],
      },
      mobile: {
        js: [
          'https://cdn.jsdelivr.net/gh/local-bias/kintone-plugin-template@latest/cdn/desktop.js',
        ],
      },
      config: {
        js: ['https://cdn.jsdelivr.net/gh/local-bias/kintone-plugin-template@latest/cdn/config.js'],
      },
    },
  },
};
