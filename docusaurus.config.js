// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// import React from "react";
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const url = "https://kubearmor.io";
const baseUrl = "/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "KubeArmor",
  tagline: "Runtime Security Enforcement",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://kubearmor.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kubearmor", // Usually your GitHub org/user name.
  projectName: "kubearmor.io", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          blogTitle: "Blogs",
          blogDescription: "A KubeArmor powered blog!",
          postsPerPage: "ALL",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "/font/Poppins/Poppins-Regular.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "/font/Poppins/Poppins-Medium.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "/font/Poppins/Poppins-SemiBold.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "/font/Poppins/Poppins-Bold.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "/font/RobotoMono/RobotoMono-Regular.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "/font/RobotoMono/RobotoMono-Bold.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "/font/SourceCodePro/SourceCodePro-SemiBold.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "/font/SourceCodePro/SourceCodePro-Medium.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
  ],
  stylesheets: ["./src/css/custom.css"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/kubearmor/kubearmor-social-card.jpg",
      navbar: {
        logo: {
          alt: "KubeArmor Logo",
          src: "img/kubearmor/kubearmor-light-bg.svg",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Tutorial",
          // },
          {
            to: "/",
            label: "Home",
            position: "left",
          },
          { to: "https://github.com/kubearmor/KubeArmor/wiki", label: "Blog", position: "left" },
          {
            to: "https://docs.kubearmor.io/kubearmor/",
            label: "Documentation",
            position: "left",
          },
          { to: "/community", label: "Community", position: "left" },
          {
            type: "custom-GitHubStarButton",
            position: "right",
            itemProp: 44,
            anotherProp: "xyz",
          },
          {
            type: "custom-SlackIconButton",
            position: "right",
            itemProp: 45,
            anotherProp: "abc",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "KubeArmor Official Logo",
          src: "img/kubearmor/kubearmor-dark-bg.svg",
          href: `${url + baseUrl}`,
          width: 160,
          height: 51,
        },
        links: [
          {
            title: "Organization",
            items: [
              {
                label: "Blog",
                to: "https://github.com/kubearmor/KubeArmor/wiki",
              },
              {
                label: "Documentation",
                to: "https://docs.kubearmor.io/kubearmor/",
              },
              {
                label: "Community",
                to: `${url + baseUrl}/community`,
              },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                label: "Twitter",
                to: "https://twitter.com/KubeArmor",
              },
              {
                label: "GitHub",
                to: "https://github.com/facebook/docusaurus",
              },
              {
                label: "Slack",
                to: "https://join.slack.com/t/kubearmor/shared_invite/zt-1ltmqdbc6-rSHw~LM6MesZZasmP2hAcA/",
              },
              {
                label: "LinkedIn",
                to: "https://www.linkedin.com/company/kubearmor/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KubeArmor, Powered By AccuKnox.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
