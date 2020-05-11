/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

 
module.exports = {
  title: "BoTorch",
  tagline: "Bayesian Optimization in PyTorch",
  url: "https://botorch.org",
  baseUrl: "/",
  // used for publishing and more
  organizationName: "pytorch",
  projectName: "botorch",

  favicon: "img/botorch.ico",

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        docs: {
          // docs folder path relative to website dir.
          path: "docs",
          editUrl: "https://github.com/pytorch/botorch/edit/master/website",

          // sidebars file relative to website dir.
          sidebarPath: require.resolve("./sidebars.json"),
        },
        // ...
      },
    ],
  ],
  themeConfig: {
    googleAnalytics: {
      trackingID: "UA-139570076-2",
    },
    algolia: {
      apiKey: "207c27d819f967749142d8611de7cb19",
      indexName: "botorch",
    },

    // navbar: {
    //   title: "Create React App",
    //   logo: {
    //     alt: "Create React App Logo",
    //     src: "img/logo.svg",
    //   },
    //   links: [
    //     { to: "docs/getting-started", label: "Docs", position: "right" },
    //     {
    //       href: "https://reactjs.org/community/support.html",
    //       label: "Help",
    //       position: "right",
    //     },
    //     {
    //       href: "https://www.github.com/facebook/create-react-app",
    //       label: "GitHub",
    //       position: "right",
    //     },
    //   ],
    // },
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: "Docs",
    //       items: [
    //         {
    //           label: "Get Started",
    //           to: "docs/getting-started",
    //         },
    //         {
    //           label: "Learn React",
    //           href: "https://reactjs.org/",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Community",
    //       items: [
    //         {
    //           label: "Stack Overflow",
    //           href:
    //             "https://stackoverflow.com/questions/tagged/create-react-app",
    //         },
    //         {
    //           label: "Spectrum",
    //           href: "https://spectrum.chat/create-react-app",
    //         },
    //         {
    //           label: "Twitter",
    //           href: "https://twitter.com/reactjs",
    //         },
    //         {
    //           label: "Contributor Covenant",
    //           href:
    //             "https://www.contributor-covenant.org/version/1/4/code-of-conduct",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Social",
    //       items: [
    //         {
    //           label: "GitHub",
    //           href: "https://www.github.com/facebook/create-react-app",
    //         },
    //       ],
    //     },
    //   ],
    //   logo: {
    //     alt: "Facebook Open Source Logo",
    //     src: "img/oss_logo.png",
    //   },
    //   copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
    // },
    // headerLinks: [
    //   { doc: "introduction", label: "Docs" },
    //   { href: `${baseUrl}tutorials/`, label: "Tutorials" },
    //   { href: `${baseUrl}api/`, label: "API Reference" },
    //   { href: "https://github.com/pytorch/botorch", label: "GitHub" },
    // ],

    navbar: {
      logo: {
        alt: "BoTorch Logo: White",
        src: "img/botorch_logo_lockup_white.png",
      },
      links: [
        { to: "docs/introduction", label: "Docs", position: "right" },
        { href: "tutorials", label: "Tutorials", position: "right" },
        { href: "api", label: "API Reference", position: "right" },
        {
          href: "https://github.com/pytorch/botorch",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Facebook Open Source Logo",
        src: "img/oss_logo.png",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/introduction",
            },
            {
              label: "Getting Started",
              to: "docs/getting-started",
            },
            {
              label: "Tutorials",
              to: "tutorials/",
            },
            {
              label: "API References",
              to: "api/",
            },
          ],
        },
        {
          title: "Social",
          iitems: [
            {
              label: "GitHub",
              href: "https://github.com/pytorch/botorch",
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`, // You can also put own HTML here
      image: "img/botorch.png",
      // Equivalent to `docsSideNavCollapsible`
      sidebarCollapsible: false,
    },
  },
};

