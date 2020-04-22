const fs = require("fs-extra");
const getPathsObject = require("./getPathsObject");
const formatDate = require("./formatDate");
const { weeklyData } = require("../content/weekly")

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
