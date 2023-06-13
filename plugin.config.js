/** @type {import('./src/types/plugin-config').PluginConfig} */
module.exports = {
  manifest: {
    base: {
      manifest_version: 1,
      version: '1.0.1',
      type: 'APP',
      name: {
        en: 'Related field display plugin',
        ja: '関連フィールド表示プラグイン',
        zh: '相关字段显示插件',
      },
      description: {
        en: 'Display field information on the detail screen from an application that has a one-to-one relationship with specific key information',
        ja: '特定のキー情報が一対一に紐づくようなアプリから、フィールド情報を詳細画面に表示します',
        zh: '在与特定关键信息具有一对一关系的应用程序的详细信息屏幕上显示字段信息',
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
        js: ['https://cdn.jsdelivr.net/gh/local-bias/kintone-plugin-ref@latest/cdn/desktop.js'],
      },
      mobile: {
        js: ['https://cdn.jsdelivr.net/gh/local-bias/kintone-plugin-ref@latest/cdn/desktop.js'],
      },
      config: {
        js: ['https://cdn.jsdelivr.net/gh/local-bias/kintone-plugin-ref@latest/cdn/config.js'],
      },
    },
  },
};
