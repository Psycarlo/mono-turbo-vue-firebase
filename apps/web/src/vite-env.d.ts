/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string
  readonly VITE_FIREBASE_AUTH_DOMAIN: string
  readonly VITE_PROJECT_ID: string
  readonly VITE_STORAGE_BUCKET: string
  readonly VITE_MESSAGING_SENDER_ID: string
  readonly VITE_APP_ID: string
  readonly VITE_MEASUREMENT_ID: string
  readonly VITE_RECAPTCHA_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component
}
