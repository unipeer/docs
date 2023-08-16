// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unipeer Docs',
  tagline: 'Documentation on using and contributing to Unipeer',
  url: 'https://docs.unipeer.exchange',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Logo light.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'unipeer', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/unipeer/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'announcement',
        content: '🚧 All information is a <b>work in progress</b> and <b>subject to change</b> 🚧',
        backgroundColor: '#fed0b4',
        textColor: '#0e144a',
        isCloseable: true,
      },
      navbar: {
        title: 'Unipeer Docs',
        logo: {
          alt: 'Unipeer Logo',
          src: 'img/Logo light.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Home',
          },
          {
            type: 'doc',
            docId: 'developer/core-contracts',
            position: 'left',
            label: 'Developer Docs',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Developer Docs',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.newcollective.earth',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/unipeerx',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/unipeerdoteth',
              },
            ],
          },
          {
            title: 'Apps',
            items: [
              {
                label: 'Testnet',
                href: 'https://app.unipeer.exchange/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://unipeer.exchange',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/unipeer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Unipeer`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
