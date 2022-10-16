import React from 'react'
import Layout from '../../components/Layout'
import NavigationGenerator from '../../components/NavigationGenerator'
import meta from '../../content/resources'

const postMeta = meta.find(m => m.id === 9)

const NavigationResource = () => {
  return (
    <Layout
      isArticle={true}
      hideHeader={true}
      title={postMeta.headline}
      date={postMeta.date}
      updatedAt={postMeta.updatedAt}
      link={`https://wweb.dev${postMeta.link}`}
      description={postMeta.description}
      image={postMeta.previewImage}
    >
      <NavigationGenerator />

      <br /> <br /> <br />
    </Layout>
  )
}

export default NavigationResource
