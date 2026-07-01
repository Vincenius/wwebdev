/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    /** Client-exposed base hostname (was NEXT_PUBLIC_HOSTNAME). */
    readonly PUBLIC_HOSTNAME: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
