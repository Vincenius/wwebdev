import React from 'react'
import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'
import * as ui from '../../ui'
import { CodeBlock, Layout, Comments, PrevNext } from '../../components'
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

const definePropsExample = `Object.defineProperties({ a: 1 }, { a: {
  value: 2,
  writable: true,
}}) // { a: 2 }`

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
        </ui.ArticleContainer>
      </Layout>
)

export default Post