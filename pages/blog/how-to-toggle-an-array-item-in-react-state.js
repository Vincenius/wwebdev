import React from 'react'

import * as ui from '../../ui'
import CodeBlock from '../../components/CodeBlock'
import ArticleLayout from '../../components/ArticleLayout'

const snippet1 = `function toggleArrayItem(arr, item) {
    arr.includes(item)
        ? arr.filter(i => i !== item) // remove item
        : [ ...arr, item ]; // add item
}`

const snippet2 = `onToggleArray = item => {
    this.setState(state => {
        const arr = state.arr.includes(item)
            ? arr.filter(i => i !== item) // remove item
            : [ ...arr, item ]; // add item
        return {
            arr,
        };
    });
}`

const Post = () => (
    <ArticleLayout id={2}>
        <p>In this short article I will demonstrate how to write a function to toggle array items with Javascript and inside of React state.</p>
        <p>First of all let’s have a look how to toggle an array item with Javascript (ES6):</p>

        <CodeBlock
            language="javascript"
            value={snippet1}
        />

        <p>This function will get an array and the item to be toggled. The includes checks if the array already has the item. If yes then it uses  filter to remove it. If not it uses the spread operator to create a new array containing the values of the provided array plus the new item.</p>
        <p>Now let’s use this function with React State:</p>

        <CodeBlock
            language="javascript"
            value={snippet2}
        />

        <p>Since it’s not allowed to mutate the state directly, it’s not possible to just push an item to an array. So we use our function to create a new array based on the previous state. Then we’ll add this new array to the state.</p>
    </ArticleLayout>
)

export default Post
