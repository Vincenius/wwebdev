import React from 'react'
import * as ui from '../../ui'
import ArticleLayout from '../../components/ArticleLayout'
// import CodeBlock from '../../components/CodeBlock'

const Post = () => (
  <ArticleLayout id={10}>
    <ol>
      <a href="/blog/aws-getting-started-deploy-static-website-s3"><li>Deploying a Static Website to S3</li></a>
      <a href="/blog/aws-getting-started-cloudfront-and-domain"><li>Distribute an S3 Bucket with CloudFront and add a Domain</li></a>
      <li>Micro Services using Lambda, DynamoDB & API Gateway</li>
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

    </p>
  </ArticleLayout>
)

export default Post
