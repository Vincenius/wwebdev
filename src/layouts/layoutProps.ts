// Shared prop shape for Layout + SidebarLayout. Optional fields include an
// explicit `| undefined` to satisfy `exactOptionalPropertyTypes` (astro/strictest).
export interface LayoutProps {
    title: string
    isArticle?: boolean | undefined
    hideHeader?: boolean | undefined
    date?: string | undefined
    link?: string | undefined
    image?: string | undefined
    description?: string | undefined
    titleNameFirst?: boolean | undefined
    updatedAt?: string | undefined
    noindex?: boolean | undefined
}
