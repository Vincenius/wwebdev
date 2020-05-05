/*
			<h1 style="display: block; margin: 0; padding: 0; color: #202020; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; line-height: 125%; text-align: left;">wweb.dev Weekly #</h1>
			<br />
			Here&#39;s the <a href="https://wweb.dev/weekly/11" target="_blank">weekly</a> update from the 5th of February 2020<br />
			<br />
			&nbsp;
			<h2><a href="https://hero-generator.netlify.app/?utm_source=wweb.dev">Hero Generator</a></h2>

			<p><a href="https://hero-generator.netlify.app/?utm_source=wweb.dev"><img alt="Hero Generator" height="360" loading="lazy" src="https://res.cloudinary.com/practicaldev/image/fetch/s--c1iiQK38--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/hero-og.png" style="border: 0px  ; width: 600px; height: 360px; margin: 0px 0px 15px;" width="600" /></a><br />
			A cool generator for hero sections by Sarah Drasner.</p>
			&nbsp;

			<div class="styled__Description-sc-1fsoux6-2 bCpkap" wfd-id="89">
			<p><br />
			<br />
			<br />
			Cheers,<br />
			Vincent from <a href="https://wweb.dev" target="_blank">wweb.dev</a></p>
			</div>
*/

const { weeklyData } = require('../content/weekly')

let markDown = `<h1 style="display: block; margin: 0; padding: 0; color: #202020; font-family: Helvetica; font-size: 26px; font-style: normal; font-weight: bold; line-height: 125%; text-align: center;">wweb.dev Weekly #${weeklyData[0].id}</h1>
<br />
Here&#39;s the <a href="https://wweb.dev/weekly/${weeklyData[0].id}" target="_blank">weekly</a> update from ${weeklyData[0].date}
<br />`

for (const item of weeklyData[0].items) {
  const imageLink = item.image.startsWith('/weekly/')
    ? `https://wweb.dev${item.image}`
    : item.image

  markDown = `${markDown}
<br />
<br />

<h2><a href="${item.link}?utm_source=wweb.dev">${item.title}</a></h2>

<p><a href="${item.link}/?utm_source=wweb.dev"><img alt="${item.title}" loading="lazy" src="${imageLink}" style="border: 0px; width: 400px; height: auto; margin: 0px 0px 15px;" width="400" /></a><br />
${item.description}</p>
&nbsp;`
}

markDown = `${markDown}

<br />
<br />
Cheers,<br />
Vincent from <a href="https://wweb.dev" target="_blank">wweb.dev</a></p>`

console.log(markDown)