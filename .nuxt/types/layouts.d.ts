import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/khaled/stuff/code/khaledwaleed.xyz/node_modules/.pnpm/nuxt@3.5.3_@types+node@18.16.17/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}