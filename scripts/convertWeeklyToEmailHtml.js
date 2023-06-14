const fs = require('fs')
const fetch = require('node-fetch')
const mjml2html = require('mjml')
const { weeklyData } = require('../content/weekly')
const id = weeklyData[0].id

fetch(`https://wweb.dev/api/weekly?id=${id}`)
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
            <mj-text>☕️ donating via <a href="https://ko-fi.com/wweb_dev">Ko-Fi</a></mj-text>
            <mj-text>🚀 helping me grow by sharing it with your friends and colleagues</mj-text>
            <mj-text></mj-text>
            <mj-text line-height="0">Cheers,</mj-text>
            <mj-text line-height="0">Vincent from wweb.dev</mj-text>
          </mj-column>
        </mj-section>
        <mj-section background-color="#fafafa" padding="10px">
          <mj-column width="100%">
            <mj-text align="center">
              <h3>wweb.dev is sponsored by</h3>
            </mj-text>
          </mj-column>
          <mj-column>
            <mj-image width="75px" border-radius="100px" src="https://wweb.dev/sponsors/daily-subset.webp" href="https://www.dailysubset.com/"></mj-image>
            <mj-text font-size="14px" align="center">
              <a href="https://www.dailysubset.com/">The Daily Subset</a>
            </mj-text>
          </mj-column>
          <mj-column>
            <mj-image width="75px" border-radius="100px" src="https://wweb.dev/sponsors/mailmask.png" href="https://www.mailmask.me/"></mj-image>
            <mj-text font-size="14px" align="center">
              <a href="https://www.mailmask.me/">mailmask</a>
            </mj-text>
          </mj-column>
          <mj-column>
            <mj-image width="75px" border-radius="100px" src="https://wweb.dev/sponsors/marko.jpeg" href="https://markodenic.com/"></mj-image>
            <mj-text font-size="14px" align="center">
              <a href="https://markodenic.com/">Marko</a>
            </mj-text>
          </mj-column>
          <mj-column>
            <mj-image width="75px" src="https://app.sponsor.ninja/plus.png" href="https://ko-fi.com/wweb_dev"></mj-image>
            <mj-text font-size="14px" align="center">
              <a href="https://ko-fi.com/wweb_dev">Become a Sponsor</a>
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section>
        <mj-column>
          <mj-text align="center">
          <a href="{$unsubscribe}">Unsubscribe</a><span> | </span><a href="{$url}">View in browser</a><span> | </span><a href="{$forward}">Forward</a>
          </mj-text>
        </mj-column>
      </mj-section>
      </mj-body>
    </mjml>`

    const htmlOutput = mjml2html(markdown)

    // only osx??
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(htmlOutput.html); proc.stdin.end();

    console.log('copied')
  })