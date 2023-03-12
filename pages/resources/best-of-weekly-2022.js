import React from 'react'

import Layout from '../../components/Layout'
import LinkBox from '../../components/LinkBox'
import NewsletterLink from '../../components/NewsletterLink'
import Featured from '../../components/Featured'
import Ad from '../../components/Ads/Ad'
import meta from '../../content/resources'
import * as ui from '../../ui'

const postId = 14
const postMeta = meta.find(m => m.id === postId)

const Post = () => (
  <Layout
      isArticle={true}
      title={postMeta.headline}
      date={postMeta.date}
      updatedAt={postMeta.updatedAt}
      link={`https://wweb.dev${postMeta.link}`}
      description={postMeta.description}
      image={postMeta.shareImage}
  >
    <ui.ArticleContainer>
      Exactly three years ago I published my <a href="https://wweb.dev/weekly/1/">first weekly newsletter</a>.<br/>
      Since then I've send out 125 Emails with a total of 1345 resources. Here are the 110 most clicked resources:
    </ui.ArticleContainer>
    <ui.GridContainer>
      <LinkBox
        title="Copy & Paste CSS"
        description="A website to find the inspiration for HTML elements and copy the CSS."
        link="https://copy-paste-css.com/"
        image="https://wweb.dev/weekly/content/125/copy-paste-css.jpg"
      />

      <LinkBox
        title="Starter Tab"
        description="A customizable website to replace your 'New Tab' homepage."
        link="https://startertab.com/"
        image="https://wweb.dev/weekly/content/124/startertab.jpg"
      />
      <div>
        <Ad />
        <NewsletterLink />
      </div>

      <LinkBox
        title="nfty.sh"
        description="An open-source notification service to send push notifications to your phone or desktop via PUT/POST."
        link="https://ntfy.sh/"
        image="/weekly/content/124/nfty.jpg"
      />

      <LinkBox
        title="missing.css"
        description="A CSS library to build common components using plain, semantic HTML."
        link="https://missing.style/"
        image="https://wweb.dev/weekly/content/123/missingcss.jpg"
      />

      <LinkBox
        title="uiverse"
        description="A collection of open-source UI elements, made with CSS and HTML."
        link="https://uiverse.io/"
        image="https://wweb.dev/weekly/content/122/uiverse.jpg"
      />

      <LinkBox
        title="AnimatiSS"
        description="A nice collection of CSS animations for your web projects."
        link="https://xsgames.co/animatiss/"
        image="https://wweb.dev/weekly/content/122/animatiss.jpg"
      />

      <LinkBox
        title="CSS Shapes"
        description="A list of CSS shapes like triangles, arrows, diamonds, tooltips, bubbles, ready to use, click to copy."
        link="https://getcssscan.com/css-shapes"
        image="https://wweb.dev/weekly/content/121/cssshapes.jpg"
      />

      <LinkBox
        title="resource.fyi"
        description="Handpicked free tools, resources and products for developers and designers."
        link="https://resource.fyi/"
        image="https://wweb.dev/weekly/content/119/resource-fyi.jpg"
      />

      <LinkBox
        title="Dear Console…"
        description="A repository of little scripts you can use in the browser console to achieve the described task."
        link="https://codepo8.github.io/dearconsole/"
        image="/weekly/content/118/console.jpg"
      />

      <LinkBox
        title="58 bytes of CSS"
        description="A simple CSS snippet to make websites it look good on most displays."
        link="https://gist.github.com/JoeyBurzynski/617fb6201335779f8424ad9528b72c41"
        image="/weekly/content/117/bytes-css.jpg"
      />

      <LinkBox
        title="Half baked ideas"
        description="A website where everyone can add their ideas for products."
        link="https://halfbakedideas.app//"
        image="/weekly/content/116/halfbaked.jpg"
      />

      <LinkBox
        title="Addy Codes Toolkit"
        description="A collection hand-picked tools & resources for web designers & developers."
        link="https://toolkit.addy.codes/"
        image="/weekly/content/114/addy-codes.jpg"
      />

      <LinkBox
        title="CSS Generators"
        description="Two CSS Generators where you can add your setting and get your CSS code."
        link="https://css-generators.com/"
        image="/weekly/content/113/css-generators.jpg"
      />

      <LinkBox
        title="Almond.CSS"
        description="A collection of class-less CSS styles to make simple websites look better."
        link="https://github.com/alvaromontoro/almond.css"
        image="/weekly/content/112/almondcss.jpg"
      />

      <LinkBox
        title="Flowbite"
        description="An open-source library of over 400+ web components and interactive elements built with Tailwind CSS."
        link="https://flowbite.com/"
        image="/weekly/content/111/flowbite.jpg"
      />

      <LinkBox
        title="CSSUI"
        description="A library of pure CSS interactive components without any JavaScript."
        link="https://www.cssui.dev/"
        image="/weekly/content/109/cssui.jpg"
      />

      <LinkBox
        title="Poly Pizza"
        description="A cool website with over 7000 free low poly models."
        link="https://poly.pizza/"
        image="/weekly/content/107/polypizza.jpg"
      />

      <LinkBox
        title="Cool Backgrounds"
        description="A beautifully curated selection of cool, customizable backgrounds."
        link="https://coolbackgrounds.io/"
        image="/weekly/content/107/backgrounds.jpg"
      />

      <LinkBox
        title="Beercss"
        description="A cool CSS library to build material design interfaces fast."
        link="https://www.beercss.com/"
        image="/weekly/content/106/beercss.jpg"
      />

      <LinkBox
        title="clay.css"
        description="Micro CSS util class for applying inflated fluffy 3D claymorphism styles to elements."
        link="https://codeadrian.github.io/clay.css/"
        image="/weekly/content/105/clay.jpg"
      />

      <LinkBox
        title="Vanilla List"
        description="A big collection of vanilla JavaScript plugins to keep your website lightweight."
        link="https://vanillalist.top/"
        image="/weekly/content/104/vanillalist.jpg"
      />

      <LinkBox
        title="Dropdown Arrows"
        description="A cool demo of dropdown arrow animations by Mikael Ainalem."
        link="https://codepen.io/ainalem/full/YzraZmP"
        image="/weekly/content/103/dropdown-arrows.jpg"
      />

      <LinkBox
        title="Alternate Column Scroll Animation"
        description="A grid layout with columns that scroll in opposite directions and a content preview animation."
        link="https://tympanus.net/codrops/2021/12/21/alternate-column-scroll-animation/"
        image="/weekly/content/102/column-layout.jpg"
      />

      <LinkBox
        title="Fonts"
        description="A privacy-focused Google Fonts alternative."
        link="https://fonts.coollabs.io/"
        image="/weekly/content/110/fonts.jpg"
      />

      <LinkBox
        title="Glitch effect"
        description="A cool glitch effect on text in pure CSS."
        link="https://dustri.org/b/glitch-effect-on-text-in-pure-css.html"
        image="/weekly/content/101/glitch-css.jpg"
      />

      <LinkBox
        title="Defensive CSS"
        description="A list of defensive CSS techniques to avoid potential future issues."
        link="https://ishadeed.com/article/defensive-css/"
        image="/weekly/content/100/css.jpg"
      />

      <LinkBox
        title="Shadow Palette Generator"
        description="A cool generator to create a set of lush, realistic CSS shadows."
        link="https://www.joshwcomeau.com/shadow-palette/"
        image="/weekly/content/97/shadow-palette-generator.jpg"
      />

      <LinkBox
        title="Morphing Submit Button"
        description="A nice Codepen demo of a button that changes after submit by Jon Kantner."
        link="https://codepen.io/jkantner/full/zYdaBPJ"
        image="/weekly/content/96/button.jpg"
      />

      <LinkBox
        title="Cheat Sheets"
        description="A list of various cheat sheets related to web development."
        link="https://dev.to/ali6nx404/cheat-sheets-that-always-save-my-time-during-web-development-2ga4"
        image="/weekly/content/95/cheat-sheets.jpg"
      />

      <LinkBox
        title="nice-waves"
        description="A Vanilla JS library for creating animated waves."
        link="https://github.com/gVguy/nice-waves"
        image="/weekly/content/94/waves.jpg"
      />

      <LinkBox
        title="Analyze CSS"
        description="A website to analyze your website's CSS, by entering the URL or pasting the CSS."
        link="https://www.projectwallace.com/analyze-css"
        image="/weekly/content/93/css-analyzer.jpg"
      />

      <LinkBox
        title="136 facts every web dev should know"
        description="An interesting list by Baldur Bjarnason."
        link="https://www.baldurbjarnason.com/2021/100-things-every-web-developer-should-know/"
        image="/weekly/content/93/webdev-facts.jpg"
      />

      <LinkBox
        title="MJML"
        description="A cool framework to create responsive emails easily."
        link="https://mjml.io/"
        image="/weekly/content/92/mjml.jpg"
      />

      <LinkBox
        title="redact.photo"
        description="A nice tool to censor sensitive information of images online."
        link="https://redact.photo/"
        image="/weekly/content/91/redact-photo.jpg"
      />

      <LinkBox
        title="Annimay"
        description="A collection of pure CSS3 lightweight animations for links, sections, buttons and more."
        link="https://edumigueis.github.io/Annimay/"
        image="/weekly/content/91/animay.jpg"
      />

      <LinkBox
        title="Design Junction"
        description="A curated list of design resources, handpicked from around the web."
        link="https://designjunction.xyz/"
        image="/weekly/content/87/junction.jpg"
      />

      <LinkBox
        title="OpenMoji"
        description="A website with open-source emojis for designers and developers."
        link="https://openmoji.org/"
        image="/weekly/content/86/openmoji.jpg"
      />

      <LinkBox
        title="LÖVR"
        description="An open source framework for rapidly building immersive 3D experiences."
        link="https://lovr.org/"
        image="/weekly/content/84/lovr.jpg"
      />

      <LinkBox
        title="Line Icons"
        description="5000+ handcrafted free line icons for modern user interfaces."
        link="https://lineicons.com/"
        image="/weekly/content/81/lineIcons.jpg"
      />

      <LinkBox
        title="Piped"
        description="An alternative, privacy-friendly YouTube frontend."
        link="https://github.com/TeamPiped/Piped"
        image="/weekly/content/83/piped.jpg"
      />

      <LinkBox
        title="Wicked Backgrounds"
        description="A generator to create Create beautiful SVG backgrounds for your UI designs. "
        link="https://wickedbackgrounds.com/"
        image="/weekly/content/83/wickedbackgrounds.jpg"
      />

      <LinkBox
        title="Best Online Tools"
        description="A curated list of various online tools."
        link="https://10015.io/"
        image="/weekly/content/90/100L5.jpg"
      />

      <LinkBox
        title="cccreate"
        description="A carefully curated collection of tools & resources for web creators."
        link="https://cccreate.co/"
        image="/weekly/content/89/cccreate.jpg"
      />

      <LinkBox
        title="Animated Backgrounds"
        description="A collection of 30+ animated backgrounds for websites and blogs."
        link="https://animatedbackgrounds.me/"
        image="/weekly/content/89/backgrounds.jpg"
      />

      <LinkBox
        title="Theatre.js"
        description="A JavaScript animation library with a GUI. It animates the DOM, WebGL, and more."
        link="https://www.theatrejs.com/"
        image="/weekly/content/88/theatrejs.jpg"
      />

      <LinkBox
        title="UI Snippets"
        description="A small collection of hover effect UI Snippets."
        link="https://ui-snippets.dev/"
        image="/weekly/content/80/uisnippets.jpg"
      />

      <LinkBox
        title="Front-End Boilerplates"
        description="An article with a bunch of useful front-end boilerplates and starter kits."
        link="https://www.smashingmagazine.com/2021/06/useful-frontend-boilerplates-starter-kits/"
        image="/weekly/content/80/boilerplates.jpg"
      />

      <LinkBox
        title="Mail Studio"
        description="An application for designing responsive emails that work everywhere."
        link="https://freestuff.dev/"
        image="/weekly/content/78/mail-studio.jpg"
      />

      <LinkBox
        title="CSS Generators"
        description="A nice list of various CSS Generators for things like CSS shadows or overlays."
        link="https://www.smashingmagazine.com/2021/03/css-generators/"
        image="/weekly/content/77/css-generators.jpg"
      />

      <LinkBox
        title="The Button Cheat Sheet"
        description="A cheat sheet to help you with the right markup for buttons."
        link="https://www.buttoncheatsheet.com/"
        image="/weekly/content/76/button-cheatsheet.jpg"
      />

      <LinkBox
        title="50 UI Tips"
        description="A small e-book with tips to improve user interfaces."
        link="https://fifty.user-interface.io/50_ui_tips.pdf"
        image="/weekly/content/75/50_ui_tips.jpg"
      />

      <LinkBox
        title="24 HTML Tags you may not know"
        description="An article with some lesser-known HTML Tags."
        link="https://cmsinstallation.blogspot.com/2021/05/24-html-tags-you-may-not-know.html"
        image="/weekly/content/74/html-tags.jpg"
      />

      <LinkBox
        title="Fluid typography"
        description="An online tool to create text that scales with the window size."
        link="https://fluid-typography.netlify.app/"
        image="/weekly/content/73/fluid.jpg"
      />

      <LinkBox
        title="CSS Tips"
        description="CSS tips and tricks you won’t see in most of the tutorials."
        link="https://markodenic.com/css-tips/"
        image="/weekly/content/72/css-tricks.jpg"
      />

      <LinkBox
        title="HTML boilerplate"
        description="A modern HTML boilerplate with explainations of the used elements."
        link="https://www.matuzo.at/blog/html-boilerplate/"
        image="/weekly/content/71/html-boilerplate.jpg"
      />

      <LinkBox
        title="Frontend Toolkit"
        description="A customizable dashboard for your recurring Frontend tasks"
        link="https://www.fetoolkit.io/"
        image="/weekly/content/70/fe-toolkit.jpg"
      />

      <LinkBox
        title="transition.css"
        description="A repository with 46 pre-built, drop-in CSS transitions transitions."
        link="https://www.transition.style/"
        image="/weekly/content/68/transitioncss.jpg"
      />

      <LinkBox
        title="Focalboard"
        description="An open-source, self-hosted alternative to Trello, Notion, and Asana."
        link="https://www.focalboard.com/"
        image="/weekly/content/67/focalboard.jpg"
      />

      <LinkBox
        title="StartupToolbox"
        description="A crowdsourced collection of 700+ tools for startup makers."
        link="https://github.com/alexanderisora/startuptoolbox"
        image="/weekly/content/66/startup-toolbox.jpg"
      />

      <LinkBox
        title="HTML Boilerplates"
        description="A website to create a custom HTML Boilerplate."
        link="https://htmlboilerplates.com/"
        image="/weekly/content/64/html-boilerplates.jpg"
      />

      <LinkBox
        title="Front-End Tips"
        description="Super tiny, quick tips, tricks, and best practices of front-end development."
        link="https://getfrontend.tips/"
        image="/weekly/content/64/frondendtips.jpg"
      />

      <LinkBox
        title="Tools Every Developer Should Know and Use"
        description="A list of useful websites and extensions."
        link="https://dev.to/himanshutiwari15/tools-every-developer-should-know-and-use-245l"
        image="/weekly/content/63/tools.jpg"
      />

      <LinkBox
        title="SVG Repo"
        description="A collection of 300.000+ free SVG Vectors and Icons."
        link="https://www.svgrepo.com/"
        image="/weekly/content/62/svgrepo.jpg"
      />

      <LinkBox
        title="Free Animated Headers"
        description="A generator for beautiful, animated headers with gradients."
        link="https://www.finisher.co/lab/header"
        image="/weekly/content/61/animated-headers.jpg"
      />

      <LinkBox
        title="Pills"
        description="Code Examples, Useful Tips & Tricks You Can Use On Daily Basis."
        link="https://bigsondev.com/pills/"
        image="/weekly/content/60/pills.jpg"
      />

      <LinkBox
        title="Ojoy"
        description="A nice tool to enlarge low-res images and improve their quality."
        link="https://ojoy.netlify.app/"
        image="/weekly/content/59/ojoy.jpg"
      />

      <LinkBox
        title="new.css"
        description="A classless CSS framework to write modern websites using only HTML."
        link="https://newcss.net/"
        image="/weekly/content/58/newcss.jpg"
      />

      <LinkBox
        title="Tailwind-kit"
        description="A collection of over 200 CSS responsive components, based on Tailwind CSS 2.0 and Font Awesome."
        link="https://www.tailwind-kit.com/"
        image="/weekly/content/57/tailwind-kit.jpg"
      />

      <LinkBox
        title="Checklist Design"
        description="A nice collection of the best design practices."
        link="https://www.checklist.design/"
        image="/weekly/content/55/checklist-design.jpg"
      />

      <LinkBox
        title="css.lab"
        description="A selection of components that can be easily slotted into web projects"
        link="https://csslab.app/"
        image="/weekly/content/54/css-lab.jpg"
      />

      <LinkBox
        title="Building Your Color Palette"
        description="A nice guide on how to create a color palette for your website."
        link="https://www.refactoringui.com/previews/building-your-color-palette"
        image="https://wweb.dev/weekly/content/52/building-color-palette.jpg"
      />

      <LinkBox
        title="Cirrus.CSS"
        description="A component and utility centric SCSS framework designed for rapid prototyping."
        link="https://cirrus-ui.netlify.app/"
        image="/weekly/content/50/cirrus.jpg"
      />

      <LinkBox
        title="Placeholder Logos"
        description="Get a placeholder brand for a project. Completely free, with six different color variations as PNG and SVG."
        link="https://placeholderlogo.com/"
        image="/weekly/content/49/placeholder-logos.png"
      />

      <LinkBox
        title="Developer Resources - Frontend"
        description="A huge collection of resources for Frontend development."
        link="https://github.com/codingknite/frontend-development"
        image="https://wweb.dev/weekly/content/49/developer-resources--frontend.jpg"
      />

      <LinkBox
        title="Checka11y.css"
        description="A CSS stylesheet to quickly highlight a11y concerns."
        link="https://github.com/jackdomleo7/Checka11y.css"
        image="/weekly/content/48/checka11ycss.png"
      />

      <LinkBox
        title="Coded Mails"
        description="A list of free responsive HTML email templates."
        link="https://codedmails.com/"
        image="/weekly/content/47/coded-mails.png"
      />

      <LinkBox
        title="60+ Most Useful Web Design Resources"
        description="A big list of web design resources."
        link="https://wpklik.com/wordpress-tips/web-design-resources"
        image="/weekly/content/46/60-most-useful-web-design-resources.png"
      />

      <LinkBox
        title="Full-Bleed Layout Using CSS Grid"
        description="A nice article on how to solve a tricky modern layout with CSS grid."
        link="https://www.joshwcomeau.com/css/full-bleed/"
        image="/weekly/content/45/fullbleed-layout-using-css-grid.png "
      />

      <LinkBox
        title="BGJar"
        description="A free SVG background generator for your websites, blogs, and app"
        link="https://bgjar.com/"
        image="/weekly/content/43/bgjar.jpg"
      />

      <LinkBox
        title="lookup.design"
        description="A cool website for finding design inspiration and examples."
        link="https://lookup.design/"
        image="/weekly/content/42/lookupdesign.png"
      />

      <LinkBox
        title="Omatsuri"
        description="A nice collection of open-source browser tools."
        link="https://omatsuri.app/"
        image="/weekly/content/41/omatsuri.jpg"
      />

      <LinkBox
        title="Shortcuts.design"
        description="A shortcut reference for the most important tools of designers."
        link="https://shortcuts.design/"
        image="/weekly/content/41/shortcutsdesign.png"
      />

      <LinkBox
        title="The Animated Web"
        description="A website for animation resources and inspiration from around the web."
        link="https://theanimatedweb.com/"
        image="/weekly/content/40/the-animated-web.jpg"
      />

      <LinkBox
        title="Kor"
        description="An open-source Design System and lightweight UI Component Library."
        link="https://kor-ui.com/introduction/welcome"
        image="/weekly/content/39/kor.jpg"
      />

      <LinkBox
        title="Magnetic Buttons"
        description="A small set of magnetic buttons with some fun hover animations by Codrops."
        link="https://tympanus.net/Development/MagneticButtons/"
        image="/weekly/content/38/magnetic-buttons.png"
      />

      <LinkBox
        title="Magnetic Buttons"
        description="A small set of magnetic buttons with some fun hover animations by Codrops."
        link="https://shoelace.style/"
        image="/weekly/content/38/magnetic-buttons.png"
      />

      <LinkBox
        title="this vs that"
        description="A cool collection of articles that point out the difference of similar frontend concepts."
        link="https://thisthat.dev/"
        image="/weekly/content/35/this-vs-that.png"
      />

      <LinkBox
        title="Squircley"
        description="A generator for creating organic SVG shapes ready to use for logos, icons, and background images."
        link="https://squircley.app/"
        image="/weekly/content/34/squircley.png"
      />

      <LinkBox
        title="1-Line Layouts"
        description="10 Modern CSS Layouts that can fit into one line."
        link="https://1linelayouts.glitch.me/"
        image="/weekly/content/34/1line-layouts.png"
      />

      <LinkBox
        title="hyperapp"
        description="A tiny framework for building functional, declarative web interfaces."
        link="https://github.com/jorgebucaran/hyperapp"
        image="https://wweb.dev/weekly/content/33/hyperapp.png"
      />

      <LinkBox
        title="html.systems"
        description="A set of components built with HTML, CSS and JavaScript."
        link="http://html.systems/"
        image="/weekly/content/33/htmlsystems.jpg"
      />

      <LinkBox
        title="Grid Cheatsheet"
        description="A cool cheat sheet for everything you can do with CSS Grid."
        link="https://yoksel.github.io/grid-cheatsheet/"
        image="/weekly/content/32/grid-cheatsheet.png"
      />

      <LinkBox
        title="Sitejoy"
        description="A website that lists inspirational websites, which are also fast and responsive."
        link="https://www.sitejoy.dev/"
        image="/weekly/content/30/sitejoy.png"
      />

      <LinkBox
        title="No Design Development"
        description="A collection of tools for developers who have little to no artistic talent."
        link="https://nodesign.dev/"
        image="/weekly/content/29/no-design-development.jpg"
      />

      <LinkBox
        title="Shape Dividers"
        description="A generator for beautiful SVG shape dividers."
        link="https://www.shapedivider.app/"
        image="/weekly/content/29/shape-dividers.png "
      />

      <LinkBox
        title="Obsidian"
        description="A nice tool for creating a knowledge base by making and connecting notes."
        link="https://obsidian.md/"
        image="/weekly/content/28/obsidian.png"
      />

      <LinkBox
        title="Keyframes"
        description="Create basic or complex CSS @keyframe animations with a visual timeline editor."
        link="https://keyframes.app/"
        image="/weekly/content/27/keyframes.png"
      />

      <LinkBox
        title="Tiny helpers"
        description="A collection of free single-purpose online tools for web developers."
        link="https://tiny-helpers.dev/"
        image="/weekly/content/26/tiny-helpers.jpg"
      />

      <LinkBox
        title="Design Resources For Developers"
        description="Brad Traversy just released this awesome list of free design resources."
        link="https://github.com/bradtraversy/design-resources-for-developers"
        image="/weekly/content/25/design-resources-for-developers.jpg"
      />

      <LinkBox
        title="background generator"
        description="A cool generator, which also has a small list of backgrounds created with it."
        link="https://background-generator.com/"
        image="/weekly/content/23/background-generator.jpg"
      />

      <LinkBox
        title="40 Free HTML landing page templates"
        description="A nice list of landing templates, written on dev.to by Davide Pacilio."
        link="https://dev.to/davidepacilio/40-free-html-landing-page-templates-3gfp/"
        image="/weekly/content/23/40-free-html-landing-page-templates.png"
      />

      <LinkBox
        title="Linkdash"
        description="A cool repo to generate a dashboard of your most important links."
        link="https://github.com/macouella/linkdash"
        image="https://wweb.dev/weekly/content/21/linkdash.jpg"
      />

      <LinkBox
        title="Open UI"
        description="An open-source project to maintain a standard for UI and to promote its adherence and adoption."
        link="https://open-ui.org/"
        image="/weekly/content/20/open-ui.png"
      />

      <LinkBox
        title="MVP.css"
        description="A CSS library, which styles the basic HTML elements. No CSS classes needed for a decent website styling."
        link="https://andybrewer.github.io/mvp/"
        image="/weekly/content/19/mvpcss.jpg"
      />

      <LinkBox
        title="SaaS landing page examples"
        description="A nice list of landing pages to get ideas and inspiration from."
        link="https://saaslandingpage.com/"
        image="/weekly/content/15/saas-landing-page-examples.png"
      />

      <LinkBox
        title="5 Top Free Programming Books for Front-End Developers"
        description="A list of books for the self-taught front-end developer."
        link="https://booksoncode.com/articles/free-programming-books-for-front-end-developers"
        image="/weekly/content/14/top-free-programming-books-for-front-end-developers.jpg"
      />

      <LinkBox
        title="Gradient Magic"
        description="A huge collection of beautiful css gradients."
        link="https://www.gradientmagic.com/"
        image="/weekly/content/8/gradient-magic.jpg"
      />

      <LinkBox
        title="Screen Size Map"
        description="An interactive map of the most popular screen sizes."
        link="https://screensizemap.com/"
        image="https://wweb.dev/weekly/content/10/screen-size-map.png"
      />

      <LinkBox
        title="Hero Patterns"
        description="A cool collection of repeatable SVG pattern backgrounds by Steve Schoger."
        link="https://www.heropatterns.com"
        image="/weekly/content/9/hero-patterns.png"
      />
    </ui.GridContainer>

    <ui.Container>
      <ui.Subheadline as="h2">You might also like</ui.Subheadline>
      <Featured resourceIds={[2, 4, 6]} />
    </ui.Container>
  </Layout>
)

export default Post
