import React from 'react'
import * as ui from '../../ui'
import ArticleLayout from '../../components/ArticleLayout'
import CodeBlock from '../../components/CodeBlock'

const snippet1 = `const AWS = require("aws-sdk");
const crypto = require("crypto");

// Initialising DynamoDB SDK
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async body => {
  const params = {
    TableName: "posts", // name of your DynamoDB table
    Item: { // Creating an Item with a unique id, the created date and the passed title
      id: crypto.randomBytes(16).toString("hex"),
      created_at: new Date().toISOString(),
      title: body.title,
    }
  };
  try {
    // https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html#GettingStarted.NodeJs.03.01
    const data = await documentClient.put(params).promise();
    return {
      statusCode: 201
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    };
  }
};`


const snippet2 = `{
  "title": "my awesome post"
}`

const snippet3 = `const AWS = require("aws-sdk");
const { v4: uuidv4 } = require('uuid');

// Initialising the DynamoDB SDK
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async body => {
  const params = {
    TableName: "posts", // name of your DynamoDB table
    Item: { // create item with a unique id, the created date and the passed title
      id: uuidv4(),
      created_at: new Date().toISOString(),
      title: body.title,
    }
  };
  try {
    // https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.03.html
    const data = await documentClient.put(params).promise();
    return  {
      statusCode: 201
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    };
  }
};`

const snippet4 = `const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
  const params = {
    TableName: "posts" // name of your DynamoDB table
  };
  try {
    // use the scan method to get all items in the table
    const data = await documentClient.scan(params).promise();
    const response = {
      statusCode: 200,
      body: JSON.stringify(data.Items)
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500
    };
  }
};`

const snippet5 = `const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  const {
    pathParameters: { id }
  } = event; // Extracting the id from the request path
  const params = {
    TableName: "posts", // name of your DynamoDB table
    Key: { id } // key of the item you want to find.
  };
  try {
    // use the get method to fetch an indvidual item
    const data = await documentClient.get(params).promise();
    const response = {
      statusCode: 200,
      body: JSON.stringify(data.Item)
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500
    };
  }
};`

const snippet6 = `const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  const {
    pathParameters: { id }
  } = event; // get id from path
  const { title } = JSON.parse(event.body);
  const params = {
    TableName: "posts",
    Item: {
      id: id,
      title: title
    }
  };
  try {
    // use put method to find and update
    const data = await documentClient.put(params).promise();
    const response = {
      statusCode: 200
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500
    };
  }
};`

const snippet7 = `const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  const {
    pathParameters: { id }
  } = event; // get id from path
  const params = {
    TableName: "posts",
    Key: { id }
  };
  try {
    // use delete method the remove item
    const data = await documentClient.delete(params).promise();
    const response = {
      statusCode: 200
    };
    return response;
  } catch (e) {
    return {
      statusCode: 500
    };
  }
};`

const Post = () => (
  <ArticleLayout id={18}>
    <ol>
      <a href="/blog/aws-getting-started-deploy-static-website-s3"><li>Deploying a Static Website to S3</li></a>
      <a href="/blog/aws-getting-started-cloudfront-and-domain"><li>Distribute an S3 Bucket with CloudFront and add a Domain</li></a>
      <a href="/blog/aws-getting-started-micro-service-lambda-dynamodb"><li>Micro Services using Lambda, DynamoDB & API Gateway</li></a>
    </ol>

    <p>
      In this part, we're creating a DynamoDB. Then we create a Lambda for creating, reading, updating, and
      deleting entries in that database. And last we create an API Gateway to trigger those Lambdas.
    </p>

    <h2>DynamoDB</h2>

    <p>
      First, open the service DynamoDB.<br/>DynamoDB is a NoSQL database. NoSQL databases are purpose-built
      for specific data models and have flexible schemas.
    </p>

    <img src="/blog/aws3/1-dynamodb-service.jpg" alt="dynamodb service" />

    <p>
      Then click <ui.Code>Create Table</ui.Code> and specify the name and the primary key of your table. I will
      call mine <ui.Code>posts</ui.Code> with the primary key <ui.Code>id</ui.Code>. This primary key has to
      be unique for all your items in the table.
    </p>

    <p>
      You could also specify a sort key to provide more querying flexibility. I will skip this for simplicity.
    </p>

    <img src="/blog/aws3/2-dynamodb-create.jpg" alt="dynamodb create new" />

    <img src="/blog/aws3/3-dynamodb-create-settings.jpg" alt="settings of new dynamodb" />

    <p>
      Now you should see the overview of your freshly created table.
      You can go to Items to be able to see all items in your table.
      You can also manually add them here.
    </p>

    <img src="/blog/aws3/4-dynamodb-items.jpg" alt="items of dynamodb" />

    <p>
      To access this table we will create a Lambda function. AWS Lambda is a computing service
      that lets you run code without managing servers. AWS Lambda executes your code only when
      needed and scales automatically.
    </p>

    <h2>Adding a Lambda IAM role</h2>

    <p>
      For a lambda function to be able to access a DynamoDB it needs the permissions to do so.
      Thus we need to head to the IAM service and create a new role.
    </p>

    <img src="/blog/aws3/5-services-iam.jpg" alt="IAM service" />

    <p>
      Go to roles on the left menu and click <ui.Code>Create role</ui.Code>.
    </p>

    <img src="/blog/aws3/6-iam-create.jpg" alt="IAM create new role" />

    <p>
      Now you have to select the service, which will use the role. Click on <ui.Code>Lambda</ui.Code> and
      then <ui.Code>Next: Permissions</ui.Code>.
    </p>

    <img src="/blog/aws3/7-iam-create-lambda.jpg" alt="IAM create lambda permissions" />

    <p>
      In this step, we need to specify the permissions our lambda will get. We want our lambda to be able to
      access the DynamoDB. So type <ui.Code>dynamo</ui.Code> and select <ui.Code>AmazonDynamoDBFullAccess</ui.Code>.
    </p>

    <img src="/blog/aws3/8-iam-dynamodb.jpg" alt="IAM dynamodb access" />

    <p>
      Skip the step of setting tags. On the last step choose a name for the new role.
      I'll call it  <ui.Code>lambda_dynamo</ui.Code>. Then click  <ui.Code>Create role</ui.Code>.
    </p>

    <img src="/blog/aws3/9-iam-create.jpg" alt="IAM create role" />

    <h2>Creating the Lambda function</h2>

    <p>
      Now we're ready to create the lambda function.
      Go to the Lambda service and click on <ui.Code>Create Function</ui.Code>.
    </p>

    <img src="/blog/aws3/10-lambda-service.jpg" alt="Lambda service" />

    <img src="/blog/aws3/11-lambda-create.jpg" alt="Lambda create" />

    <p>
      I create the lambda for creating DynamoDB entries first. I'll call the function <ui.Code>createPost</ui.Code>.
      Then on the bottom click <ui.Code>Choose or create an execution role</ui.Code> and select the IAM role we
      just created. Afterward, click <ui.Code>Create function</ui.Code>.
    </p>

    <img src="/blog/aws3/12-lambda-details.jpg" alt="Lambda creation details" />

    <p>
      In the function view, scroll down to get to the editor.<br/>
      The code for adding an item to the DynamoDB looks like this:
    </p>

    <CodeBlock language="javascript" value={snippet1} />

    <p>
      Afterward, click <ui.Code>Test</ui.Code>, to check if your function is working.
    </p>

    <img src="/blog/aws3/13-lambda-code.jpg" alt="Lambda code" />

    <p>
      Because we haven't specified any tests yet, a modal will open.
    </p>

    <p>
      On this test modal, we need to specify a test name and the body, which is passed to the function.
      In my case it is only expecting a <ui.Code>title</ui.Code>. Thus, I'll enter following JSON.
    </p>

    <CodeBlock language="json" value={snippet2} />

    <img src="/blog/aws3/13-5-lambda-create-test.jpg" alt="Lambda create test" />

    <p>
      Now you can click <ui.Code>Test</ui.Code> again, to execute the test call.
    </p>
    <p>
      If everything worked correctly, you should see a success message with the status code <ui.Code>201</ui.Code>.<br/>
      You can also go back to your DynamoDB to verify that the Item was created successfully.
    </p>

    <h2>Deploy a Lambda from your local machinge</h2>

    <p>
      Deploying from your machine makes sense if you want to extend this function in the future.
      This section is optional and you can skip it if you're not interested in deploying from your machine.
    </p>

    <p>
      So open up an empty workspace in your preferred code editor. Then create a new
      file called <ui.Code>index.js</ui.Code>. In this file add the following content.
    </p>

    <CodeBlock language="javascript" value={snippet3} />

    <p>
      This is almost the same function we used before for our Lambda. The only difference is, that I used the
      package <ui.Code>uuid</ui.Code> for generating a unique id.
    </p>

    <p>
      This is because I also want to go through the process of adding node modules to our Lambda.
      So open up the terminal and navigate to your workspace. Then type:
    </p>

    <CodeBlock value="npm i --save uuid" />

    <p>
      To be able to deploy our function to AWS, we need to zip it first.
    </p>

    <CodeBlock value="zip -r function.zip ." />

    <p>
      This will create a new .zip file in our project root with all the content of the workspace.
    </p>
    <p>
      Now our function is ready to be deployed. For that, you need to have
      the <a href="https://github.com/awslabs/aws-shell" target="_blank" rel="noopener noreferrer">aws-shell</a> setup.
      If you haven't done this yet, you can head back to <a href="/blog/aws-getting-started-deploy-static-website-s3" target="_blank" rel="noopener noreferrer">Part 1</a> of
      this series and search for <ui.Code>aws-shell</ui.Code>.
    </p>
    <p>
      For deploying to AWS enter following command:
    </p>

    <CodeBlock value="aws lambda update-function-code --function-name yourFunctionName --zip-file fileb://function.zip" />

    <p>
      You have to replace <ui.Code>yourFunctionName</ui.Code> with the name of your Lambda function.
    </p>
    <p>
      If you didn't specify a region on <ui.Code>aws configure</ui.Code> you need to append
      the region to your command with <ui.Code>--region yourRegion</ui.Code>.
      You can find your region on the top right of the AWS management console.
    </p>

    <p>
      Now you can go back to the AWS management console and check if the code was updated.
      Also, feel free to run the test again to see if everything is still working.
    </p>

    <h2>Create an API for your Lambda</h2>

    <p>
      To be able to call your Lambda, go to the service <ui.Code>API Gateway</ui.Code>.
      Then scroll down and click on <ui.Code>Build</ui.Code> of the card <ui.Code>REST API</ui.Code>.
    </p>

    <img src="/blog/aws3/14-api-gateway-service.jpg" alt="API Gateway Service" />

    <img src="/blog/aws3/15-api-gateway-create.jpg" alt="Create API Gateway" />

    <p>
      Then select <ui.Code>New API</ui.Code> and enter a name for yours. To keep it simple,
      use the type <ui.Code>Regional</ui.Code>. Then hit <ui.Code>Create API</ui.Code>.
    </p>

    <img src="/blog/aws3/16-api-gateway-create.jpg" alt="Create API Gateway Details" />

    <p>
      Then click on <ui.Code>Actions</ui.Code> and <ui.Code>Create Method</ui.Code>. Now choose your Lambda function,
      which is in my case <ui.Code>postLambda</ui.Code>, and click <ui.Code>Save</ui.Code>.
    </p>

    <img src="/blog/aws3/17-api-gateway-method.jpg" alt="Create API Gateway Method" />

    <img src="/blog/aws3/18-api-gateway-method-create.jpg" alt="Create API Gateway Method Details" />

    <p>
      You should see a modal, which is asking you to give permissions for your API Gateway.
      Click <ui.Code>OK</ui.Code> to allow your API Gateway to access your Lambda function.
    </p>

    <img src="/blog/aws3/19-api-gateway-modal.jpg" alt="Create API allow lambda access" />

    <p>
      To be able to call our API, we need to deploy it first. So go into <ui.Code>Actions</ui.Code> and
      click <ui.Code>Deploy API</ui.Code>. Then create a new Stage. I'll call
      mine <ui.Code>production</ui.Code>, but this can be anything.
    </p>

    <img src="/blog/aws3/20-api-gateway-deploy.jpg" alt="Deploy API Gateway" />

    <img src="/blog/aws3/21-api-gateway-deploy.jpg" alt="Deploy API Gateway" />

    <p>
      On top of the page, you will see the <ui.Code>Invoke URL</ui.Code>. If you click on it
      you will get a <ui.Code>Missing Authentication Token</ui.Code> error. Don't get confused by this.
      This is because we haven't specified a GET endpoint yet. You should be able to call the
      POST endpoint of this URL. On Postman, it would look like this.
    </p>

    <img src="/blog/aws3/23-postman.jpg" alt="Invoke Post endpoint postman" />

    <p>
      Or you can also call this endpoint from your terminal with curl
    </p>

    <CodeBlock
      language="javascript"
      value={`curl --location --request POST 'https://your-invoke-url' \ --header 'Content-Type: text/plain' \ --data-raw '{ "title": "post from API" }'`}
    />

    <p>
      As the next step, create the Lambdas for reading, updating and deleting entries in the DynamoDB.
    </p>

    <p>
      It is also possible to do this all in one lambda function.
      (<a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-set-up-simple-proxy.html#api-gateway-set-up-lambda-proxy-integration-on-proxy-resource" target="_blank" rel="noopener noreferrer">See here</a>).
      This has its own <a href="https://stackoverflow.com/a/41428226/10785177" target="_blank" rel="noopener noreferrer">advantages and disadvantages.</a>
    </p>

    <p>
      But I will go for the approach of having separate lambdas for separate endpoints.
    </p>

    <h2>Read, Update and Delete Lambdas</h2>

    <p>
      Head back to the Lambda service and create the other four Lambdas with the same steps as described earlier in this post.
      Don't forget to use the <ui.Code>lambda-dynamo</ui.Code> role.
    </p>

    <p>
      Use the following code for the Lambdas
    </p>

    <CodeBlock language="javascript" value={snippet4} label="Get all posts"/>
    <br />
    <CodeBlock language="javascript" value={snippet5} label="Get single post by id"/>
    <br />
    <CodeBlock language="javascript" value={snippet6} label="Update post by id"/>
    <br />
    <CodeBlock language="javascript" value={snippet7} label="Delete post by id"/>

    <h2>Updating the API Gateway</h2>

    <p>
      After you've created all those lambdas, go to the API Gateway service. Open your before created API.
    </p>

    <img src="/blog/aws3/24-api-gateway.jpg" alt="API Gateway" />

    <p>
      Create an endpoint for getting all posts in the table.
    </p>

    <img src="/blog/aws3/25-api-gateway-get-all.jpg" alt="API Gateway get all endpoint" />

    <p>
      For getting, updating, or deleting a single item, we're getting the id of the element from the URI.
      To provide that id, create a new resource.
    </p>

    <img src="/blog/aws3/26-api-gateway-resource.jpg" alt="API Gateway create resource" />

    <img src="/blog/aws3/27-api-gateway-resource-create.jpg" alt="API Gateway create resource details" />

    <p>
      Afterward, add a GET, a PUT, and a DELETE method to this sub-path.
      For those, you need to enable <ui.Code>Use Lambda Proxy integration</ui.Code> to be able to access the id from the URL.
    </p>

    <img src="/blog/aws3/28-create-get.jpg" alt="API Gateway create get by id endpoint" />

    <p>
      When you're done creating the endpoints, your API should look like this:
    </p>

    <img src="/blog/aws3/29-api-gateway-done.jpg" alt="Final API Gateway" />

    <p>
      As a last step deploy your API again by clicking <ui.Code>Actions</ui.Code> and then <ui.Code>Deploy API</ui.Code>.
      Select the same stage to overwrite it with the new state.
    </p>

    <img src="/blog/aws3/30-api-gateway-deploy.jpg" alt="Deploy API Gateway" />

    <p>
      Congratulations. Your REST API is now up and running. Here are the calls for your shell to call those endpoints:
    </p>

    <CodeBlock
      label="Get all"
      language="javascript"
      value={`curl --location --request GET 'https://your-invoke-url'`}
    />
    <br />
    <CodeBlock
      label="Get by ID"
      language="javascript"
      value={`curl --location --request GET 'https://your-invoke-url/some-id'`}
    />
    <br />
    <CodeBlock
      label="Update by ID"
      language="javascript"
      value={`curl --location --request PUT 'https://your-invoke-url/some-id' \ --header 'Content-Type: text/plain' \ --data-raw '{ "title": "updated title from API" }'`}
    />
    <br />
    <CodeBlock
      label="Delete by ID"
      language="javascript"
      value={`curl --location --request DELETE 'https://your-invoke-url/some-id'`}
    />

    <p>
      Thanks for reading this tutorial.<br />If you had problems following along at some point, please let me know.
    </p>
  </ArticleLayout>
)

export default Post
