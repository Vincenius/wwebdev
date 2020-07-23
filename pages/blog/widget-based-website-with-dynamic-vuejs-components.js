import React from 'react'
import * as ui from '../../ui'
import CodeBlock from '../../components/CodeBlock'
import ArticleLayout from '../../components/ArticleLayout'

const snippet1 = `<template>
    <h1>{{ msg }}</h1>
</template>`

const snippet2 = `<template>
    <div id="app" ref="main">

    </div>
</template>`

const snippet3 = `import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
name: 'app',
components: {
    HelloWorld
},
methods: {
    init: function() {
    const ComponentClass = Vue.extend( HelloWorld );
    const instance = new ComponentClass({
        propsData: { msg: 'This is a dynamic headline' }
    });
    instance.$mount();
    this.$refs['main'].appendChild(instance.$el);
    }
},
mounted() {
    this.init();
}`

const snippet4 = `const component = this.$options.components['HelloWorld'];
const ComponentClass = Vue.extend(component)`

const snippet5 = `init: function() {
    this.createComponent('HelloWorld', { msg: 'This is a dynamic headline' }, 'main');
},
createComponent: function(componentName, propsData, domRef) {
    const component = this.$options.components[componentName];
    const ComponentClass = Vue.extend(component);
    const instance = new ComponentClass({
        propsData // shorthand for propsData: propsData
    });
    instance.$mount();
    this.$refs[domRef].appendChild(instance.$el);
}`

const snippet6 = `const widgets = [
    {
        'component': 'HelloWorld',
        'dom': 'main',
        'props': { msg: 'This is a dynamic headline'}
    },
    {
        'component': 'HelloWorld',
        'dom': 'main',
        'props': { msg: 'This is a second headline'}
    }
]`

const snippet7 = `init: function() {
    for (const widget of widgets) {
        this.createComponent(widget.component, widget.props, widget.dom);
    }
}`

const snippet8 = `const page = {
    'main': [0, 0, 1]
    }
    const widgets = [
    {
        'id': 0,
        'component': 'HelloWorld',
        'props': { msg: 'This is a dynamic headline' }
    },
    {
        'id': 1,
        'component': 'HelloWorld',
        'props': { msg: 'This is a second headline' }
    }
]`

const snippet9 = `init: function() {
    for (let domRef in page) {
        for (let widgetId of page[domRef]) {
        const widget = widgets.find(widget => widget.id === widgetId);
        this.createComponent(widget.component, widget.props, domRef);
        }
    }
},	`

const Post = () => (
    <ArticleLayout id={1}>
        <p>
            In this post I will explain how to generate a webpage using dynamic Vue.js components. This could be the foundation of a CMS based on Vue.
        </p>
        <p>The finished project can be found&nbsp;<a href="https://codesandbox.io/s/01x2xyq7kv" target="_blank" rel="noopener noreferrer">here</a></p>

        <h2>Project Setup</h2>
        <p>
            First of all install the&nbsp;<a href="https://cli.vuejs.org/">vue-cli</a>
            if you havent already. To do so open a console and type
        </p>
        <p><code>npm install -g @vue/cli</code></p>
        <p>Afterwards create a new project by entering</p>
        <p><code>vue create widget-app</code></p>
        <p>
            You will be prompted to pick a preset. For this project just use default.<br />
            When the installation finished, go into the new project directory and run the Vue app.
        </p>
        <p><code>cd widget-app</code></p>
        <p><code>npm run serve</code></p>
        <p>The app should now be available at&nbsp;<a href="http://localhost:8080/">http://localhost:8080/</a></p>
        <p>
            First of all, to keep it simple, remove everything in the template of&nbsp;<code>src/components/HelloWorld.vue</code>
            &nbsp;exept the &lt;h1&gt;.
        </p>
        <CodeBlock
            language="markup"
            value={snippet1}
        />
        <p>Then remove everything in <code>src/App.vue</code> template inside of app div. Then add ref="main" to the div.</p>

        <CodeBlock
            language="markup"
            value={snippet2}
        />

        <h2>Dynamic Component creation</h2>
        <p>
            First of all we want to create the HelloWorld component dynamically. Therefor update the code in the <code>&lt;script&gt;</code>
            block inside of your App.vue
        </p>

        <CodeBlock
            language="javascript"
            value={snippet3}
        />

        <p>
            Here we added <code>import Vue from 'vue'</code> in the first line. Then we added
            <code>methods</code> and <code>mounted()</code>.
        </p>
        <p>mounted gets called when the app has mounted and then proceeds to call the function <code>init</code> inside of our methods.</p>
        <p>
            Because components do not export a class, we need to pass the component to <code>Vue.extend</code>
            to be able to create an instance of the component with the <code>new</code> keyword.
        </p>
        <p>When creating the instance, we can provide the properties with <code>propsData</code></p>
        <p>
            To mount the instance, we have to call <code>instance.$mount();</code>. As a last step, we are then
            able to attach the instance of the component to the DOM. Therefor we call <code>this.$refs['main']</code>
            to get the <code>&lt;div&gt;&nbsp;</code>where we want to insert our component. Then we call <code>appendChild</code>
            with <code>instance.$el</code> where <code>$el</code> is used to get the native DOM element reference.
        </p>
        <p>
            If you refresh localhost:8080, the dynamic headline should now be visible. Now let's make it possible to choose
            the component based on a string.
        </p>
        <p>Replace&nbsp;<code>const ComponentClass = Vue.extend( HelloWorld );</code> with this two lines:</p>

        <CodeBlock
            language="javascript"
            value={snippet4}
        />

        <p>The code should still work the same, but now we are able to use variables to choose the component we want to generate.</p>
        <p>Next let's extract our method for the dynamic creation of components into a separate function.</p>

        <CodeBlock
            language="javascript"
            value={snippet5}
        />

        <p>
            As you can see, we now have a function called <code>createComponent</code>, which receives the name of the
            component to render, the properties of the component and the DOM reference, where the component will be inserted.
        </p>
        <p>
            Now I'll add an object array after our imports, which defines how widgets are initialized.
            In a real application this would probably be data, which is fetched from a database.
        </p>

        <CodeBlock
            language="javascript"
            value={snippet6}
        />

        <p>Afterwards we can iterate through this array in our init function to render all the Widgets:</p>

        <CodeBlock
            language="javascript"
            value={snippet7}
        />

        <p>You should now be able to see both headlines defined in our widgets array.</p>
        <p>For the last step i'll change the data a little bit to make the widgets reusable.</p>

        <CodeBlock
            language="javascript"
            value={snippet8}
        />

        <p>
            and update the init function to loop through the page object as well as the widgetIds
            inside of each DOM reference inside of the page object.
        </p>

        <CodeBlock
            language="javascript"
            value={snippet9}
        />

        <p>As a final result you should see the first widget rendered two times and the second widget one time.</p>
        <h2>Conclusion</h2>
        <p>A working example of the code can be found here:&nbsp;<a href="https://codesandbox.io/s/01x2xyq7kv">https://codesandbox.io/s/01x2xyq7kv</a></p>
        <p>
            Dynamic rendering of components is pretty&nbsp;straightforward in Vue.js.<br />
            This pattern can be easily extended for usage on multiple pages and multiple components.
            It is possible to dynamically reuse components with different properties and to append
            them multiple times to different DOM elements.
        </p>
        <p>Cheers,<br />Vincent</p>
    </ArticleLayout>
)

export default Post
