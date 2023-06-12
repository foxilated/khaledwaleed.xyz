import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/khaled/stuff/code/khaledwaleed.xyz/node_modules/.pnpm/nuxt@3.5.3_@types+node@18.16.17/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}