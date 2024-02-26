import React from 'react'
import * as ui from '../../ui'
import CodeBlock from '../../components/CodeBlock'
import ArticleLayout from '../../components/ArticleLayout'

const snippet1 = `import React from 'react';
import { useQuery } from 'react-query'

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}

function App() {
  const { status, data, isFetching, error } = useQuery('posts', getPosts)

  if (status === 'loading') {
    return <div>loading...</div> // loading state
  }

  if (status === 'error') {
    return <div>{error.message}</div> // error state
  }

  return (
    <div>
      { data && <ul>{
        data
          .slice(0,10) // only take frist 10 for now
          // render list of titles
          .map(d => <li key={\`post-\${d.id}\`}>{d.title}</li>)
      }</ul> }
      { isFetching && <p>updating...</p> }
    </div>
  )
}

export default App`

const snippet2 = `import React from 'react'
import { NavLink } from 'react-router-dom'
import { useQuery } from 'react-query'

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  await new Promise(r => setTimeout(r, 1000)) // wait a second
  return response.json()
};

function Home() {
  const { status, data, isFetching, error } = useQuery('posts', getPosts)

  if (status === 'loading') {
    return <div>loading...</div> // loading state
  }

  if (status === 'error') {
    return <div>{error.message}</div> // error state
  }

  return (
    <div>
      { data && <ul>{
        data
          .slice(0,10) // only take frist 10 for now
          .map(d => <li key={\`post-\${d.id}\`}>
            <NavLink to={\`/post/\${d.id}\`}>{d.title}</NavLink>
          </li>) // render list of titles
      }</ul> }
      { isFetching && <p>updating...</p> }
    </div>
  );
}

export default Home`

const snippet3 = `import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Post from './components/Post'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path = '/post/:id' render = {routerProps => <Post id={routerProps.match.params.id}/>} />
      </Switch>
    </Router>
  )
}

export default App`

const snippet4 = `import React from 'react'
import { NavLink } from 'react-router-dom'
import { useQuery } from 'react-query'

const Post = ({ id }) => {
  const getPost = async () => {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`)
    const jsonResponse = await response.json()
    jsonResponse.title = \`\${jsonResponse.title} - \${Math.random().toString(36)}\`

    await new Promise(r => setTimeout(r, 1000)) // wait a second
    return jsonResponse
  }

  const { status, data, isFetching } = useQuery(\`post-\${id}\`, getPost)

  if (status === 'loading') {
    return <div>loading...</div> // loading state
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      { isFetching && <p>updating...</p> }
      <br />
      <NavLink to="/">Home</NavLink>
    </div>
  )
}

export default Post`

const Post = () => (
  <ArticleLayout id={12}>
    <h2>Getting started</h2>

    <p>
      Handling state, which comes from the server can really cause some headaches in React.
      There is a lot you have to think about when dealing with asynchronous data, like updating, caching, or re-fetching to name a few.
    </p>

    <p>
      This is where <a href="https://www.npmjs.com/package/react-query" target="_blank" rel="noopener noreferrer">react-query</a> comes in.
      It handles those smoothly and also offers simple solutions for optimistic rendering, infinite scroll, pagination, and more.
    </p>

    <p>Here's a small demo of what we'll be building:</p>

    <img src="/blog/react-query/react-query-demo.gif" alt="blog application with smooth loading gif" />

    <p>
      If you'd like to jump straight into the code, you can find the repository here: <br/>
      <a href="https://github.com/wwebdev/react-query-demo" target="_blank" rel="noopener noreferrer">https://github.com/wwebdev/react-query-demo</a>
    </p>

    <p>
      For this tutorial, I'll assume you have node installed. First of all, create a new react app with <ui.Code>npx create-react-app</ui.Code>.
      Afterward, install react-query with <ui.Code>npm i --save react-query</ui.Code>
    </p>

    <p>
      For demonstrating how react-query works I'll use the <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">Json Placeholder API</a> to
      create a simple blog.
    </p>

    <h2>Fetching the data</h2>

    <p>
      First of all, I'll remove all the boilerplate code in the App.js and replace it with the following code:
    </p>

    <CodeBlock
      language="jsx"
      value={snippet1}
    />

    <p>
      First I define a function called <ui.Code>getPosts</ui.Code> - this can include anything
      as long as it's returning an asynchronous function.
    </p>

    <p>
      At the beginning of the <ui.Code>App()</ui.Code> the useQuery hook is called with an identifier for
      the data that's being fetched as well as out async function getPosts.
    </p>

    <p>
      The hook returns status, data, isFetching, and error. Those are pretty self-explanatory.
      The status can be either "success", "loading" or "error".
      The rest of the component handles the display of the result on the three possible states.
    </p>

    <p>
      The internals of react-query will now take care of all the caching and updating logic.
      This means whenever you go to this page you'll know that the displayed data will be there instantly
      if you've previously fetched it and it will be always up to date with the server state.
    </p>

    <p>
      That's actually all you need to know to get started using react-query.
      But let's extend this example to see this caching and updating in action!
    </p>

    <h2>Extending the application</h2>

    <p>
      First of all, I'll move the code from App.js to a new component <ui.Code>components/Home.js</ui.Code>.
      Therefore I will rename the component and I'll also add a <ui.Code>NavLink</ui.Code> to the post list.
    </p>

    <CodeBlock
      language="jsx"
      value={snippet2}
    />

    <p>
      Now let's add a router to App.js, which accepts the routes to <ui.Code>/</ui.Code> for Home.js
      and <ui.Code>/post/:id</ui.Code> for a single post page.
    </p>

    <CodeBlock
      language="jsx"
      value={snippet3}
    />

    <p>
      And finally, I'll create a new component <ui.Code>components/Post.js</ui.Code> for displaying
      the data of a single post. The explanation will follow after the code.
    </p>

    <CodeBlock
      language="javascript"
      value={snippet4}
    />

    <p>
      So the <ui.Code>useQuery</ui.Code> in here doesn't differ much from the one in Home.js. It adds the <ui.Code>id</ui.Code> to the identifier,
      so each post has its own state. Additionally, I've added a timeout for 1 second to the <ui.Code>getPost</ui.Code> function
      to make the loading state more visible. Also, I've appended a random string to the title to make the re-fetching visible.
    </p>

    <p>And that's actually the whole code for the gif you saw at the beginning of the post.</p>

    <p>
      If you start working with react-query, I'd recommend you to check out
      the <a href="https://github.com/tannerlinsley/react-query-devtools" target="_blank" rel="noopener noreferrer">react-query-devtools</a>, to
      be able to view the state and the cache.
    </p>

    <p>
      Feel free to check out the code on <a href="https://github.com/wwebdev/react-query-demo" target="_blank" rel="noopener noreferrer">GitHub</a>.
      Also let me know if you'd like to know more about the usage of react-query for things
      like <ui.Code>initial data</ui.Code>, <ui.Code>pre-fetching</ui.Code>, <ui.Code>optimistic rendering</ui.Code> and I'll
      extend this to a series of posts.
    </p>
  </ArticleLayout>
)

export default Post
