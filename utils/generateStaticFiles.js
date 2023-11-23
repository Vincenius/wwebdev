import fs from "fs-extra"
import { Feed } from "feed"
import postData from "../content/articles"
import templateData from "../content/templates"

const formatDate = date => {
  var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const generateStaticFiles = () => {
  const sortedData = templateData
    .concat(postData)
    .sort((a,b) => new Date(b.date) - new Date(a.date))

  // ROBOTS.txt
  const robotsTxt = `User-agent: *
  Sitemap: https://wweb.dev/sitemap.xml
  Disallow:`;

  fs.writeFileSync("./public/robots.txt", robotsTxt);
  console.log("robots.txt saved!");

  // SITEMAP.XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sortedData.reduce((acc, curr) => `${acc}
        <url>
            <loc>https://wweb.dev${curr.link}</loc>
            <lastmod>${formatDate(new Date(curr.updatedAt || curr.date))}</lastmod>
        </url>`, ''
      )}
  </urlset>`;

  fs.writeFileSync("./public/sitemap.xml", sitemapXml);
  console.log("sitemap.xml saved!");


  // RSS

  const date = new Date();
  const author = {
    name: "Vincent Will",
    email: "info@wweb.dev",
    link: "https://vincentwill.com",
  }
  const siteURL = "https://wweb.dev"

  const feed = new Feed({
    title: "wweb.dev",
    description: "Stay up to date with weekly updates, get resources for next project and read articles and tutorials about web development.",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/logo-text.png`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, wweb.dev`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });

  sortedData.forEach((post) => {
    const url = `${siteURL}${post.link}`;
    feed.addItem({
      title: post.headline,
      id: url,
      link: url,
      description: post.description,
      content: post.description,
      author: [author],
      contributor: [author],
      date: new Date(post.updatedAt || post.date),
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
}

export default generateStaticFiles;