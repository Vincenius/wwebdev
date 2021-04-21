const fs = require('fs')
const { weeklyData } = require('../content/weekly')
const id = weeklyData[0].id
const data = JSON.parse(fs.readFileSync(`./${id}.json`, 'utf8'))

let markDown = `<!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge" /><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />
<style type="text/css">#outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
</style>
<!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->
<style type="text/css">@media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }

      .mj-column-per-50 {
        width: 50% !important;
        max-width: 50%;
      }
    }
</style>
<style type="text/css">@media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }
</style>
<style type="text/css">a,
    span,
    td,
    th {
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale !important;
    }
</style>

<div style="background-color:#ffffff;"><!--[if mso | IE]>
      <table
        align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
<div style="margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
	<tbody>
		<tr>
			<td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;text-align:center;"><!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
			<div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
			<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
				<tbody>
					<tr>
						<td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
						<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
							<tbody>
								<tr>
									<td style="width:50px;"><a href="https://wweb.dev/" target="_blank"><img alt="image description" data-file-id="4744766" height="50" width="84" src="https://gallery.mailchimp.com/23a611280baff5c6bd68c83e3/images/c4754361-63c8-4d5a-8862-4e5c53931c4e.png" style="border-image: none 100% / 1 / 0 stretch; display: block; outline: currentcolor none medium; text-decoration: none; height: 50px; width: 100%; font-size: 14px; margin: 0px;" width="auto" /></a></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
					<tr>
						<td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
						<div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:bold;line-height:24px;text-align:left;color:#434245;">
						<h1 style="margin: 0; font-size: 24px; line-height: normal; font-weight: bold;">wweb.dev Weekly #${id}</h1>
						</div>
						</td>
					</tr>
					<tr>
						<td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
						<div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
						<p style="margin: 0;">Here&#39;s the <a href="https://wweb.dev/weekly/${id}" style="color: #007C89; font-weight: normal; text-decoration: underline;" target="_blank">weekly</a> update from ${weeklyData[0].date}</p>
						</div>
						</td>
					</tr>
				</tbody>
			</table>
			</div>
			<!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]--></td>
		</tr>
	</tbody>
</table>
</div>
<!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->`

for (let i = 0; i < data.items.length; i++) {
  const item = data.items[i]
  const imageLink = item.image.startsWith('/weekly/')
    ? `https://wweb.dev${item.image}`
    : item.image

  // TODO add single item column if length uneven
  if (i % 2 === 0 && data.items.length >= i + 2) {
    const secondItem = data.items[i+1]
  const secondImageLink = secondItem.image.startsWith('/weekly/')
    ? `https://wweb.dev${secondItem.image}`
    : secondItem.image

  markDown = `${markDown}
    <div style="margin:0px auto;max-width:600px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
      <tbody>
        <tr>
          <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    
            <tr>
          
                <td
                  class="" style="vertical-align:top;width:300px;"
                >
              <![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
            <tbody>
              <tr>
                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                <table border="0" cellpadding="0" cellspacing="0" class="mj-full-width-mobile" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                  <tbody>
                    <tr>
                      <td class="mj-full-width-mobile" style="width:250px;"><img alt="image description" height="auto" src="${imageLink}" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:14px;" width="250" /></td>
                    </tr>
                  </tbody>
                </table>
                </td>
              </tr>
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:bold;line-height:24px;text-align:left;color:#434245;">
                <h2 style="margin: 0; font-size: 24px; line-height: normal; font-weight: bold;">${item.title}</h2>
                </div>
                </td>
              </tr>
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                <p style="margin: 0;">${item.description}</p>
                </div>
                </td>
              </tr>
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;" vertical-align="middle">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                  <tbody>
                    <tr>
                      <td align="center" bgcolor="#007C89" role="presentation" style="border:none;border-radius:30px;cursor:auto;mso-padding-alt:10px 25px;background:#007C89;" valign="middle"><a href="${item.link}" style="display: inline-block; background: #007C89; color: white; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; line-height: 24px; margin: 0; text-decoration: none; text-transform: uppercase; padding: 10px 25px; mso-padding-alt: 0px; border-radius: 30px;" target="_blank"><strong>Visit</strong> </a></td>
                    </tr>
                  </tbody>
                </table>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          <!--[if mso | IE]>
                </td>
              
                <td
                  class="" style="vertical-align:top;width:300px;"
                >
              <![endif]-->
    
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
            <tbody>
              <tr>
                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                <table border="0" cellpadding="0" cellspacing="0" class="mj-full-width-mobile" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                  <tbody>
                    <tr>
                      <td class="mj-full-width-mobile" style="width:250px;"><img alt="image description" height="auto" src="${secondImageLink}" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:14px;" width="250" /></td>
                    </tr>
                  </tbody>
                </table>
                </td>
              </tr>
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:bold;line-height:24px;text-align:left;color:#434245;">
                <h2 style="margin: 0; font-size: 24px; line-height: normal; font-weight: bold;">${secondItem.title}</h2>
                </div>
                </td>
              </tr>
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                <p style="margin: 0;">${secondItem.description}</p>
                </div>
                </td>
              </tr>
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;" vertical-align="middle">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                  <tbody>
                    <tr>
                      <td align="center" bgcolor="#007C89" role="presentation" style="border:none;border-radius:30px;cursor:auto;mso-padding-alt:10px 25px;background:#007C89;" valign="middle"><a href="${secondItem.link}" style="display: inline-block; background: #007C89; color: white; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; line-height: 24px; margin: 0; text-decoration: none; text-transform: uppercase; padding: 10px 25px; mso-padding-alt: 0px; border-radius: 30px;" target="_blank"><strong>Visit</strong> </a></td>
                    </tr>
                  </tbody>
                </table>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          <!--[if mso | IE]>
                </td>
              
            </tr>
          
                      </table>
                    <![endif]--></td>
        </tr>
      </tbody>
    </table>
    </div>`
  }

  if(i % 2 === 0 && data.items.length === i + 1) {
    markDown = `${markDown}
    <div style="margin:0px auto;max-width:600px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
      <tbody>
        <tr>
          <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:left;"><!--[if mso | IE]>
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            <tr>
                <td
                  class="" style="vertical-align:top;width:300px;"
                >
              <![endif]-->
          <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
            <tbody>
              <tr>
                <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                <table border="0" cellpadding="0" cellspacing="0" class="mj-full-width-mobile" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                  <tbody>
                    <tr>
                      <td class="mj-full-width-mobile" style="width:250px;"><img alt="image description" height="auto" src="${imageLink}" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:14px;" width="250" /></td>
                    </tr>
                  </tbody>
                </table>
                </td>
              </tr>
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:bold;line-height:24px;text-align:left;color:#434245;">
                <h2 style="margin: 0; font-size: 24px; line-height: normal; font-weight: bold;">${item.title}</h2>
                </div>
                </td>
              </tr>
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                <div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
                <p style="margin: 0;">${item.description}</p>
                </div>
                </td>
              </tr>
              <tr>
                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;" vertical-align="middle">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                  <tbody>
                    <tr>
                      <td align="center" bgcolor="#007C89" role="presentation" style="border:none;border-radius:30px;cursor:auto;mso-padding-alt:10px 25px;background:#007C89;" valign="middle"><a href="${item.link}" style="display: inline-block; background: #007C89; color: white; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; line-height: 24px; margin: 0; text-decoration: none; text-transform: uppercase; padding: 10px 25px; mso-padding-alt: 0px; border-radius: 30px;" target="_blank"><strong>Visit</strong> </a></td>
                    </tr>
                  </tbody>
                </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>`
  }
}

markDown = `${markDown}

<div style="margin:0px auto;max-width:600px;">&nbsp;</div>
<!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


<!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]--><!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->

<div style="margin:0px auto;max-width:600px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
	<tbody>
		<tr>
			<td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
			<div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
			<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
				<tbody>
					<tr>
						<td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
						<div style="font-family:Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;line-height:24px;text-align:left;color:#434245;">
						<p style="margin: 0;">Cheers,<br />
						Vincent from <a href="https://wweb.dev" style="color: #007C89; font-weight: normal; text-decoration: underline;" target="_blank">wweb.dev</a></p>
						</div>
						</td>
					</tr>
				</tbody>
			</table>
			</div>
			<!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]--></td>
		</tr>
	</tbody>
</table>
</div>
<!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]--><!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]--><!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]--></div>`

// only osx??
var proc = require('child_process').spawn('pbcopy');
proc.stdin.write(markDown); proc.stdin.end();

console.log('copied')