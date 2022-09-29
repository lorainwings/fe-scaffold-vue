/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  type IndexType = Record<symbol | string | number, unknown>
  const component: DefineComponent<IndexType, IndexType, unknown>
  export default component
}
