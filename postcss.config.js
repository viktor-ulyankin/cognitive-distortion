/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-custom-media'),
    require('postcss-css-variables'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};