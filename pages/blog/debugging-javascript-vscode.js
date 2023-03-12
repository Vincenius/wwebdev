import React from 'react'

import ArticleLayout from '../../components/ArticleLayout'

const Post = () => (
  <ArticleLayout id={12}>
    <p>
      Every time I'm tracing a bug, I'm tempted to throw in a console.log() to check some variables.
      This can be faster when you exactly know what the issue is, but it will most likely take
      longer if that's not the case.
    </p>
    <p>
      In the following post, you'll find some videos followed by an explanation. I will show how to set
      up debugging for Javascript in VS Code for Node.js and for React in Firefox or Chrome.
    </p>

    <h2>Debugging Node.js</h2>

    {/* <video controls muted src="/blog/debugging-js-vscode/1-debug-nodejs.mp4"></video> */}

    <p>
      First of all, you need to go to the debug tab on the right menu of VS Code. If you don't have anything
      configured yet you can create a new launch.json. Choose "Node.js" from the dropdown.
    </p>
    <p>
      If you don't see the option to create a new file, you can open the existing launch.json by clicking on the gear icon.
      You can add new configurations by typing the environment (eg "node").
      Then you can choose from the autocomplete.
    </p>

    <p>
      The generated configuration will run the file, which is specified under "program" with a debugger attached.
      To do that choose the "Launch Program" option in the debug window and click the "play icon".
    </p>

    <p>
      Now your node.js program should be running. You can go to any file of your program and set a
      breakpoint by clicking next to the line number. This works the same for express APIs, which run on some port.
    </p>

    <h3>Attach debugger to Port</h3>

    <p>
      Another way to enable debugging on servicer side apps is to attach the debugger to a port.
      This would enable you to use automatic reload with tools like nodemon. For that, you have to
      open your launch.json by clicking that little gear icon on top of the debug tab.
    </p>

    {/* <video controls muted src="/blog/debugging-js-vscode/2-attach-nodejs.mp4"></video> */}

    <p>
      Then within the configuration array, you have to type "attach" and select "Node.js: Attach".
      This will generate code that includes a port.
    </p>

    <p>Now you have to start your app with this port as the --inspect parameter.</p>

    <p><code>node --inspect=9229 index.js</code></p>

    {/* <video controls muted src="/blog/debugging-js-vscode/3-attach-nodejs.mp4"></video> */}

    <p>
      Your app should be running. Afterward, you should be able to attach the debugger.
      Go to the debugging tab, select "Attach" from the dropdown, and click the start icon.
    </p>

    <h2>Launch Firefox or Chrome against localhost</h2>

    {/* <video controls muted src="/blog/debugging-js-vscode/4-debug-chrome.mp4"></video> */}

    <p>
      In this example, I'll debug a react app in Firefox and Chrome.
      If you want to use Firefox you'll need to go to the extensions tab in VS Code first.
      Install the extension for debugging Firefox. You can find it
      <a href='https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug' target='_blank' rel="noopener noreferrer">here</a>.
    </p>

    <p>
      For Chrome, you don't need to install an extension as VS Code.
      It is included in the default debugger since version 1.46.
    </p>

    <p>
      As the Video shows you have to create a launch.json file by going to the debug tab.
      Choose the browser with which you want to debug. In the Video I choose Chrome but for
      Firefox it should be exactly the same. If it doesn't show up in the list or you already have a
      launch.json file, you can instead go to the file. Then type "Firefox" or "Chrome". Now use the
      autocomplete to generate the corresponding configuration.
      For Firefox it would be <code>Firefox: Launch (Server)</code>.
    </p>
    <p>
      Last you have to replace the URL with the one where your app is actually
      running on. Afterward, you should be able to use the debugger.
    </p>

    <p>
      Further reads: <br />
      <a href="https://code.visualstudio.com/Docs/editor/debugging"  target='_blank' rel="noopener noreferrer">https://code.visualstudio.com/Docs/editor/debugging</a><br/>
      <a href="https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug"  target='_blank' rel="noopener noreferrer">https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug</a>
    </p>
  </ArticleLayout>
)

export default Post
