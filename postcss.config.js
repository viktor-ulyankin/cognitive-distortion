/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
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