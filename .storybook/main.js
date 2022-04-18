const { mergeConfig } = require('vite');

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
  {
    name: '@storybook/addon-postcss',
    options: {
      cssLoaderOptions: {
        importLoaders: 1,
      },
      postcssLoaderOptions: {
        implementation: require('postcss'),
      },
    },
  },],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config) {
    return mergeConfig(config);
  },
};