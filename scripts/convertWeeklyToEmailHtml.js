const fs = require('fs')
const { weeklyData } = require('../content/weekly')
const id = weeklyData[0].id
const data = JSON.parse(fs.readFileSync(`../public/weekly/data/${id}.json`, 'utf8'))

let markDown = `<h1 style="display: block; margin: 0; padding: 0; color: #202020; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; line-height: 125%; text-align: center;">wweb.dev Weekly #${weeklyData[0].id}</h1>
<br />
Here&#39;s the <a href="https://wweb.dev/weekly/${weeklyData[0].id}" target="_blank">weekly</a> update from ${weeklyData[0].date}
<br />`

for (const item of data.items) {
  const imageLink = item.image.startsWith('/weekly/')
    ? `https://wweb.dev${item.image}`
    : item.image

  markDown = `${markDown}
<br />
<hr style="border: 1px solid #e0e0e0" />
<br />

<h2><a href="${item.link}">${item.title}</a></h2>

<p><a href="${item.link}"><img alt="${item.title}" loading="lazy" src="${imageLink}" style="border: 0px; width: 400px; height: auto; margin: 0px 0px 15px;" width="400" /></a><br />
${item.description}</p>
&nbsp;`
}

markDown = `${markDown}

<br />
<br />
Cheers,<br />
Vincent from <a href="https://wweb.dev" target="_blank">wweb.dev</a></p>`

console.log(markDown)