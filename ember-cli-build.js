'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },

    postcssOptions: {
      compile: {
        plugins: [require('@tailwindcss/postcss'), require('autoprefixer')],
      },
    },
  });

  return app.toTree();
};
