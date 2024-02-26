import React from 'react'

import ArticleLayout from '../../components/ArticleLayout'
import CodeBlock from '../../components/CodeBlock'

const snippet1 = "ssh-add ~/.ssh/your-private-key"
const snippet2 = "ssh username@your-public-ip"
const snippet3 = "ssh-keygen"
const snippet4 = "cat ~/.ssh/id_rsa.pub"
const snippet5 = `mkdir apps
cd apps/`
const snippet6 = "git clone git@github.com:your-username/your-repository.git"
const snippet7 = "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash"
const snippet8 = `export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion`
const snippet9 = "nvm -v # will output the version (for me, 0.39.5)"
const snippet10 = "nvm install --lts"
const snippet11 = `nvm install node # latest version
nvm install 16.3.0 # install a specific version`
const snippet12 = "node -v # shows the node version (for me, v20.9.0)"
const snippet13 = `cd ~/apps/your-repository/
npm i`
const snippet14 = "npm install -g yarn"
const snippet15 = "nano .env # or nano .env.local for Next.js"
const snippet16 = `npm run build
npm start`
const snippet17 = "npm install pm2 -g"
const snippet18 = 'pm2 start npm --name "app-name" -- start'
const snippet19 = "pm2 logs"
const snippet20 = `sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy`
const snippet21 = `cd ~/
nano Caddyfile`
const snippet22 = `your-domain.com {
  reverse_proxy localhost:3000
}`
const snippet23 = `sudo caddy stop # make sure it's not running already
sudo caddy run`
const snippet24 = "sudo caddy start"
const snippet25 = `name: Deploy to Server

on:
  push: # deploy on push ->
    branches: [ "main" ] # to this branch

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: SSH into the server and run a command
        run: |
          sshpass -p \${{ secrets.SSH_PASSWORD }} ssh -o StrictHostKeyChecking=no \${{ secrets.SSH_USERNAME }}@YOUR_IP << 'EOF'
            echo "Connected!!!"
            export PATH="$PATH:/root/.nvm/versions/node/YOUR_NODE_VERSION/bin"
            cd ~/your/application
            git pull
            npm i
            npm run build
            pm2 restart your-application
            echo "Deployment done!"
          EOF`

const snippet26 = `name: Deploy to Server

on:
  push: # deploy on push ->
    branches: [ "main" ] # to this branch

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Set up SSH agent
        run: |
          mkdir -p ~/.ssh
          echo "\${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
      - name: SSH into the server and run a command
        run: |
          ssh -o StrictHostKeyChecking=no -i ~/.ssh/id_rsa ubuntu@YOUR_IP << 'EOF'
            echo "Connected!!!"
            export PATH="$PATH:/root/.nvm/versions/node/YOUR_NODE_VERSION/bin"
            cd ~/your/application
            git pull
            npm i
            npm run build
            pm2 restart your-application
            echo "Deployment done!"
          EOF`
const snippet27 = "cat ~/.ssh/id_rsa"
const snippet28 = "echo $PATH"
const snippet29 = "/root/.nvm/versions/node/v20.9.0/bin"
const snippet30 = "pm2 list"

const Post = () => (
  <ArticleLayout id={26}>
    <p>Hey everyone,</p>
    <p>I&#39;ve recently moved my Next.js application from Vercel to an Ubuntu Server. In this article, I will share a step-by-step guide on how I did it. This applicable for any web app that runs on a port.</p>
    <p><em>Prerequirement:</em>
    A GitHub repository with your application you want to host</p>
    <p><em>Disclaimer: Links marked with * are affiliate links</em></p>
    <p><strong>Table of contents:</strong></p>
    <ul>
    <li><a href="#connect-to-your-server">Connect to your server</a></li>
    <li><a href="#fetch-the-code-from-github">Fetch the code from GitHub</a></li>
    <li><a href="#run-the-app">Run the app</a></li>
    <li><a href="#serve-the-app-using-caddy">Serve the app using Caddy</a></li>
    <li><a href="#create-a-ci-pipeline-using-caddy">Create a CI pipeline using GitHub Actions</a></li>
    </ul>
    <h2 id="connect-to-your-server">Connect to your server</h2>
    <p>First, you&#39;ll need an Ubuntu server. Some options are <a href="https://m.do.co/c/5ec9f49fcf88">DigitalOcean</a><em> and <a href="https://aws.amazon.com/">AWS EC2</a>. I decided to go for <a href="https://acn.ionos.com/aff_c?offer_id=1&amp;aff_id=7931">IONOS</a></em> because they are using green energy and their pricing is quite reasonable. (e.g. 4GB ram, 2 cores &amp; 160GB storage for $9/mo)</p>
    <p>The important part is that you make sure that the public IP won&#39;t change on server restart. How to do this depends on your hosting provider. For DigitalOcean this means adding a Reserved IP and for AWS adding an Elastic IP.</p>
    <p>Your hosting provider will give you either an SSH key or a password to connect to your Linux instance.</p>
    <p>If you got an SSH key, you&#39;ll need to add it to your machine first. Move the private key to your SSH directory (<code>~/.ssh</code>). Then open your terminal and use:</p>
    <CodeBlock
      language="bash"
      value={snippet1}
    />
    <p>For Windows, you might need to run <code>start-ssh-agent</code> first.</p>
    <p>Now you can connect to your instance using your terminal.</p>
    <CodeBlock
      language="bash"
      value={snippet2}
    />
    <p>Usually your default username will be &quot;root&quot; or &quot;ubuntu&quot;.</p>
    <h2 id="fetch-the-code-from-github-">Fetch the code from GitHub.</h2>
    <p>Now that we&#39;re connected to the server, we need to get our application code. This can be done via git clone. To be able to access your GitHub account, you need to create a new SSH key. On your Ubuntu server run</p>
    <CodeBlock
      language="bash"
      value={snippet3}
    />
    <p>Use the default path (<code>/root/.ssh/id_rsa</code>) and leaving the passphrase empty. Get your public key by running</p>
    <CodeBlock
      language="bash"
      value={snippet4}
    />
    <p>Copy the output. Now head to your GitHub settings → SSH and GPG keys → New SSH Key. Give a proper title and paste the output of your public key to the Key field, and create the key. </p>
    <p><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xpnv0z51jbggwcfhs61e.png" alt="Screenshot of GitHub. Click SSH and PGP Keys and then New SSH Key" /></p>
    <p>Now you will be able to pull your code from your Ubuntu server. Go to your GitHub repository and copy the SSH clone URL. (<code>git@github.com:your-username/your-repository.git</code>)</p>
    <p><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hekkwl1lrc2bqhpdcfxb.png" alt="Screenshot of GitHub. Copy the repositories SSH clone url" /></p>
    <p>Now head back to your server command line. For storing my applications, I usually create a directory <code>apps</code> in my home directory.</p>
    <CodeBlock
      language="bash"
      value={snippet5}
    />
    <p>That&#39;s personal preference. You can store your code wherever you want. Clone your GitHub repository using the URL you just copied.</p>
    <CodeBlock
      language="bash"
      value={snippet6}
    />
    <h2 id="run-the-app">Run the app</h2>
    <p>Before you are able to run your application, you might need to install dependencies. My application is a Next.js app. So I need to install Node.js first. I will install it using &quot;nvm&quot;, because that makes switching versions easier. Based on my experience, this reduces headaches in the future.</p>
    <p>You can find the script to install nvm on their <a href="https://github.com/nvm-sh/nvm">GitHub repository</a>.</p>
    <p>As the time of writing this is:</p>
    <CodeBlock
      language="bash"
      value={snippet7}
    />
    <p>After running the script, it will show you some follow-up commands to enable it. Run those as well. For me it&#39;s this:</p>
    <CodeBlock
      language="bash"
      value={snippet8}
    />
    <p>You can verify that nvm is installed properly by running</p>
    <CodeBlock
      language="bash"
      value={snippet9}
    />
    <p>Now we can use nvm to install any Node.js version. I will go with the most recent LTS (Long Term Support) version.</p>
    <CodeBlock
      language="bash"
      value={snippet10}
    />
    <p>To install other versions you can use</p>
    <CodeBlock
      language="bash"
      value={snippet11}
    />
    <p>Verify that node has been installed correctly by running</p>
    <CodeBlock
      language="bash"
      value={snippet12}
    />
    <p>Now we are able to install the dependencies of our project.</p>
    <CodeBlock
      language="bash"
      value={snippet13}
    />
    <p>If you want to use <code>yarn</code> instead of <code>npm i</code> you can install it using</p>
    <CodeBlock
      language="bash"
      value={snippet14}
    />
    <p>Before running your application, don&#39;t forget to add the environment variables (if needed).</p>
    <CodeBlock
      language="bash"
      value={snippet15}
    />
    <p>Then add the variables and exit the editor with &quot;Ctrl + X&quot;. Confirm saving the file with &quot;Y&quot; and confirm the filename with the return key.</p>
    <p>Now you should be able to build and run the app. For Next.js the corresponding commands are:</p>
    <CodeBlock
      language="bash"
      value={snippet16}
    />
    <p>Your app should be running now. To be able to run the app in the background, I will use <a href="https://github.com/Unitech/pm2">pm2</a>.  Stop your application using &quot;Ctrl + C&quot; and install pm2</p>
    <CodeBlock
      language="bash"
      value={snippet17}
    />
    <p>Now you can run your app in the background using</p>
    <CodeBlock
      language="bash"
      value={snippet18}
    />
    <p>Replace &quot;app-name&quot; with your application name. If your app needs a different npm script than <code>npm run start</code>, replace <code>-- start</code> with the command you need. If you run a file you can use <code>pm2 start main.js --name &quot;app-name&quot;</code>. To see if the application is running properly, you can use</p>
    <CodeBlock
      language="bash"
      value={snippet19}
    />
    <p>Now we need to make the app available to the public.</p>
    <h2 id="serve-the-app-using-caddy">Serve the app using Caddy</h2>
    <p><a href="https://caddyserver.com/">Caddy</a> is a web server like nginx. The biggest advandage of Caddy over nginx is, that it handles HTTPS automatically. You can find the script to install Caddy in their <a href="https://caddyserver.com/docs/install#debian-ubuntu-raspbian">documentation</a>.</p>
    <p>At the time of writing, this is following:</p>
    <CodeBlock
      language="bash"
      value={snippet20}
    />
    <p>Before we serve our application using Caddy, we need to point the domain to the server IP. We need to do this first, so Caddy is able to issue the SSL Certificate.</p>
    <p>Head to the website where you bought your domain. For me this is Namecheap. Go to the DNS settings and add an A Record that points to the public IP of your server. As host, use &quot;@&quot; if you want to have it on your domain or enter any string that you want as subdomain.</p>
    <p><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ignt3so4sdkenw7ibrj.png" alt="Screenshot Namecheap showing an A Record with an IP" /></p>
    <p>Now go back to your server&#39;s command line. We need to create a Caddyfile to tell Caddy what domain is pointing to our server. I will create the Caddyfile in the home directory of my user.</p>
    <CodeBlock
      language="bash"
      value={snippet21}
    />
    <p>Add following content to the Caddyfile:</p>
    <CodeBlock
      language="bash"
      value={snippet22}
    />
    <p>Replace <code>your-domain.com</code> with the domain you are using. Also replace <code>:3000</code> if your application runs on a different port. Save the file with &quot;Ctrl + X&quot; -&gt; &quot;Y&quot; -&gt; &quot;Return&quot;. You can serve many applications via Caddyfile adding this code multiple times in your Caddyfile and replacing the domain and port.</p>
    <p>Now we are able to start Caddy. Make sure to be in the same directory as your Caddyfile when you start Caddy. Then run:</p>
    <CodeBlock
      language="bash"
      value={snippet23}
    />
    <p>Now Caddy generates the SSL certificate and serves the app. It might fail to generate the SSL certificate even if you&#39;re sure, you&#39;ve pointed the domain to the correct IP. Sometimes it takes a while for the DNS to propagate. Wait a bit and try again a few minutes later.</p>
    <p>Congrats! You should now be able to access your web app on your domain. If you&#39;re seeing errors, you can check the application logs with <code>pm2 logs</code>.</p>
    <p>As a last step, we want to run Caddy in the background. Use &quot;Ctrl + C&quot; to exit the Caddy process. Then run</p>
    <CodeBlock
      language="bash"
      value={snippet24}
    />
    <p>You should still be able to access your application on your domain.</p>
    <h2 id="create-a-ci-pipeline-using-github-actions">Create a CI pipeline using GitHub Actions</h2>
    <p>Last but not least, we will set up a CI pipeline. It will automatically build and restart our app when we push to GitHub. This depends on how we log onto our Ubuntu machine (SSH key or password). For both variants you need to create a file <code>.github/workflows/deploy.yml</code> in your project.</p>
    <p><strong>Password authentication</strong></p>
    <p>If you use a password to log onto your server add the following content to the file:</p>
    <CodeBlock
      language="bash"
      value={snippet25}
    />
    <p>The first line of our run script tells GitHub to connect to our server via sshpass. For that we need to add the environment secrets <code>SSH_PASSWORD</code> and <code>SSH_USERNAME</code>.</p>
    <p>For that open your GitHub repository and click on &quot;Settings&quot;. On the left menu click on &quot;Secrets and variables&quot; and in the sub-menu &quot;Actions&quot;. There you can click &quot;New repository secret&quot;. Create two secrets with the names &quot;SSH_USERNAME&quot; and &quot;SSH_PASSWORD&quot; with the corresponding values.</p>
    <p><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fgkssnfalng8ux05gn0e.png" alt="Screenshot Github showing Settings → Actions → New repository secret" /></p>
    <p><strong>SSH key authentication</strong></p>
    <p>If you use an SSH key to log onto your server add the following content to the file:</p>
    <CodeBlock
      language="bash"
      value={snippet26}
    />
    <p>In the first step we&#39;re creating a directory to copy our SSH key to. Afterward, we create the SSH key via the echo command. For that we need to add the <code>SSH_PRIVATE_KEY</code> our repository secrets.</p>
    <p>Open your GitHub repository and click on &quot;Settings&quot;. On the left menu click on &quot;Secrets and variables&quot; and in the sub-menu &quot;Actions&quot;. There you can click &quot;New repository secret&quot;. Create a new secret with the name &quot;SSH_PRIVATE_KEY&quot;.</p>
    <p>To get your private SSH key go to your server CLI and type:</p>
    <CodeBlock
      language="bash"
      value={snippet27}
    />
    <p>Then copy the output to your GitHub secret and create it.</p>
    <p><strong>For both methods</strong></p>
    <p>In the line where you connect via <code>ssh / sshpass</code>, replace &quot;YOUR_IP&quot; with the actual IP of your server.</p>
    <p>Wrapped in the &quot;EOF&quot; you can find the code which will be executed on the server. First it will log that it connected successfully. Then we need to update the path to our Node.js binary. This enables the GitHub action to use our global modules like pm2. To get the correct path open your Server command line and type:</p>
    <CodeBlock
      language="bash"
      value={snippet28}
    />
    <p>This will display all paths on our machine, separated by &quot;:&quot;.
    Look for the one to the .nvm directory. For me it&#39;s</p>
    <CodeBlock
      language="bash"
      value={snippet29}
    />
    <p>Now you can update the path in the deploy.yml with your Node.js path.</p>
    <p>In the next line the script changes the directory to our project. Update the path to your application.
    Then it does all the steps we would do manually on the machine get the updates.</p>
    <p>The last thing you need to update is the name of &quot;your-application&quot; with the name of your pm2 process. If you don&#39;t know the name you can go to your server CLI and type</p>
    <CodeBlock
      language="bash"
      value={snippet30}
    />
    <p>This will give you a list of all node apps running on your server.</p>
    <p>Now you can push the deploy script to GitHub. You can check if the deployment ran successfully on your GitHub repository under the tab &quot;Actions&quot;. If something went wrong you can check the logs of the GitHub action to debug the problem.</p>
    <p><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dfnn8nmx8h0jce28doxn.png" alt="Screenshot successfull GitHub Action deployment" /></p>
    <h2 id="thanks-for-reading-">Thanks for reading!</h2>
    <p>I hope I could help you setting up your server. If you have questions or problems feel free to comment.</p>
    <p>If you enjoyed the content you can follow me on <a href="https://twitter.com/wweb_dev">Twitter/X</a> or check my <a href="https://webdev.town/">weekly web development resources newsletter</a>.</p>

  </ArticleLayout>
)

export default Post
