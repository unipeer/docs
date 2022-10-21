/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  home: [
    'intro',
    'basic',
    {
      type: 'category',
      label: 'Core Concepts ⚙️',
      items: [
        'concepts/escrow',
        'concepts/policies',
      ],
    },
    'start',
  ],

  developer: [
    {
      type: "category",
      label: "Core Contracts",
      link: { type: 'doc', id: 'developer/core-contracts' },
      items: [ 
      ]
    },
    'developer/contract-addresses',
  ],
};

module.exports = sidebars;
