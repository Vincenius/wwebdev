const fs = require("fs-extra");
const getPathsObject = require("./getPathsObject");
const formatDate = require("./formatDate");

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://wweb.dev/sitemap_local.xml
Disallow:`;

fs.writeFileSync("out/robots.txt", robotsTxt);
console.log("robots.txt saved!");

// SITEMAP.XML
const pathsObj = getPathsObject();
const today = formatDate(new Date());
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${Object.keys(pathsObj).map(
        path => `<url>
            <loc>https://wweb.dev${path}</loc>
            <lastmod>${
            pathsObj[path].lastModified
                ? formatDate(new Date(pathsObj[path].lastModified))
                : today
            }</lastmod>
        </url>`
    )}
</urlset>`;

fs.writeFileSync("out/sitemap_local.xml", sitemapXml);
console.log("sitemap_local.xml saved!");
