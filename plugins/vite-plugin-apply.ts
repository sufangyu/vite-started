export default function applyPlugin() {
  return {
    name: 'vite:apply-setting',
    apply: 'build' // 或 'serve'
  }
}
