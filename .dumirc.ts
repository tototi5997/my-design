import { defineConfig } from 'dumi';

export default defineConfig({
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'MyDesign', // 组件库名称
    logo: '/logo.svg', // 组件logo
    nav: [], // nav标题
    footer: false, // 页脚
  },
  favicons: ['/logo.svg'],
  svgr: {},
  lessLoader: {
    modifyVars: {
      hack: `true; @import "~@/styles/index.less";`,
    },
  },
});
