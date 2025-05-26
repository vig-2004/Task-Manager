interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string;
  // add other env variables here if needed
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;