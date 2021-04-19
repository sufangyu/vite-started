// import { Plugin } from 'vite';

export default function commonHooks() {
  return {
    name: 'vite:common-hooks',
    resolveId(id) {
      console.log(id);
      return id;
    },
  }
}