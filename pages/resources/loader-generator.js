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
              <ui.SectionHeadline as="h1">Pure CSS Loader Generator</ui.SectionHeadline>
              <ui.SidebarContainer>
                <ui.SidebarArticle as="article">
                  <p>
                    This CSS generator helps you to create simple CSS spinners.
                    You can choose between four different types of CSS spinners and adjust the settings.
                  </p>
                  <p>
                    Afterward, you can easily copy the CSS code for usage on your website.
                  </p>

                  <LoaderGenerator />

                  <ui.Subheadline>You might also like</ui.Subheadline>
                  <Featured resourceIds={[1, 5, 13]} />
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
