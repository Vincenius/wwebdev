import React from 'react'
import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'
import * as ui from '../../ui'
import CodeBlock from '../../components/CodeBlock'
import Layout from '../../components/Layout'
import meta from '../../content/resources'

const postId = 10
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

const definePropsExample = `Object.defineProperties({ a: 1, b: 2 }, { a: {
  value: 3,
  writable: true,
}}) // { a: 3, b: 2 }`

const definePropExample = `Object.defineProperty({ a: 1, b: 2 }, 'a', {
  value: 3,
  writable: true
}); // { a: 3, b: 2 }`

const freezeExample = `const obj = { a: 1 }
Object.freeze(obj)
obj.prop = 2 // error in strict mode
console.log(obj.prop) // 1`

const getOwnPropertyDescriptorExample = `const obj = { a: 1 }
Object.getOwnPropertyDescriptor(obj, 'a') // { value: 1, writable: true, enumerable: true, configurable: true }`

const getOwnPropertyDescriptorsExample = `const obj = { a: 1 }
Object.getOwnPropertyDescriptors(obj, 'a') // { a: { value: 1, writable: true, enumerable: true, configurable: true } }`

const getOwnPropertySymbolsExample = `const obj = { a: 1 }
const b = Symbol('b')
obj[b] = 'someSymbol' // obj = { a: 1, Symbol(b): "symbol" }
Object.getOwnPropertySymbols(obj) // [ Symbol(b) ]`

const getPrototypeOfExample = `const proto = { a: 1 }
const obj = Object.create(proto)
obj.b = 2 // obj = { b: 2 }
Object.getPrototypeOf(obj) // { a: 1 }`

const isExample = `const objA = { a: 1 }
const objB = { a: 1 }
Object.is(objA, objA) // true
Object.is(objA, objB) // false
Object.is('a', 'a') // true`

const isExtensibleExample = `const obj = {}
Object.isExtensible(obj) // true
Object.preventExtensions(obj)
Object.isExtensible(obj) // false`

const isFrozenExample = `const obj = {}
Object.isFrozen(obj) // false
Object.freeze(obj)
Object.isFrozen(obj) // true`

const isSealedExample = `const obj = {}
Object.isSealed(obj) // false
Object.seal(obj)
Object.isSealed(obj) // true`

const preventExtensionsExample = `const obj = { a: 1 }
Object.preventExtensions(obj)
Object.defineProperty(obj, 'b', { value: 2 }) // Error: Can't define property "b": Object is not extensible`

const hasOwnPropertyExample = `const obj = { a: 1 }
obj.hasOwnProperty('a') // true
obj.hasOwnProperty('b') // false`

const isPrototypeOfExample = `const proto = { a: 1 }
const obj = Object.create(proto)
proto.isPrototypeOf(obj) // true`

const propertyIsEnumerableExample = `const obj = { a: 1 }
const arr = ['a']
obj.propertyIsEnumerable('a') // true
arr.propertyIsEnumerable(0) // true
arr.propertyIsEnumerable('length') // false`

const toStringExample = `const obj = {}
obj.toString() // "[object Object]"
const arr = ['a', 'b']
arr.toString() // "a,b"`

const sealExample = `const obj = { a: 1 }
Object.seal(obj)
obj.a = 2 // { a: 2 }
obj.b = 3 // error in strict mode
delete obj.a // error in strict mode`

const ObjFunctionElem = ({ name, amount, link, desc, example, syntax, mdnLink }) =>
  <React.Fragment>
    <HeadlineContainer>
      <h2>
        <a href={mdnLink} target="_blank" rel="noopener noreferrer">
          {name}
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
          <ObjFunctionElem
            name="Object.assign()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"
            desc="copies properties from one or more source objects to target object"
            example="Object.assign({ a: 1, b: 2 }, { c: 3 }, { d: 4 }) // { a: 1, b: 2, c: 3, d: 4 }"
            syntax="Object.assign(target, ...sources)"
          />

          <ObjFunctionElem
            name="Object.create()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create"
            desc="creates new object, using an existing object as the prototype"
            example="Object.create({ a: 1 }) // <prototype>: Object { a: 1 }"
            syntax="Object.create(proto, [propertiesObject])"
          />

          <ObjFunctionElem
            name="Object.defineProperties()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties"
            desc="defines new or modifies existing properties"
            syntax="Object.defineProperties(obj, props)"
            example={definePropsExample}
          />

          <ObjFunctionElem
            name="Object.defineProperty()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"
            desc="defines new or modifies existing property"
            syntax="Object.defineProperty(obj, prop, descriptor)"
            example={definePropExample}
          />

          <ObjFunctionElem
            name="Object.entries()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
            desc="returns array of object's [key, value] pairs"
            syntax="Object.entries(obj)"
            example='Object.entries({ a: 1, b: 2 }) // [ ["a", 1], ["b", 2] ]'
          />

          <ObjFunctionElem
            name="Object.freeze()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze"
            desc="freezes an object, which then can no longer be changed"
            syntax="Object.freeze(obj)"
            example={freezeExample}
          />

          <ObjFunctionElem
            name="Object.fromEntries()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries"
            desc="transforms a list of key-value pairs into an object"
            syntax="Object.fromEntries(iterable)"
            example="Object.fromEntries([['a', 1], ['b', 2]]) // { a: 1, b: 2 }"
          />

          <ObjFunctionElem
            name="Object.getOwnPropertyDescriptor()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor"
            desc="returns a property descriptor for an own property"
            syntax="Object.getOwnPropertyDescriptor(obj, prop)"
            example={getOwnPropertyDescriptorExample}
          />

          <ObjFunctionElem
            name="Object.getOwnPropertyDescriptors()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors"
            desc="returns all own property descriptors"
            syntax="Object.getOwnPropertyDescriptor(obj, prop)"
            example={getOwnPropertyDescriptorsExample}
          />

          <ObjFunctionElem
            name="Object.getOwnPropertyNames()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
            desc="returns array of all properties"
            syntax="Object.getOwnPropertyNames(obj)"
            example='Object.getOwnPropertyNames({ a: 1, b: 2 }) // [ "a", "b" ]'
          />

          <ObjFunctionElem
            name="Object.getOwnPropertySymbols()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
            desc="array of all symbol properties"
            syntax="Object.getOwnPropertySymbols(obj)"
            example={getOwnPropertySymbolsExample}
          />

          <ObjFunctionElem
            name="Object.getPrototypeOf()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf"
            desc="returns the prototype"
            syntax="Object.getPrototypeOf(obj)"
            example={getPrototypeOfExample}
          />

          <ObjFunctionElem
            name="Object.is()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is"
            desc="determines whether two values are the same value"
            syntax="Object.is(value1, value2)"
            example={isExample}
          />

          <ObjFunctionElem
            name="Object.isExtensible()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible"
            desc="determines wether an object can have new properties added to it"
            syntax="Object.isExtensible(obj)"
            example={isExtensibleExample}
          />

          <ObjFunctionElem
            name="Object.isFrozen()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen"
            desc="determines if an object is frozen"
            syntax="Object.isFrozen(obj)"
            example={isFrozenExample}
          />

          <ObjFunctionElem
            name="Object.isSealed()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed"
            desc="determines if an object is sealed"
            syntax="Object.isSealed(obj)"
            example={isSealedExample}
          />

          <ObjFunctionElem
            name="Object.keys()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
            desc="returns array of object's enumerable property names"
            syntax="Object.keys(obj)"
            example='Object.keys({ a: 1, b: 2 }) // [ "a", "b" ]'
          />

          <ObjFunctionElem
            name="Object.preventExtensions()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions"
            desc="prevents new properties from being added to an object"
            syntax="Object.preventExtensions(obj)"
            example={preventExtensionsExample}
          />

          <ObjFunctionElem
            name="Object.prototype.hasOwnProperty()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
            desc="returns boolean indicating whether object has the specified property"
            syntax="obj.hasOwnProperty(prop)"
            example={hasOwnPropertyExample}
          />

          <ObjFunctionElem
            name="Object.prototype.isPrototypeOf()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf"
            desc="checks if object exists in another object's prototype chain"
            syntax="prototypeObj.isPrototypeOf(object)"
            example={isPrototypeOfExample}
          />

          <ObjFunctionElem
            name="Object.prototype.propertyIsEnumerable()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
            desc="checks whether the specified property is enumerable and is the object's own property"
            syntax="obj.propertyIsEnumerable(prop)"
            example={propertyIsEnumerableExample}
          />

          <ObjFunctionElem
            name="Object.prototype.toString()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString"
            desc="returns a string representing the object"
            syntax="obj.toString()"
            example={toStringExample}
          />

          <ObjFunctionElem
            name="Object.seal()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal"
            desc="prevents new properties from being added and marks all existing properties as non-configurable"
            syntax="Object.seal(obj)"
            example={sealExample}
          />

          <ObjFunctionElem
            name="Object.values()"
            mdnLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values"
            desc="returns array of object's own enumerable property values"
            syntax="Object.values(obj)"
            example={`Object.values({ a: 1, b: 'a'}) // [ 1, "a" ]`}
          />
        </ui.ArticleContainer>
      </Layout>
)

export default Post