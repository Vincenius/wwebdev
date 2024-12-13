import fastAi from '../public/preview/coding-your-own-ai-2023-with-fastai.png'
import debugVsCode from '../public/preview/debugging-javascript-vscode.png'
import awsGettingStarted3 from '../public/preview/preview3_iZ3HECZAt.png'
import awsGettingStarted2 from '../public/preview/preview2_8ljU3AStslZ.png'
import awsGettingStarted1 from '../public/preview/preview1_bCXvzLuCixG.png'
import craftWebsite from '../public/preview/craft-website_NKUJDYwLo.png'
import reactQuery from '../public/preview/preview_vKvwsCn4S.png'
import yeomanTutorial from '../public/preview/preview_TSicBaLsTso.png'
import staticWebsite from '../public/preview/preview_tFOrvyV60.png'
import recreateWebsites from '../public/preview/4-github-pages_kdFLSpWYBJ_.png'
import noteTakingApps from '../public/preview/3-notebook_UBA90tPOp.jpg'
import reactToggle from '../public/preview/2-react_du62Xdg5s.jpg'
import dynamicVue from '../public/preview/1-vue_GRNjptkThwm.jpg'
import animatedCssBackgrounds from '../public/preview/resources01_zAtYo6WzY.jpg'
import separatorGenerator from '../public/preview/css-separator-generator_7lds84DdzGW.png'
import pureCssLoader from '../public/resources/pure-css-loader-generator.png'
import blurBackground from '../public/resources/blur-background-generator.png'
import freeIcons from '../public/preview/preview_S4rXKoliGYiB.png'
import jsObjectCheat from '../public/preview/js-object-cheatsheet-preview_urYtz7hxD8d.png'
import navigationGenerator from '../public/preview/navigation-generator_flkQB-LbDQ-.png'
import jsArrayCheat from '../public/preview/js-array-cheatsheet-preview_vpuXKzM9s.png'
import hoverEffects from '../public/preview/hover-preview_eieplkIor.jpg'
import websiteInspiration from '../public/preview/preview_rDQNhlplI.png'
import creativeBackgrounds from '../public/preview/preview_IF4o7Ga9O.jpg'
import freeSvgIllustration from '../public/preview/preview_C-krc8PbLyM.jpg'
import selfHosting from '../public/preview/self-hosting.png'

const data = [
    {
        id: 26,
        type: 'Article',
        date: 'November 10, 2023',
        headline: "A Guide To Self-Hosting Web Apps On Ubuntu Servers",
        description: "In this article, I will share a step-by-step guide on how to deploy and serve a web app to an ubuntu server. This applicable for any web app that runs on a port.",
        link: "/blog/guide-self-hosting-web-apps-on-ubuntu",
        previewImage: selfHosting,
        shareImage: '/preview/self-hosting.png'
    },
    {
        id: 25,
        type: 'Resource',
        date: 'March 07, 2023',
        headline: "Pure CSS Loader Generator",
        description: "A code generator that helps you to create simple CSS spinners. You can choose between four different types of CSS spinners and customize them by adjusting the settings.",
        link: "/resources/loader-generator",
        previewImage: pureCssLoader,
        shareImage: '/resources/pure-css-loader-generator.png'
    },
    {
        id: 24,
        type: 'Resource',
        date: 'October 14, 2022',
        headline: "Blur Background CSS Generator",
        description: "A tool to generate the CSS for a customized blur background. Afterward, you can easily copy the code and use it on your website.",
        link: "/resources/blur-background-css-generator",
        previewImage: blurBackground,
        shareImage: "/resources/blur-background-generator.png",
    },
    {
        id: 23,
        type: 'Article',
        date: 'February 27, 2023',
        headline: 'Coding your own AI in 2023 with fastai',
        description: "This is a guide, which focuses on the critical parts of the fastai course. I'll cover how to set up the ecosystem and how to create, train and deploy an AI model.",
        link: '/blog/coding-your-own-ai-2023-with-fastai',
        previewImage: fastAi,
        shareImage: '/preview/coding-your-own-ai-2023-with-fastai.png',
    },
    {
        id: 22,
        type: 'Article',
        date: 'February 03, 2022',
        headline: 'A guide to debugging JavaScript in Visual Studio Code',
        description: "In this post, I will show how to set up debugging for Javascript in VS Code for Node.js and for React in Firefox or Chrome...",
        link: '/blog/debugging-javascript-vscode',
        previewImage: debugVsCode,
        shareImage: '/preview/debugging-javascript-vscode.png',
    },
    {
        id: 21,
        type: 'Article',
        date: 'November 6, 2020',
        updatedAt: 'December 13, 2024',
        headline: "Websites For Free Icon Sets",
        description: "A curated list of websites that offer collections of free icons.",
        link: "/resources/free-icon-sets",
        previewImage: freeIcons,
        shareImage: "/preview/preview_S4rXKoliGYiB.png",
    },
    {
        id: 20,
        type: 'Article',
        date: 'July 31, 2020',
        headline: "JavaScript Object Functions Cheat Sheet",
        description: "A Cheat Sheet to quickly find all functions that can be executed on a JavaScript Object. It includes a quick explanation, the syntax and an example.",
        link: "/resources/js-object-functions-cheatsheet",
        previewImage: jsObjectCheat,
        shareImage: "/preview/js-object-cheatsheet-preview_urYtz7hxD8d.png",
    },
    {
        id: 19,
        type: 'Resource',
        date: 'July 13, 2020',
        headline: "Responsive Navigation Generator",
        description: "Quickly get the HTML and CSS for a customizable menu. It will be responsive and it turns to a burger menu on mobile, completely without JavaScript.",
        link: "/resources/navigation-generator",
        previewImage: navigationGenerator,
        shareImage: "/preview/navigation-generator_flkQB-LbDQ-.png",
    },
    {
        id: 18,
        type: 'Article',
        date: 'July 06, 2020',
        headline: 'Getting Started with Serverless AWS (3/3) - Micro Services using Lambda, DynamoDB & API Gateway',
        description: "In this part, we're creating a DynamoDB. Then we create a Lambda for creating, reading, updating, and deleting entries in that database. And last we create...",
        link: '/blog/aws-getting-started-micro-service-lambda-dynamodb',
        previewImage: awsGettingStarted3,
        shareImage: '/preview/preview3_iZ3HECZAt.png',
    },
    {
        id: 17,
        type: 'Article',
        date: 'June 22, 2020',
        headline: 'Getting Started with Serverless AWS (2/3) - Distribute an S3 Bucket with CloudFront and add a Domain',
        description: "In this part we're going to add CloudFront to deliver our website content with low latency to the user. Afterward, we'll add a domain with HTTPs for our website...",
        link: '/blog/aws-getting-started-cloudfront-and-domain',
        previewImage: awsGettingStarted2,
        shareImage: '/preview/preview2_8ljU3AStslZ.png',
    },
    {
        id: 16,
        type: 'Article',
        date: 'June 15, 2020',
        headline: 'Getting Started with Serverless AWS (1/3) - Deploying a Static Website to S3',
        description: "In this series, we're creating a serverless stack using AWS. In this part, I'll show how to serve a static website through an S3 Bucket and how to deploy from your local machine...",
        link: '/blog/aws-getting-started-deploy-static-website-s3',
        previewImage: awsGettingStarted1,
        shareImage: '/preview/preview1_bCXvzLuCixG.png',
    },
    {
        id: 15,
        type: 'Article',
        date: 'May 29, 2020',
        headline: 'How to craft appealing websites',
        description: "When I started developing websites I never knew where to start, when creating a new one. Over time I came up with a process that helped me not only getting started, but also making the websites...",
        link: '/blog/how-to-craft-appealing-websites',
        previewImage: craftWebsite,
        shareImage: '/preview/craft-website_NKUJDYwLo.png',
    },
    {
        id: 14,
        type: 'Article',
        date: 'May 21, 2020',
        headline: "JavaScript Array Functions Cheat Sheet",
        description: "A Cheat Sheet to quickly find all functions that can be executed on a JavaScript Array. It includes a quick explanation, the syntax, an example, and the browser support.",
        link: "/resources/js-array-functions-cheatsheet",
        previewImage: jsArrayCheat,
        shareImage: "/preview/js-array-cheatsheet-preview_vpuXKzM9s.png",
    },
    {
        id: 13,
        type: 'Resource',
        date: 'May 04, 2020',
        headline: "Creative Hover Effects",
        description: "A collection of six creative hover effects for your inspiration. All of the effects are available on Codepen for easy copy-pasting.",
        link: "/resources/creative-hover-effects",
        previewImage: hoverEffects,
        shareImage: "/preview/hover-preview_eieplkIor.jpg",
    },
    {
        id: 12,
        type: 'Article',
        date: 'April 24, 2020',
        headline: 'Getting started with React Query - Easy server state management in React',
        description: "Handling state, which comes from the server can really cause some headaches in React. There is a lot you have to think about when dealing with asynchronous data, like updating, caching...",
        link: '/blog/react-query-getting-started-tutorial',
        previewImage: reactQuery,
        shareImage: '/preview/preview_vKvwsCn4S.png',
    },
    {
        id: 11,
        type: 'Article',
        date: 'April 20, 2020',
        updatedAt: 'December 08, 2022',
        headline: "Websites For Inspiration",
        updatedAt: 'December 13, 2024',
        description: "Need some inspiration for your project? With this list of 23 websites, which you can check for inspiration, you'll never run out of ideas for your website again.",
        link: "/resources/websites-for-inspiration",
        previewImage: websiteInspiration,
        shareImage: "/preview/preview_rDQNhlplI.png",
    },
    {
        id: 10,
        type: 'Resource',
        date: 'April 01, 2020',
        headline: "CSS Section Separator Generator",
        description: "A collection of customizable CSS section separators, with the possibility to easily copy the code.",
        link: "/resources/css-separator-generator",
        previewImage: separatorGenerator,
        shareImage: "/preview/css-separator-generator_7lds84DdzGW.png",
    },
    {
        id: 9,
        type: 'Article',
        date: 'March 09, 2020',
        headline: 'How to speed up kickstarting new projects with Yeoman',
        description: "I found myself often copy pasting code from other projects when starting new projects. This is why I created a Yeoman generator, which setups a nextjs project with styled components...",
        link: '/blog/how-to-create-yeoman-generator',
        previewImage: yeomanTutorial,
        shareImage: '/preview/preview_TSicBaLsTso.png',
    },
    {
        id: 8,
        type: 'Article',
        date: 'February 02, 2020',
        updatedAt: 'March 18, 2022',
        headline: 'How to build a static website without frameworks using npm scripts',
        description: "Sometimes it makes total sense to build an old fashioned static website. It can be not only faster, but also simplier than throwing in a full JavaScript framework just to build a website with only a few pages...",
        link: '/blog/how-to-create-static-website-npm-scripts',
        previewImage: staticWebsite,
        shareImage: '/preview/preview_tFOrvyV60.png',
    },
    {
        id: 7,
        type: 'Article',
        date: 'January 23, 2020',
        updatedAt: 'December 13, 2024',
        headline: "Websites For Creative Backgrounds",
        description: "A curated list of websites where you can get creative backgrounds for your websites.",
        link: "/resources/creative-backgrounds",
        previewImage: creativeBackgrounds,
        shareImage: "/preview/preview_IF4o7Ga9O.jpg",
    },
    {
        id: 6,
        type: 'Article',
        date: 'December 16, 2019',
        updatedAt: 'June 05, 2020',
        headline: 'A Curated List Of Websites For Free SVG Illustrations',
        description: "Spice up your next project with beautiful illustrations from these websites.",
        link: '/resources/free-svg-illustrations',
        previewImage: freeSvgIllustration,
        shareImage: '/preview/preview_C-krc8PbLyM.jpg',
    },
    {
        id: 5,
        type: 'Resource',
        date: 'November 27, 2019',
        headline: "Animated CSS Background Generator",
        description: "With this tool you can quickly create and customize animated CSS backgrounds for your website. It includes a total of three different pure CSS animated backgrounds.",
        link: "/resources/animated-css-background-generator",
        previewImage: animatedCssBackgrounds,
        shareImage: "/preview/resources01_zAtYo6WzY.jpg",
    },
    {
        id: 4,
        type: 'Article',
        date: 'October 23, 2019',
        headline: '4 Websites to recreate to practice your web development skills',
        description: "The best way to learn web development is by practice. But when you get started you might feel lost. There are just so many things to learn, which makes it hard to choose the right project to get started. In the following I'll share some…",
        link: '/blog/4-websites-to-recreate-to-practice-your-web-development-skills',
        previewImage: recreateWebsites,
        shareImage: '/preview/4-github-pages_kdFLSpWYBJ_.png',
    },
    {
        id: 3,
        type: 'Article',
        date: 'October 16, 2019',
        updatedAt: 'June 19, 2020',
        headline: 'The best note taking apps for developers',
        description: "There are tons of note taking apps out there. But which ones are best suitable for developers? In the following I'll introduce three note taking apps for developers with good code support. + Available for: Mac, Windows, Android, iOS + Nice Code editor with a…",
        link: '/blog/the-best-note-taking-apps-for-developers',
        previewImage: noteTakingApps,
        shareImage: '/preview/3-notebook_UBA90tPOp.jpg',
    },
    {
        id: 2,
        type: 'Article',
        date: 'March 23, 2019',
        headline: 'How to toggle an array item with Javascript in React State',
        description: "In this short article I will demonstrate how to write a function to toggle array items with Javascript and inside of React state. First of all let’s have a look how to toggle an array item with Javascript (ES6): This function will get an array and…",
        link: '/blog/how-to-toggle-an-array-item-in-react-state',
        previewImage: reactToggle,
        shareImage: '/preview/2-react_du62Xdg5s.jpg',
    },
    {
        id: 1,
        type: 'Article',
        date: 'July 27, 2018',
        headline: 'Widget based website with dynamic Vue.js components',
        description: 'In this post I will explain how to generate a webpage using dynamic Vue.js components. This could be the foundation of a CMS based on Vue. The finished project can be found here First of all install the vue-cli if you havent already. To do so open…',
        link: '/blog/widget-based-website-with-dynamic-vuejs-components',
        previewImage: dynamicVue,
        shareImage: '/preview/1-vue_GRNjptkThwm.jpg',
    }
]

export default data
