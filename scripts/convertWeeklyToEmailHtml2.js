const fs = require('fs')
const fetch = require('node-fetch')
const mjml2html = require('mjml')
const { weeklyData } = require('../content/weekly')
const id = weeklyData[0].id

const json = { weekly: id }
const stringified = JSON.stringify(json)
const query = encodeURI(stringified)

fetch(`https://vyx7vatlne.execute-api.eu-central-1.amazonaws.com/prod?q=${query}`)
  .then(res => res.json())
  .then(data => {
    let markdown = `<mjml>
    <mj-head>
      <mj-title>wweb.dev weekly #${id}</mj-title>
      <mj-attributes>
        <mj-text font-size="16px" font-family="helvetica" />
        <mj-button font-family="helvetica" />
      </mj-attributes>
      <mj-style>
        a {
          color: #017a8c;
        }
      </mj-style>
    </mj-head>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-image src="https://wweb.dev/weekly/social/weekly${id}.jpg" fluid-on-mobile="true" />
          <mj-text>Here's the weekly update from ${weeklyData[0].date}.</mj-text>
          <mj-text>If you have any feedback or you want to share tools and resources for the next newsletter - just answer to this email.</mj-text>
        </mj-column>
      </mj-section>
      `
      for (let i = 0; i < data.length; i++) {
        const item = data[i]

        if (i === -1) { // sponsor?
          markdown = `${markdown}
          <mj-section>
            <mj-column>
              <mj-image src="https://wweb.dev${item.image}" href="${item.link}" border="1px solid #BDBDBD" />
            </mj-column>
            <mj-column>
              <mj-text>
                <h2>${item.title}</h2>
                <p>${item.description}</p>
              </mj-text>
              <mj-button align="left" background-color="#00C6A7" color="white" href="${item.link}"> Visit! </mj-button>
            </mj-column>
          </mj-section>
          `
        } else {
          markdown = `${markdown}
          <mj-section>
            <mj-group>
              <mj-column width="30%">
                <mj-image padding-right="0" src="https://wweb.dev${item.image}" href="${item.link}"  border="1px solid #BDBDBD" />
              </mj-column>
              <mj-column width="70%">
                <mj-text>
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                  <a href="${item.link}" color="#00C6A7">Visit!</a>
                </mj-text>
              </mj-column>
            </mj-group>
          </mj-section>
          `
        }
      }

      markdown = `${markdown}
          <mj-section>
            <mj-column>
              <mj-text>Enjoyed this newsletter? Help me grow by sharing it with your friends and colleagues.</mj-text>
              <mj-text line-height="0">Cheers,</mj-text>
              <mj-text line-height="0">Vincent from wweb.dev</mj-text>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>`

    // const htmlOutput = mjml2html(markdown)

    // only osx??
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(markdown); proc.stdin.end();

    console.log('copied')
  })