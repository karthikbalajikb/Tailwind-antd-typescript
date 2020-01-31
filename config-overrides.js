const { override, fixBabelImports, addLessLoader } = require('customize-cra');

const tailwindConfig = require('./tailwind.config.js');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
   style: 'css',
   style: true,
  }),
 addLessLoader({
   javascriptEnabled: true,
   modifyVars: { 
       '@primary-color': tailwindConfig.theme.colors.yellow['500'],
       '@border-radius-base': tailwindConfig.theme.borderRadius.base, 
    },
 }),
);