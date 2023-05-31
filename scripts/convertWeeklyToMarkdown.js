const fs = require('fs')
const fetch = require('node-fetch')
const { weeklyData } = require('../content/weekly')
const id = weeklyData[0].id

fetch(`https://wweb.dev/api/weekly?id=${id}`)
  .then(res => res.json())
  .then(data => {
    let markDown = ``

    for (const item of data) {
      const imageLink = item.image.startsWith('/weekly/')
        ? `https://wweb.dev${item.image}`
        : item.image
      markDown = `${markDown}

______

${item.sponsored ? '*Sponsored*' : ''}
##[${item.title}](${item.link})
[![${item.title}](${imageLink})](${item.link})
${item.description}`
}

markDown = `${markDown}

______

_Enjoyed this newsletter? You can support me by:_

💸 booking a [sponsored post](https://wweb.dev/sponsorship)

🥷 donating via [Ko-Fi](https://ko-fi.com/wweb_dev)

🚀 helping me grow by sharing it with your friends and colleagues


Cheers,
Vincent from [wweb.dev](https://wweb.dev)`

    // only osx??
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(markDown); proc.stdin.end();

    console.log('copied')
  })


