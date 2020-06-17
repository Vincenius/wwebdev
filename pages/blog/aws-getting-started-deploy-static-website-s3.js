import React from 'react'
import * as ui from '../../ui'
import ArticleLayout from '../../components/ArticleLayout'
import CodeBlock from '../../components/CodeBlock'

const snippet1 = `{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadForGetBucketObjects",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::your-bucket-name/*"
            ]
        }
    ]
}`

const snippet2 = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>S3 Website</title>
  </head>
  <body>
    This website is served from S3!
  </body>
</html>`

const Post = () => (
  <ArticleLayout id={9}>
    <ol>
      <a href="/blog/aws-getting-started-deploy-static-website-s3"><li>Deploying a Static Website to S3</li></a>
      <li>Distribute your S3 Bucket with Cloudfront and add a Domain</li>
      <li>Micro Services using Lambda, DynamoDB & API Gateway</li>
    </ol>

    <p>
      In this series, we're creating a serverless stack using AWS.<br/>
      In this part, I'll show how to serve a static website through an S3 Bucket and how to
      deploy from your local machine.
    </p>

    <p>
      First of all, go ahead and log in or create a new account if you don't have one yet. <br/>
      For that go to <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">https://aws.amazon.com/</a>.
    </p>

    <img src="/blog/aws1/aws1-login.jpg" alt="aws wesbite login top-right" />

    <p>
      Afterward, go to the Management Console if you're not already there. <br />
      Select S3 from the services menu in the top left.
    </p>

    <img src="/blog/aws1/aws2-management-console.jpg" alt="aws where to find the management console" />

    <img src="/blog/aws1/aws3-s3-service.jpg" alt="aws s3 service on the top-right menu" />

    <p>
      Now you should see the S3 bucket overview. S3 stands for "simple storage service",
      and is a service that lets you store data.
    </p>
    <p>
      Go ahead and click <ui.Code>Create bucket</ui.Code>.
    </p>

    <img src="/blog/aws1/aws4-s3-blank.jpg" alt="aws s3 service create bucket" />

    <p>
      Now choose a name for your bucket. For the region, choose the one near you.
    </p>
    <p>
      We'll learn how to decrease the latency for people who are not living near
      your region using CloudFront in the next part of this series.
    </p>

    <p>
      As we want to serve a static website from the bucket, it needs to be public. <br/>
      So uncheck the box for "Block all public access" and remove the checks, which are not related to the ACLs.
    </p>

    <img src="/blog/aws1/aws5-s3-create.jpg" alt="aws s3 options for creating a bucket" />

    <p>
      Click <ui.Code>Create Bucket</ui.Code>. Afterward, you'll see an overview of all your buckets.
    </p>
    <p>
      Open the newly created one and go to the Tabs <ui.Code>Permissions</ui.Code> -> <ui.Code>Bucket Policy</ui.Code>.
      Then enter the following code and replace <ui.Code>your-bucket-name</ui.Code> with the name of your bucket. Then hit save.
    </p>

    <CodeBlock
      language="javascript"
      value={snippet1}
    />
    <img src="/blog/aws1/aws6-bucket-policy.jpg" alt="aws s3 bucket policy" />

    <p>
      This will allow public access to your bucket.
    </p>
    <p>
      Now we need to enable static web hosting. For this go to the tab <ui.Code>Properties</ui.Code> and click the Box <ui.Code>Static website hosting</ui.Code>.
      There you only need to specify the index document.
    </p>

    <p>
      I will use <ui.Code>index.html</ui.Code> for that, as this will be the entry point for my website. <br/>
      You can also specify below, which page will be shown when errors occur.
    </p>

    <img src="/blog/aws1/aws7-bucket-website.jpg" alt="aws s3 bucket enable website" />

    <p>
      If you now click on the endpoint of your bucket, you'll see a <ui.Code>404 Not Found</ui.Code> error.
      This is because we haven't uploaded our index.html file yet.
    </p>

    <p>
      I'll use the following file to verify that everything is working.
    </p>

    <CodeBlock
      language="markup"
      value={snippet2}
    />

    <p>
      So let's go back to the "Overview" Tab and click "Upload".
    </p>

    <img src="/blog/aws1/aws8-bucket-overview-upload.jpg" alt="aws s3 upload file to bucket" />

    <p>
      Select your file and click upload on the bottom left.<br/>
      There is no need to change the permissions and properties for this file, as the defaults are fine.
    </p>

    <img src="/blog/aws1/aws9-upload.jpg" alt="aws s3 upload settings" />

    <p>
      Now you should be able to see the content of your <ui.Code>index.html</ui.Code> when you open
      the link of your bucket.
    </p>
    <p>
      If you don't have the link anymore, you can click the <ui.Code>index.html</ui.Code> in
      the overview and it will show you the "Object URL".
    </p>

    <img src="/blog/aws1/aws10-url.jpg" alt="aws s3 url of uploaded index.html" />

    <h2>
      Setting up IAM and Deploying to S3 from your CLI
    </h2>

    <p>
      First, you need to get an <ui.Code>Access key ID</ui.Code> and <ui.Code>Secret access key</ui.Code> to
      get programmatic access to your AWS account.
    </p>
    <p>For that go back to your management console and go to the service IAM.</p>

    <img src="/blog/aws1/aws11-services-iam.jpg" alt="aws where to find IAM" />

    <p>
      Amazon IAM (Identity and Access Management) is used to manage users and their permissions.<br />
      Click on <ui.Code>Users</ui.Code> in the left menu and then on <ui.Code>Add user</ui.Code>
    </p>

    <img src="/blog/aws1/aws12-iam-user.jpg" alt="aws iam add user" />

    <p>
      We want to create a user, which is able to do everything - so I call it admin.
      Set the check for <ui.Code>Programmatic access</ui.Code>.
    </p>
    <p>
      Afterward, click <ui.Code>Next: Permissions</ui.Code>.
    </p>

    <img src="/blog/aws1/aws13-iam-create.jpg" alt="aws iam user create settings" />

    <p>
      As a next step, we need to grant that user the required permissions.<br/>
      So go to <ui.Code>Attach existing policies directly</ui.Code> and select <ui.Code>AdministratorAccess</ui.Code>.
    </p>

    <img src="/blog/aws1/aws14-permissions.jpg" alt="aws set permissions for IAM user" />

    <p>
      You can skip the next tag of setting tags and straight create the user.
    </p>
    <p>
      In the last step, you'll see your <ui.Code>Access key ID</ui.Code> and <ui.Code>Secret access key</ui.Code>.<br/>
      Note them somewhere or keep this page open.
    </p>

    <img src="/blog/aws1/aws15-keys.jpg" alt="aws find keys for new user" />

    <p>
      To deploy via CLI you need to install the aws-shell. Go to their repository and follow the installment instructions:<br/>
      <a href="https://github.com/awslabs/aws-shell" target="blank" rel="noopener noreferrer">https://github.com/awslabs/aws-shell</a>
    </p>

    <p>
      After the installation, type
    </p>

    <CodeBlock value="aws configure" />

    <p>
      It will ask you for your access key and your secret. Use the ones we've just created.<br/>
      You can leave the <ui.Code>Default region name</ui.Code> and the <ui.Code>Default output format</ui.Code> blank.
    </p>

    <p>
      Now you should be able to deploy to S3 via command line.
      In your console, navigate to the directory where your files are.
      To upload your files type:
    </p>

    <CodeBlock value="aws s3 sync ./ s3://your_bucket_name" />

    <p>
      Where <ui.Code>./</ui.Code> is the path and <ui.Code>your_bucket_name</ui.Code> is the name of your bucket.
    </p>

    <p>
      Now you should see a success message for all the files that have been uploaded in the console.
      The files should be available in your bucket.
    </p>

    <p>
      For uploading websites through the <ui.Code>aws s3 sync</ui.Code> command it makes sense
      to add the <ui.Code>--delete</ui.Code> argument. This will delete all files on s3,
      which are not in your source directory.
    </p>

    <p>For example, I'd use the following command to upload the export of a next.js app.</p>

    <CodeBlock value="aws s3 sync ./out s3://your_bucket_name --delete" />

    <p>
      Congratulations you now know how to serve a website to S3 and how to upload to an S3 bucket with the aws-shell.
    </p>

    <p>
      In the next part of this series, we will distribute our S3 bucket through Cloudfront and add a domain.
    </p>
  </ArticleLayout>
)

export default Post
