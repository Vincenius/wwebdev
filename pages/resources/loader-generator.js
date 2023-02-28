import React from 'react'
import Ad from '../../components/Ads/Ad'
import Featured from '../../components/Featured'
import NewsletterLink from '../../components/NewsletterLink'
import SponsorNinjaWidget from '../../components/SponsorNinja'
import LoaderGenerator from '../../components/LoaderGenerator'
import Layout from '../../components/Layout'
import meta from '../../content/resources'
import * as ui from '../../ui/'

const postMeta = meta.find(m => m.id === 15)

const Demo = () => {
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
          <ui.Container>
              <ui.SectionHeadline as="h1">CSS Loader Generator</ui.SectionHeadline>
              <ui.SidebarContainer>
                <ui.SidebarArticle as="article">
                  <p>
                    Adjust the options below to customize your CSS loading animation.
                  </p>

                  <LoaderGenerator />

                  {/* <ui.Subheadline>some sub-headline</ui.Subheadline>
                  <p>
                    some additional info
                  </p> */}

                  <ui.Subheadline>You might also like</ui.Subheadline>
                  <Featured resourceIds={[1, 4, 13]} />
                </ui.SidebarArticle>
                <ui.Sidebar>
                  <Ad />
                  <SponsorNinjaWidget />
                  <ui.MobileHide><br/><NewsletterLink /></ui.MobileHide>
                </ui.Sidebar>
              </ui.SidebarContainer>
          </ui.Container>
        </Layout>
    )
}

export default Demo
