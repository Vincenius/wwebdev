// Ported from legacy-next/content/templates.js.
import type { Post } from './posts'

const data: Post[] = [
    {
        type: 'Template',
        date: '2022-11-01',
        headline: 'Next.js Web App Template',
        description:
            'A template to quickly set up a web app or SaaS. It includes the basic authentication logic using MongoDB as well as password reset logic with nodemailer.',
        link: '/templates/web-app-template',
        previewImage: '/preview/web-app-template.jpg',
        shareImage: '/preview/web-app-template.jpg',
    },
    {
        type: 'Template',
        date: '2022-09-29',
        headline: 'Next.js Micro-blogging Template',
        description:
            'A Next.js template for a twitter-like blog. You can write in markdown and upload images and videos.',
        link: '/templates/micro-blogging-template',
        previewImage: '/preview/modest-blog-preview.jpg',
        shareImage: '/preview/modest-blog-preview.jpg',
    },
    {
        type: 'Template',
        date: '2022-03-15',
        headline: 'Next.js Blog Template',
        description:
            'This is a simple blog template to quickly get started with writing. It has a clean design and provides a lot of flexibility.',
        link: '/templates/nextjs-blog-template',
        previewImage: '/preview/nextjs-blog-template-preview.png',
        shareImage: '/preview/nextjs-blog-template-preview.png',
    },
]

export default data
