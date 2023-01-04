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
      for (let i = 0; i < data.length; i = i+2) {
        const item = data[i]
        const item2 = data[i+1]

        markdown= `${markdown}
        <mj-section>
          <mj-column>
            <mj-image src="https://wweb.dev${item.image}" href="${item.link}" fluid-on-mobile="true" border="1px solid #BDBDBD" />
            <mj-text>
              ${item.sponsored ? '<p style="margin: 0; color: #616161">Sponsored</p>' : ''}
              <h2 style="margin-top:5px;"><a href="${item.link}" style="color: #000; text-decoration: none;">${item.title}</a></h2>
              <p>${item.description}</p>
              <a href="${item.link}">Visit!</a>
            </mj-text>
            <mj-spacer height="20px" />
            <mj-divider border-width="1px" border-color="lightgrey" />
            <mj-spacer height="40px" />
          </mj-column>
          ${item2
            ? `<mj-column>
            <mj-image src="https://wweb.dev${item2.image}" href="${item2.link}" fluid-on-mobile="true" border="1px solid #BDBDBD" />
            <mj-text>
              ${item2.sponsored ? '<p style="margin: 0; color: #616161">Sponsored</p>' : ''}
              <h2 style="margin-top:5px;"><a href="${item2.link}" style="color: #000; text-decoration: none;">${item2.title}</a></h2>
              <p>${item2.description}</p>
              <a href="${item2.link}">Visit!</a>
            </mj-text>
            <mj-spacer height="20px" />
            <mj-divider border-width="1px" border-color="lightgrey" />
          </mj-column>`
            : '<mj-column> </mj-column>'}
        </mj-section>`
      }

      markdown = `${markdown}
        <mj-section>
          <mj-column>
            <mj-text>You can support this newsletter by</mj-text>
            <mj-text>💸 booking a <a href="https://wweb.dev/sponsorship/">sponsored post</a></mj-text>
            <mj-text>☕ donating via <a href="https://www.buymeacoffee.com/wwebdev">BuyMeACoffee</a></mj-text>
            <mj-text>🚀 helping me grow by sharing it with your friends and colleagues</mj-text>
            <mj-text></mj-text>
            <mj-text line-height="0">Cheers,</mj-text>
            <mj-text line-height="0">Vincent from wweb.dev</mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>`

    const htmlOutput = mjml2html(markdown)

    // only osx??
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(markdown); proc.stdin.end();

    console.log('copied')
  })