import React from 'react'
import * as ui from '../../ui'
import ArticleLayout from '../../components/ArticleLayout'
import CodeBlock from '../../components/CodeBlock'

const Post = () => (
  <ArticleLayout id={17}>
    <ol>
      <a href="/blog/aws-getting-started-deploy-static-website-s3"><li>Deploying a Static Website to S3</li></a>
      <a href="/blog/aws-getting-started-cloudfront-and-domain"><li>Distribute an S3 Bucket with CloudFront and add a Domain</li></a>
      <a href="/blog/aws-getting-started-micro-service-lambda-dynamodb"><li>Micro Services using Lambda, DynamoDB & API Gateway</li></a>
    </ol>

    <p>
      In this part, we're going to add CloudFront to deliver our website content with low latency to the user.
      Afterward, we'll add a domain with HTTPs for our website.
    </p>

    <p>
      So let's jump right into it.<br />
      Go to the AWS Management Console and open the service <ui.Code>CloudFront</ui.Code>.
      Then Click on <ui.Code>Create Distribution</ui.Code>
    </p>

    <img src="/blog/aws2/1-cloudfront-service.jpg" alt="cloudfront service" />
    <img src="/blog/aws2/2-create-distribution.jpg" alt="cloudfront create distribution" />

    <p>
      Now click <ui.Code>Get Started</ui.Code> under the delivery method <ui.Code>Web</ui.Code>
    </p>

    <img src="/blog/aws2/3-get-started.jpg" alt="cloudfront get started" />

    <p>
      On the Origin Settings, the field <ui.Code>Origin Domain Name</ui.Code> is already pre-filled with
      your S3 Bucket as an option. But as we already added <ui.Code>Static website hosting</ui.Code> to
      our bucket, we don't want to use the direct link to our bucket in this field.
      Instead, we have to provide the URL of our bucket.
    </p>
    <p>
      So open a new tab, go to the S3 service and open your bucket. Then copy the URL from the
      bucket properties and paste it into <ui.Code>Origin Domain Name</ui.Code>.
    </p>

    <img src="/blog/aws2/4-bucket-url.jpg" alt="s3 bucket url" />
    <img src="/blog/aws2/5-cloudfront-url.jpg" alt="set cloudfront url" />

    <p>
      Most of the fields should be already filled now.<br/>
      Scroll down and enable <ui.Code>Compress Objects Automatically</ui.Code>.
      This will enable gzip compression for your content.
    </p>

    <img src="/blog/aws2/6-cloudfront-compress.jpg" alt="set cloudfront gzip compression" />

    <p>
      Then add the <ui.Code>Default Root Object</ui.Code>. This is the entry point of your website.
      For me that is <ui.Code>index.html</ui.Code>. Afterward, you can click <ui.Code>Create Distribution</ui.Code>.
    </p>

    <img src="/blog/aws2/7-cloudfront-create.jpg" alt="create cloudfront" />

    <p>
      It will take a moment until your distribution is created.
      When it's done, you can open the domain, which you can see in the list.
    </p>

    <img src="/blog/aws2/8-cloudfront-url.jpg" alt="url of cloudfront distribution" />

    <p>
      For more details on your CloudFront distribution, you can click the ID.
      You can also set the error page there if you want to.
    </p>

    <img src="/blog/aws2/9-cloudfront-details.jpg" alt="cloudfront details" />

    <p>
      If you now deploy to your bucket again, you'll notice, that the content won't change.
      This is because CloudFront is caching your content.
      To invalidate the cache you have to run following command in your console:
    </p>

    <CodeBlock value="aws cloudfront create-invalidation --distribution-id=YOUR_DISTRIBUTION_ID --paths /"/>

    <p>
      Where you have to replace <ui.Code>YOUR_DISTRIBUTION_ID</ui.Code> with the ID of your CloudFront distribution.
    </p>

    <h2>Add a domain with HTTPs</h2>

    <p>
      If you don't have a domain yet, you can buy one on the AWS service <ui.Code>Route 53</ui.Code>.
      Otherwise you can skip this step.
      Don't worry if your domain is sitting somewhere else then Route 53.
      I'll also go through the process for that as well.
    </p>

    <img src="/blog/aws2/10-route53-service.jpg" alt="route 53 service" />
    <br />
    <img src="/blog/aws2/11-domain-registration.jpg" alt="route 53 domain registration" />

    <p>
      I won't go into detail about the purchase process. Choose a domain name and then follow the steps.
    </p>
    <p>
      Next, go to the certificate manager to get an SSL certificate for your website.
    </p>

    <img src="/blog/aws2/12-certificate-service.jpg" alt="certificate service" />
    <br />
    <img src="/blog/aws2/13-certificate-get-started.jpg" alt="certificate get started page" />

    <p>
      Before clicking <ui.Code>Request public certificate</ui.Code>, make sure you switch
      regions to <ui.Code>us-east-1</ui.Code>. This is necessary, because CloudFront only supports the
      US East region for certificates.
    </p>

    <img src="/blog/aws2/14-certificate-region.jpg" alt="certificate switch region" />

    <p>
      Then continue and enter the domain you want to use on the next page. You can also use multiple ones like
    </p>

    <ul>
      <li><ui.Code>wweb.dev</ui.Code></li>
      <li><ui.Code>*.wweb.dev</ui.Code></li>
    </ul>

    <p>
      With this, you will secure the main domain, as well as <ui.Code>www.wweb.dev</ui.Code> and all sub-domains. <br/>
      I will go for only adding a certificate for the specific sub-domain <ui.Code>aws.wweb.dev</ui.Code>
    </p>

    <img src="/blog/aws2/15-certificate-domain.jpg" alt="certificate choose domain" />

    <p>
      Afterward, I'll go for DNS validation. This has some advantages over Email validation, like automatic
      renewal of the certificates.
    </p>

    <img src="/blog/aws2/16-dns-validation.jpg" alt="certificate dns validation" />

    <p>
      Click <ui.Code>Next</ui.Code>. We can skip setting tags, so click <ui.Code>Review</ui.Code> on the next page.
      On the following page, you can click <ui.Code>Confirm and request</ui.Code> if the data you see there is correct.
    </p>

    <img src="/blog/aws2/17-confirm.jpg" alt="certificate confirm screen" />

    <p>
      On the next page, expand your domain by clicking that small arrow next to it.
      Here we have two options, depending on your domain being hosted on Route53 or not.
    </p>

    <p>
      <b>Option 1)</b> If your domain is hosted on Route 53 you will see a button,
      saying <ui.Code>Create record in Route 53</ui.Code>. Click that button.
      Then in the modal, hit <ui.Code>Create</ui.Code>.
    </p>

    <img src="/blog/aws2/18-route53-dns.jpg" alt="certificate for route53" />
    <img src="/blog/aws2/19-route53-dns-2.jpg" alt="certificate for route53 modal" />

    <p>
      <b>Option 2)</b> If you have your domain somewhere else it will look like this:
    </p>

    <img src="/blog/aws2/20-cname-details.jpg" alt="certificate with cname validation" />

    <p>
      Now you have to go to your domain provider and open the DNS settings.
      There you have to create a new CNAME record for your domain.
    </p>
    <p>
      How you create the CNAME record might differ for different providers.
      I had to remove the main domain from the host (<ui.Code>.wweb.dev</ui.Code>) as
      this is appended automatically by Namecheap (where I have my domain).
    </p>

    <img src="/blog/aws2/21-namecheap.jpg" alt="adding CNAME to namecheap" />

    <p>
      You have to do this for all the domains you've added.<br/>
      Now, wait until the status of your certificate turned to <ui.Code>Issued</ui.Code>.
      This can take 5-10 minutes.
    </p>

    <img src="/blog/aws2/22-verified.jpg" alt="issued certificate" />

    <h2>Add your domain to CloudFront</h2>

    <p>
      Go back to your CloudFront distribution.
      Go into the distribution details by clicking the ID and then click the <ui.Code>Edit</ui.Code> button.
    </p>

    <img src="/blog/aws2/23-cloudfront-details.jpg" alt="cloudfront details" />
    <img src="/blog/aws2/24-cloudfront-edit.jpg" alt="cloudfront edit" />

    <p>
      Add the domain to <ui.Code>Alternate Domain Names</ui.Code>. Then click on <ui.Code>Custom SSL Certificate</ui.Code> and
      select your new certificate from the dropdown.<br/>
      Afterward, scroll down and hit <ui.Code>Yes, Edit</ui.Code>.
    </p>

    <img src="/blog/aws2/25-cloudfront-add-url.jpg" alt="cloudfront add ssl and url" />

    <p>
      Now let's create a redirect from HTTP to HTTPS. Therefor go to <ui.Code>Behaviours</ui.Code>, select
      the behavior on top and click <ui.Code>Edit</ui.Code>.
    </p>

    <img src="/blog/aws2/26-cloudfront-behaviour.jpg" alt="cloudfront edit behaviour" />

    <p>
      In the edit view, select <ui.Code>Redirect HTTP to HTTPS</ui.Code> and then again scroll
      down and click <ui.Code>Yes, Edit</ui.Code>.
    </p>

    <img src="/blog/aws2/27-cloudfront-redirect.jpg" alt="cloudfront add redirect" />

    <p>
      Now as the last step we need to point our domain to CloudFront. Here we have two possible options again.
      You either have your domain on Route 53 or you have it hosted somewhere else.
    </p>

    <h3>Option 1) Route 53</h3>
    <p>
      Go back to the <ui.Code>Route 53</ui.Code> service. Then select <ui.Code>Hosted zones</ui.Code> in the
      left menu and click on your domain.
    </p>

    <img src="/blog/aws2/28-route53-hosted-zone.jpg" alt="route 53 hosted zone" />

    <p>
      Now click <ui.Code>Create Record Set</ui.Code>. A menu on the right will open.
      You can leave the <ui.Code>Name</ui.Code> blank if you want to use your main URL.
      You can also use www or a subdomain in that field.
    </p>

    <p>
      Select <ui.Code>Yes</ui.Code> for Alias. Then select your CloudFront distribution in
      the menu for the <ui.Code>Alias Target</ui.Code>.
    </p>

    <img src="/blog/aws2/29-route53-record.jpg" alt="route 53 add record" />

    <p>
      You can add IPv6 support by creating another record with the same settings,
      but with <ui.Code>AAAA - IPv6 address</ui.Code> as the type.
    </p>

    <h3>Option 2) Other Providers</h3>

    <p>
      For any other provider, you have to create another CNAME DNS entry.
      This one should point from your domain to the CloudFront URL.
      For example, on Namecheap, it would look like this for my <ui.Code>aws</ui.Code> subdomain.
    </p>

    <img src="/blog/aws2/30-namecheap-cname.jpg" alt="namecheap cloudfront CNAME" />

    <p>
      For both options, it may take up to an hour until the new DNS is applied.<br/>
      Then your Domain should be set up correctly and point to your CloudFront.
    </p>

    <p>
      In the next and last part of this series, I'll show you how to create a microservice with AWS Lambda,
      DynamoDB, and the API Gateway.
    </p>

      <p>
      <a href="/blog/aws-getting-started-micro-service-lambda-dynamodb">Getting Started with Serverless AWS (3/3) - Distribute an S3 Bucket with CloudFront and add a Domain</a>
    </p>

    <p>
      Did you had problems following along at some point? Please let me know, so I can improve this tutorial :)
    </p>
  </ArticleLayout>
)

export default Post
