// Ported from legacy-next/content/posts.js. next/image static imports become
// public-path strings (previewImage === shareImage for every entry).
// Entries are ordered newest-first; dates are ISO `YYYY-MM-DD` strings
// (formatted for display via src/lib/dates.ts). Pages are joined to their
// entry by `link` (see src/lib/content.ts).
export interface Post {
    type: 'Article' | 'Resource' | 'Template'
    date: string
    updatedAt?: string
    headline: string
    description: string
    link: string
    previewImage: string
    shareImage: string
}

const data: Post[] = [
    {
        type: 'Article',
        date: '2023-11-10',
        headline: 'A Guide To Self-Hosting Web Apps On Ubuntu Servers',
        description:
            'In this article, I will share a step-by-step guide on how to deploy and serve a web app to an ubuntu server. This applicable for any web app that runs on a port.',
        link: '/blog/guide-self-hosting-web-apps-on-ubuntu',
        previewImage: '/preview/self-hosting.png',
        shareImage: '/preview/self-hosting.png',
    },
    {
        type: 'Resource',
        date: '2023-03-07',
        headline: 'Pure CSS Loader Generator',
        description:
            'A code generator that helps you to create simple CSS spinners. You can choose between four different types of CSS spinners and customize them by adjusting the settings.',
        link: '/resources/loader-generator',
        previewImage: '/resources/pure-css-loader-generator.png',
        shareImage: '/resources/pure-css-loader-generator.png',
    },
    {
        type: 'Resource',
        date: '2022-10-14',
        headline: 'Blur Background CSS Generator',
        description:
            'A tool to generate the CSS for a customized blur background. Afterward, you can easily copy the code and use it on your website.',
        link: '/resources/blur-background-css-generator',
        previewImage: '/resources/blur-background-generator.png',
        shareImage: '/resources/blur-background-generator.png',
    },
    {
        type: 'Article',
        date: '2023-02-27',
        headline: 'Coding your own AI in 2023 with fastai',
        description:
            "This is a guide, which focuses on the critical parts of the fastai course. I'll cover how to set up the ecosystem and how to create, train and deploy an AI model.",
        link: '/blog/coding-your-own-ai-2023-with-fastai',
        previewImage: '/preview/coding-your-own-ai-2023-with-fastai.png',
        shareImage: '/preview/coding-your-own-ai-2023-with-fastai.png',
    },
    {
        type: 'Article',
        date: '2022-02-03',
        headline: 'A guide to debugging JavaScript in Visual Studio Code',
        description:
            'In this post, I will show how to set up debugging for Javascript in VS Code for Node.js and for React in Firefox or Chrome...',
        link: '/blog/debugging-javascript-vscode',
        previewImage: '/preview/debugging-javascript-vscode.png',
        shareImage: '/preview/debugging-javascript-vscode.png',
    },
    {
        type: 'Article',
        date: '2020-11-06',
        updatedAt: '2024-12-13',
        headline: 'Websites For Free Icon Sets',
        description: 'A curated list of websites that offer collections of free icons.',
        link: '/resources/free-icon-sets',
        previewImage: '/preview/preview_S4rXKoliGYiB.png',
        shareImage: '/preview/preview_S4rXKoliGYiB.png',
    },
    {
        type: 'Article',
        date: '2020-07-31',
        headline: 'JavaScript Object Functions Cheat Sheet',
        description:
            'A Cheat Sheet to quickly find all functions that can be executed on a JavaScript Object. It includes a quick explanation, the syntax and an example.',
        link: '/resources/js-object-functions-cheatsheet',
        previewImage: '/preview/js-object-cheatsheet-preview_urYtz7hxD8d.png',
        shareImage: '/preview/js-object-cheatsheet-preview_urYtz7hxD8d.png',
    },
    {
        type: 'Resource',
        date: '2020-07-13',
        headline: 'Responsive Navigation Generator',
        description:
            'Quickly get the HTML and CSS for a customizable menu. It will be responsive and it turns to a burger menu on mobile, completely without JavaScript.',
        link: '/resources/navigation-generator',
        previewImage: '/preview/navigation-generator_flkQB-LbDQ-.png',
        shareImage: '/preview/navigation-generator_flkQB-LbDQ-.png',
    },
    {
        type: 'Article',
        date: '2020-07-06',
        headline:
            'Getting Started with Serverless AWS (3/3) - Micro Services using Lambda, DynamoDB & API Gateway',
        description:
            "In this part, we're creating a DynamoDB. Then we create a Lambda for creating, reading, updating, and deleting entries in that database. And last we create...",
        link: '/blog/aws-getting-started-micro-service-lambda-dynamodb',
        previewImage: '/preview/preview3_iZ3HECZAt.png',
        shareImage: '/preview/preview3_iZ3HECZAt.png',
    },
    {
        type: 'Article',
        date: '2020-06-22',
        headline:
            'Getting Started with Serverless AWS (2/3) - Distribute an S3 Bucket with CloudFront and add a Domain',
        description:
            "In this part we're going to add CloudFront to deliver our website content with low latency to the user. Afterward, we'll add a domain with HTTPs for our website...",
        link: '/blog/aws-getting-started-cloudfront-and-domain',
        previewImage: '/preview/preview2_8ljU3AStslZ.png',
        shareImage: '/preview/preview2_8ljU3AStslZ.png',
    },
    {
        type: 'Article',
        date: '2020-06-15',
        headline: 'Getting Started with Serverless AWS (1/3) - Deploying a Static Website to S3',
        description:
            "In this series, we're creating a serverless stack using AWS. In this part, I'll show how to serve a static website through an S3 Bucket and how to deploy from your local machine...",
        link: '/blog/aws-getting-started-deploy-static-website-s3',
        previewImage: '/preview/preview1_bCXvzLuCixG.png',
        shareImage: '/preview/preview1_bCXvzLuCixG.png',
    },
    {
        type: 'Article',
        date: '2020-05-29',
        headline: 'How to craft appealing websites',
        description:
            'When I started developing websites I never knew where to start, when creating a new one. Over time I came up with a process that helped me not only getting started, but also making the websites...',
        link: '/blog/how-to-craft-appealing-websites',
        previewImage: '/preview/craft-website_NKUJDYwLo.png',
        shareImage: '/preview/craft-website_NKUJDYwLo.png',
    },
    {
        type: 'Article',
        date: '2020-05-21',
        headline: 'JavaScript Array Functions Cheat Sheet',
        description:
            'A Cheat Sheet to quickly find all functions that can be executed on a JavaScript Array. It includes a quick explanation, the syntax, an example, and the browser support.',
        link: '/resources/js-array-functions-cheatsheet',
        previewImage: '/preview/js-array-cheatsheet-preview_vpuXKzM9s.png',
        shareImage: '/preview/js-array-cheatsheet-preview_vpuXKzM9s.png',
    },
    {
        type: 'Resource',
        date: '2020-05-04',
        headline: 'Creative Hover Effects',
        description:
            'A collection of six creative hover effects for your inspiration. All of the effects are available on Codepen for easy copy-pasting.',
        link: '/resources/creative-hover-effects',
        previewImage: '/preview/hover-preview_eieplkIor.jpg',
        shareImage: '/preview/hover-preview_eieplkIor.jpg',
    },
    {
        type: 'Article',
        date: '2020-04-24',
        headline: 'Getting started with React Query - Easy server state management in React',
        description:
            'Handling state, which comes from the server can really cause some headaches in React. There is a lot you have to think about when dealing with asynchronous data, like updating, caching...',
        link: '/blog/react-query-getting-started-tutorial',
        previewImage: '/preview/preview_vKvwsCn4S.png',
        shareImage: '/preview/preview_vKvwsCn4S.png',
    },
    {
        type: 'Article',
        date: '2020-04-20',
        updatedAt: '2024-12-13',
        headline: 'Websites For Inspiration',
        description:
            "Need some inspiration for your project? With this list of 23 websites, which you can check for inspiration, you'll never run out of ideas for your website again.",
        link: '/resources/websites-for-inspiration',
        previewImage: '/preview/preview_rDQNhlplI.png',
        shareImage: '/preview/preview_rDQNhlplI.png',
    },
    {
        type: 'Resource',
        date: '2020-04-01',
        headline: 'CSS Section Separator Generator',
        description:
            'A collection of customizable CSS section separators, with the possibility to easily copy the code.',
        link: '/resources/css-separator-generator',
        previewImage: '/preview/css-separator-generator_7lds84DdzGW.png',
        shareImage: '/preview/css-separator-generator_7lds84DdzGW.png',
    },
    {
        type: 'Article',
        date: '2020-03-09',
        headline: 'How to speed up kickstarting new projects with Yeoman',
        description:
            'I found myself often copy pasting code from other projects when starting new projects. This is why I created a Yeoman generator, which setups a nextjs project with styled components...',
        link: '/blog/how-to-create-yeoman-generator',
        previewImage: '/preview/preview_TSicBaLsTso.png',
        shareImage: '/preview/preview_TSicBaLsTso.png',
    },
    {
        type: 'Article',
        date: '2020-02-02',
        updatedAt: '2022-03-18',
        headline: 'How to build a static website without frameworks using npm scripts',
        description:
            'Sometimes it makes total sense to build an old fashioned static website. It can be not only faster, but also simplier than throwing in a full JavaScript framework just to build a website with only a few pages...',
        link: '/blog/how-to-create-static-website-npm-scripts',
        previewImage: '/preview/preview_tFOrvyV60.png',
        shareImage: '/preview/preview_tFOrvyV60.png',
    },
    {
        type: 'Article',
        date: '2020-01-23',
        updatedAt: '2024-12-13',
        headline: 'Websites For Creative Backgrounds',
        description:
            'A curated list of websites where you can get creative backgrounds for your websites.',
        link: '/resources/creative-backgrounds',
        previewImage: '/preview/preview_IF4o7Ga9O.jpg',
        shareImage: '/preview/preview_IF4o7Ga9O.jpg',
    },
    {
        type: 'Article',
        date: '2019-12-16',
        updatedAt: '2024-06-13',
        headline: 'A Curated List Of Websites For Free SVG Illustrations',
        description: 'Spice up your next project with beautiful illustrations from these websites.',
        link: '/resources/free-svg-illustrations',
        previewImage: '/preview/preview_C-krc8PbLyM.jpg',
        shareImage: '/preview/preview_C-krc8PbLyM.jpg',
    },
    {
        type: 'Resource',
        date: '2019-11-27',
        headline: 'Animated CSS Background Generator',
        description:
            'With this tool you can quickly create and customize animated CSS backgrounds for your website. It includes a total of three different pure CSS animated backgrounds.',
        link: '/resources/animated-css-background-generator',
        previewImage: '/preview/resources01_zAtYo6WzY.jpg',
        shareImage: '/preview/resources01_zAtYo6WzY.jpg',
    },
    {
        type: 'Article',
        date: '2019-10-23',
        headline: '4 Websites to recreate to practice your web development skills',
        description:
            "The best way to learn web development is by practice. But when you get started you might feel lost. There are just so many things to learn, which makes it hard to choose the right project to get started. In the following I'll share some…",
        link: '/blog/4-websites-to-recreate-to-practice-your-web-development-skills',
        previewImage: '/preview/4-github-pages_kdFLSpWYBJ_.png',
        shareImage: '/preview/4-github-pages_kdFLSpWYBJ_.png',
    },
    {
        type: 'Article',
        date: '2019-10-16',
        updatedAt: '2020-06-19',
        headline: 'The best note taking apps for developers',
        description:
            "There are tons of note taking apps out there. But which ones are best suitable for developers? In the following I'll introduce three note taking apps for developers with good code support. + Available for: Mac, Windows, Android, iOS + Nice Code editor with a…",
        link: '/blog/the-best-note-taking-apps-for-developers',
        previewImage: '/preview/3-notebook_UBA90tPOp.jpg',
        shareImage: '/preview/3-notebook_UBA90tPOp.jpg',
    },
    {
        type: 'Article',
        date: '2019-03-23',
        headline: 'How to toggle an array item with Javascript in React State',
        description:
            'In this short article I will demonstrate how to write a function to toggle array items with Javascript and inside of React state. First of all let’s have a look how to toggle an array item with Javascript (ES6): This function will get an array and…',
        link: '/blog/how-to-toggle-an-array-item-in-react-state',
        previewImage: '/preview/2-react_du62Xdg5s.jpg',
        shareImage: '/preview/2-react_du62Xdg5s.jpg',
    },
    {
        type: 'Article',
        date: '2018-07-27',
        headline: 'Widget based website with dynamic Vue.js components',
        description:
            'In this post I will explain how to generate a webpage using dynamic Vue.js components. This could be the foundation of a CMS based on Vue. The finished project can be found here First of all install the vue-cli if you havent already. To do so open…',
        link: '/blog/widget-based-website-with-dynamic-vuejs-components',
        previewImage: '/preview/1-vue_GRNjptkThwm.jpg',
        shareImage: '/preview/1-vue_GRNjptkThwm.jpg',
    },
]

export default data
