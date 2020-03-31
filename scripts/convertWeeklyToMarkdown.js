const { weeklyData } = require('../content/weekly')

let markDown = ``

for (const item of weeklyData[0].items) {
  markDown = `${markDown}

______

##[${item.title}](${item.link}?utm_source=wweb.dev)
[![${item.title}](${item.image})](${item.link}?utm_source=wweb.dev)
${item.description}`
}

markDown = `${markDown}

______

To see all the weeklies check: [wweb.dev/weekly](https://wweb.dev/weekly)`

console.log(markDown)