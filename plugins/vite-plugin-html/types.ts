export interface Options {
  /** CDN 配置 */
  cdn: CDN;
  /** 页面标题 */
  title?: string;
}

export interface CDN {
  /** 样式列表 */
  css: string[];
  /** 脚本列表 */
  js: string[];
}
