const fs = require('fs')
const fetch = require('node-fetch')
const { weeklyData } = require('../content/weekly')
const id = weeklyData[0].id

const json = { weekly: id }
const stringified = JSON.stringify(json)
const query = encodeURI(stringified)

fetch(`https://vyx7vatlne.execute-api.eu-central-1.amazonaws.com/prod?q=${query}`)
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

To see all the weeklies check: [wweb.dev/weekly](https://wweb.dev/weekly)

Enjoyed this newsletter? Help me grow by sharing it with your friends and colleagues.
Cheers,
Vincent from [wweb.dev](https://wweb.dev)`

    // only osx??
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(markDown); proc.stdin.end();

    console.log('copied')
  })


