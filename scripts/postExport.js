const fs = require("fs-extra");
const getPathsObject = require("./getPathsObject");
const formatDate = require("./formatDate");
const { weeklyData } = require("../content/weekly")
const articleData = require("../content/articles")
const resourceData = require("../content/resources")

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://wweb.dev/sitemap.xml
Disallow:`;

fs.writeFileSync("out/robots.txt", robotsTxt);
console.log("robots.txt saved!");

// SITEMAP.XML
const pathsObj = getPathsObject()
const today = formatDate(new Date());
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${Object.keys(pathsObj)
        .map(
            path => path === '/_document'  || path === '/_app' || path === '/weekly/[pid]'
                ? ''
                : `<url>
                    <loc>https://wweb.dev${path}</loc>
                    <lastmod>${
                    pathsObj[path].lastModified
                        ? formatDate(new Date(pathsObj[path].lastModified))
                        : today
                    }</lastmod>
                </url>`
        )}
    ${weeklyData.map(
        d => `<url>
            <loc>https://wweb.dev/weekly/${d.id}</loc>
            <lastmod>${
                formatDate(new Date(d.date))
            }</lastmod>
        </url>`
    )}
</urlset>`;

fs.writeFileSync("out/sitemap.xml", sitemapXml);
console.log("sitemap.xml saved!");


// ----- GENERATE RSS ----- //

const sortedData = weeklyData
    .concat(articleData)
    .concat(resourceData)
    .sort((a,b) => new Date(b.date) - new Date(a.date))

const now = new Date()

let rss =
`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">

<channel>
    <title>wweb.dev</title>
    <link>https://wweb.dev</link>
    <description>Stay up to date with weekly updates, get resources for next project and read articles and tutorials about web development.</description>
    <pubDate>Wed, 13 May 2020 05:57:32 GMT</pubDate>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    <atom:link href="https://wweb.dev/rss.xml" rel="self" type="application/rss+xml" />`

for (const item of sortedData) {
    const headline = item.headline || `Web development update ${item.date}`
    const link = item.link
        ? `https://wweb.dev${item.link}`
        : `https://wweb.dev/weekly/${item.id}`

    rss = rss +`
    <item>
        <title>${headline}</title>
        <link>${link}</link>
        <description>${item.description}</description>
        <pubDate>${new Date(item.date).toUTCString()}</pubDate>
        <guid>${link}</guid>
    </item>`
}

rss = rss +
`</channel>

</rss>`.replace("&", "and")

fs.writeFileSync("out/rss.xml", rss);

console.log('Generating RSS Feed done')