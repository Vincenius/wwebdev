import blogTemplate from '../public/preview/nextjs-blog-template-preview.png'
import microblogTemplate from '../public/preview/modest-blog-preview.jpg'
import webAppTemplate from '../public/preview/web-app-template.jpg'

const data = [
  {
    id: 3,
    type: 'Template',
    date: 'November 01, 2022',
    headline: "Next.js Web App Template",
    description: "A template to quickly set up a web app or SaaS. It includes the basic authentication logic using MongoDB as well as password reset logic with nodemailer.",
    link: "/templates/web-app-template",
    previewImage: webAppTemplate,
    shareImage: "/preview/web-app-template.jpg",
  },
  {
    id: 2,
    type: 'Template',
    date: 'September 29, 2022',
    headline: "Next.js Micro-blogging Template",
    description: "A Next.js template for a twitter-like blog. You can write in markdown and upload images and videos.",
    link: "/templates/micro-blogging-template",
    previewImage: microblogTemplate,
    shareImage: "/preview/modest-blog-preview.jpg",
  },
  {
    id: 1,
    type: 'Template',
    date: 'March 15, 2022',
    headline: "Next.js Blog Template",
    description: "This is a simple blog template to quickly get started with writing. It has a clean design and provides a lot of flexibility.",
    link: "/templates/nextjs-blog-template",
    previewImage: blogTemplate,
    shareImage: '/preview/nextjs-blog-template-preview.png',
  },
]

export default data
