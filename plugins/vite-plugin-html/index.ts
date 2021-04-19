import { Plugin, HtmlTagDescriptor } from 'vite';
import { Options } from './types';

const pluginHtml = (options: Options): Plugin => ({
  name: 'vite:plugin-html',
  apply: 'build',
  transformIndexHtml: {
    enforce: 'pre',
    transform(html: string) {
      // 添加的标签数组
      const tags: HtmlTagDescriptor[] = [];
      const { title, cdn: { css, js } } = options;
      (css || []).forEach((url: string) => {
        tags.push({
          tag: 'link',
          attrs: { as: 'style', href: url },
          injectTo: 'head',
        });
      });
      (js || []).forEach((url) => {
        tags.push({
          tag: 'script',
          attrs: { crossorigin: 'crossorigin', src: url },
          injectTo: 'body'
        });
      });

      // 处理后的 html 字符串
      const htmlTransform = title && html.replace(/<title>(.*?)<\/title>/, `<title>${title}</title>`);

      return {
        html: htmlTransform,
        tags,
      };
    },
  },
});

export default pluginHtml;