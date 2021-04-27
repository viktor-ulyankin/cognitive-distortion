/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
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