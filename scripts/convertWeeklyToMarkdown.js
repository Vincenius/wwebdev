const fs = require('fs')
const { weeklyData } = require('../content/weekly')
const id = weeklyData[0].id
const data = JSON.parse(fs.readFileSync(`../public/weekly/data/${id}.json`, 'utf8'))

let markDown = ``

for (const item of data.items) {
  const imageLink = item.image.startsWith('/weekly/')
    ? `https://wweb.dev${item.image}`
    : item.image
  markDown = `${markDown}

______

##[${item.title}](${item.link})
[![${item.title}](${imageLink})](${item.link})
${item.description}`
}

markDown = `${markDown}

______

To see all the weeklies check: [wweb.dev/weekly](https://wweb.dev/weekly)`

console.log(markDown)