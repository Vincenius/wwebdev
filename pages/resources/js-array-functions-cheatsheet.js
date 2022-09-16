import React from 'react'
import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'
import * as ui from '../../ui'
import Layout from '../../components/Layout'
import CodeBlock from '../../components/CodeBlock'
import meta from '../../content/resources'

const postId = 8
const postMeta = meta.find(m => m.id === postId)

const HeadlineContainer = styled.div`
  h2 {
    margin-bottom: 0;
    a {
      text-decoration: none;
      &:hover { text-decoration: underline; }
    }
  }
  > span {
    margin-bottom: 2em;
    display: block;
  }
`

const StyledChip = styled(Chip)`
  margin-left: 15px;
  cursor: pointer !important;
  background-color: ${props => props.amount >= 90
    ? props.amount >= 95
      ? '#81c784 !important'
      : '#fff176 !important'
    : '#ef9a9a !important'
  };
`

const arrEntries = `['a', 'b', 'c']
	.entries() // Array Iterator {  }
	.next() // { value: (2) […], done: false }
	.value // Array [ 0, "a" ]`

const flatMapSyntax =
`var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])`

const arrKeys = `['a', 'b', 'c']
	.keys() // Array Iterator {  }
	.next() // { value: 0, done: false }
	.value // 0`

const mapSyntax = `let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])`

const arrValues = `['a', 'b', 'c']
	.values() // Array Iterator {  }
	.next() // { value: "a", done: false }
	.value // "a"`

const arrPop = `const arr = [ 1, 2, 3 ]
arr.pop() // returns: 3 // arr is [ 1, 2 ]`

const arrPush = `const arr = [ 1, 2, 3 ]
arr.push(1) // returns: 4 // arr is [ 1, 2, 3, 4 ]`

const arrShift = `const arr = [ 1, 2, 3 ]
arr.shift() // returns: 1 // arr is [ 2, 3 ]`

const arrSplice = `const arr = [ 1, 2, 3, 4 ]
arr.splice(1, 2, 'a') // returns [ 2, 3 ] // arr is [ 1, "a", 4 ]`

const arrUnshift = `const arr = [ 1, 2, 3 ]
arr.unshift(0, 99) // returns 5 // arr is [ 0, 99, 1, 2, 3 ]`

const ArrFunctionElem = ({ name, amount, link, desc, example, syntax, mdnLink }) =>
  <React.Fragment>
    <HeadlineContainer>
      <h2>
        <a href={mdnLink} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
        <a href={`https://caniuse.com/${link}`} target="_blank" rel="noopener noreferrer">
          <StyledChip label={`> ${amount}%`} amount={amount} />
        </a>
      </h2>
      <span>{desc}</span>
    </HeadlineContainer>
    <CodeBlock language="javascript" value={example} label="example" />
    <CodeBlock language="javascript" value={syntax} label="syntax" />
  </React.Fragment>


const Post = () => (
    <Layout
        isArticle={true}
        title={postMeta.headline}
        date={postMeta.date}
        updatedAt={postMeta.updatedAt}
        link={`https://wweb.dev${postMeta.link}`}
        description={postMeta.description}
        image={postMeta.previewImage}
    >
        <ui.ArticleContainer as="article">
          <ArrFunctionElem
            name="concat()"
            amount={96}
            link="#feat=mdn-javascript_builtins_array_concat"
            desc="merge two or more arrays"
            example="[ 1, 2 ].concat([5], [7, 9]) // [ 1, 2, 5, 7, 9 ]"
            syntax="const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"
          />

          <ArrFunctionElem
            name="copyWithin()"
            amount={92}
            link="#feat=mdn-javascript_builtins_array_copywithin"
            desc="copies part of array to another location"
            example="[ 1, 2, 3, 4, 5 ].copyWithin(0,2)  // [ 3, 4, 5, 4, 5 ]"
            syntax="arr.copyWithin(target[, start[, end]])"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"
          />

          <ArrFunctionElem
            name="entries()"
            amount={94}
            link="#feat=object-entries"
            desc="Array Iterator with key/value pairs for each index"
            example={arrEntries}
            syntax="arr.entries()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries"
          />

          <ArrFunctionElem
            name="every()"
            amount={95}
            link="#feat=mdn-javascript_builtins_array_every"
            desc="tests if all elements in the array pass the test"
            example="[1, 30, 40].every(val => val > 0) // true"
            syntax="arr.every(callback(element[, index[, array]])[, thisArg])"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"
          />

          <ArrFunctionElem
            name="fill()"
            amount={92}
            link="#feat=mdn-javascript_builtins_array_fill"
            desc="changes elements in an array to a static value"
            example={`[1, 2, 3, 4].fill('x', 1, 3) // [ 1, "x", "x", 4 ]`}
            syntax="arr.fill(value[, start[, end]])"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"
          />

          <ArrFunctionElem
            name="filter()"
            amount={95}
            link="#feat=mdn-javascript_builtins_array_filter"
            desc="creates new array with elements that pass test"
            example="[1, 10, 5, 6].filter(val => val > 5) // [ 10, 6 ]"
            syntax="let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
          />

          <ArrFunctionElem
            name="find()"
            amount={95}
            link="#feat=array-find"
            desc="returns the value of the first element, that matches test"
            example="[1, 10, 5, 6].find(val => val > 5) // 10"
            syntax="arr.find(callback(element[, index[, array]])[, thisArg])"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
          />

          <ArrFunctionElem
            name="findIndex()"
            amount={94}
            link="#feat=es6"
            desc="returns index of the first element, that matches test"
            example="[1, 4, 5, 6].findIndex(val => val > 5) // 3"
            syntax="arr.findIndex(callback( element[, index[, array]] )[, thisArg])"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"
          />

          <ArrFunctionElem
            name="flat()"
            amount={87}
            link="#feat=mdn-javascript_builtins_array_flat"
            desc="creates a new array with sub-array elements flattened by specified depth."
            example="[1, [2, [3, [4]]]].flat(2) // [ 1, 2, 3, [4] ]"
            syntax="const new_array = arr.flat([depth]);"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"
          />

          <ArrFunctionElem
            name="flatMap()"
            amount={87}
            link="#feat=mdn-javascript_builtins_array_flatmap"
            desc="creates a new array with sub-array elements flattened by specified depth."
            example="[[2], [4], [6], [8]].flatMap(val => val/2) // [ 1, 2, 3, 4 ]"
            syntax={flatMapSyntax}
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap"
          />

          <ArrFunctionElem
            name="forEach()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
            amount={95}
            link="#feat=mdn-javascript_builtins_array_foreach"
            desc="executes provided function once for each array element"
            example="[ 1, 2, 3 ].forEach(val => console.log(val)) // 1 // 2 // 3"
            syntax="arr.forEach(callback(currentValue [, index [, array]])[, thisArg])"
          />

          <ArrFunctionElem
            name="includes()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
            amount={95}
            link="#feat=array-includes"
            desc="determines if array includes a certain value"
            example="[ 1, 2, 3 ].includes(3) // true"
            syntax="arr.includes(valueToFind[, fromIndex])"
          />

          <ArrFunctionElem
            name="indexOf()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"
            amount={95}
            link="#feat=mdn-javascript_builtins_array_indexof"
            desc="returns the first index at which element can be found"
            example="[ 1, 2, 3 ].indexOf(3) // 2"
            syntax="arr.indexOf(searchElement[, fromIndex])"
          />

          <ArrFunctionElem
            name="join()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
            amount={96}
            link="#feat=mdn-javascript_builtins_array_join"
            desc="returns string by concatenating all elements in array"
            example='[ "x", "y", "z" ].join(" - ") // "x - y - z"'
            syntax="arr.join([separator])"
          />

          <ArrFunctionElem
            name="keys()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys"
            amount={93}
            link="#feat=mdn-javascript_builtins_array_keys"
            desc="returns Array Iterator that contains keys for each index"
            example={arrKeys}
            syntax="arr.keys()"
          />

          <ArrFunctionElem
            name="lastIndexOf()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf"
            amount={95}
            link="#feat=mdn-javascript_builtins_array_lastindexof"
            desc="returns last index at which given element can be found"
            example="[ 1, 2, 3, 1, 0].lastIndexOf(1) // 3"
            syntax="arr.lastIndexOf(searchElement[, fromIndex])"
          />

          <ArrFunctionElem
            name="map()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
            amount={95}
            link="#feat=mdn-javascript_builtins_array_map"
            desc="creates new array with results of provided function"
            example="[ 2, 3, 4 ].map(val => val * 2) // [ 4, 6, 8 ]"
            syntax={mapSyntax}
          />

          <ArrFunctionElem
            name="pop()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"
            amount={96}
            link="#feat=mdn-javascript_builtins_array_pop"
            desc="removes last element from array and returns that element"
            example={arrPop}
            syntax="arr.pop()"
          />

          <ArrFunctionElem
            name="push()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"
            amount={96}
            link="#feat=mdn-javascript_builtins_array_push"
            desc="adds one or more elements to end of array and returns new length"
            example={arrPush}
            syntax="arr.push(element1[, ...[, elementN]])"
          />

          <ArrFunctionElem
            name="reduce()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"
            amount={95}
            link="#feat=mdn-javascript_builtins_array_reduce"
            desc="executes a reducer function, resulting in single output value"
            example={`[ 'a', 'b', 'c' ].reduce((acc, curr) => acc + curr, 'd') // "dabc"`}
            syntax="arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])"
          />

          <ArrFunctionElem
            name="reduceRight()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight"
            amount={95}
            link="#feat=mdn-javascript_builtins_array_reduceright"
            desc="executes a reducer function from right to left, resulting in single output value"
            example={`[ 'a', 'b', 'c' ].reduceRight((acc, curr) => acc + curr, 'd') // "dcba"`}
            syntax="arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])"
          />

          <ArrFunctionElem
            name="reverse()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse"
            amount={96}
            link="#feat=mdn-javascript_builtins_array_reverse"
            desc="reverses an array"
            example="[ 1, 2, 3 ].reverse() // [ 3, 2, 1 ]"
            syntax="arr.reverse()"
          />

          <ArrFunctionElem
            name="shift()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift"
            amount={96}
            link="#feat=mdn-javascript_builtins_array_shift"
            desc="removes the first element from array and returns that element"
            example={arrShift}
            syntax="arr.shift()"
          />

          <ArrFunctionElem
            name="slice()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
            amount={96}
            link="#feat=mdn-javascript_builtins_array_slice"
            desc="returns a copy of part of array, while original array is not modified"
            example="[ 1, 2, 3, 4 ].slice(1, 3) // [ 2, 3 ]"
            syntax="arr.slice([begin[, end]])"
          />

          <ArrFunctionElem
            name="some()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some"
            amount={95}
            link="#feat=mdn-javascript_builtins_array_some"
            desc="tests whether at least one element in array passes the test"
            example="[ 1, 2, 3, 4 ].some(val => val > 3) // true"
            syntax="arr.some(callback(element[, index[, array]])[, thisArg])"
          />

          <ArrFunctionElem
            name="sort()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
            amount={96}
            link="#feat=mdn-javascript_builtins_array_sort"
            desc="sorts the elements of array in place"
            example="[ 1, 2, 3, 4 ].sort((a, b) => b - a) // [ 4, 3, 2, 1 ]"
            syntax="arr.sort([compareFunction])"
          />

          <ArrFunctionElem
            name="splice()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"
            amount={96}
            link="#feat=mdn-javascript_builtins_array_splice"
            desc="changes contents of array by removing, replacing and/or adding elements"
            example={arrSplice}
            syntax="let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])"
          />

          <ArrFunctionElem
            name="toLocaleString()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString"
            amount={95}
            link="#feat=mdn-javascript_builtins_array_tolocalestring"
            desc="elements are converted to Strings using toLocaleString and are separated by locale-specific String (eg. “,”)"
            example={`[1.1, 'a', new Date()].toLocaleString('EN') // "1.1,a,5/18/2020, 7:58:57 AM"`}
            syntax="arr.toLocaleString([locales[, options]]);"
          />

          <ArrFunctionElem
            name="toString()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString"
            amount={95}
            link="#feat=mdn-javascript_builtins_array_tostring"
            desc="returns a string representing the specified array"
            example={`[ 'a', 2, 3 ].toString() // "a,2,3"`}
            syntax="arr.toString()"
          />

          <ArrFunctionElem
            name="unshift()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift"
            amount={96}
            link="#feat=mdn-javascript_builtins_array_unshift"
            desc="adds one or more elements to beginning of array and returns new length"
            example={arrUnshift}
            syntax="arr.unshift(element1[, ...[, elementN]])"
          />

          <ArrFunctionElem
            name="values()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values"
            amount={91}
            link="#feat=mdn-javascript_builtins_array_values"
            desc="returns Array Iterator object that contains values for each index in array"
            example={arrValues}
            syntax="arr.values()"
          />
        </ui.ArticleContainer>
      </Layout>
)

export default Post