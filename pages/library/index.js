import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import LinkBox from '../../components/LinkBox'
import * as ui from '../../ui'

const tags = {
  "Latest": "Latest",
  "JavaScript": "JavaScript",
  "CSS": "CSS",
  "Tool": "Tools",
  "React": "React",
  "Article": "Articles",
  "Design": "Design",
  "Library": "Libraries",
  "Other": "Other"
}

const Library = ({ data }) => {
  return (
    <Layout
      title="Web Development Resources Library"
      description="A collection 1900+ Web Development Tools, Articles, Libraries and Resources I curated over the years."
    >
      <ui.Container>
        <ui.SectionHeadline>Web Development Resources Library</ui.SectionHeadline>

        <p>
          A collection 1900+ Web Development Tools, Articles, Libraries and Resources I curated over the years.
        </p>

        {/* todo search bar */}

        { Object.entries(tags).map(([key, value]) => {
          const { elements, tag } = data.data.find(i => i.tag === key)

          return (<div key={key}>
            <ui.Subheadline><Link href={`/library/${value.toLowerCase()}`}>{value}</Link></ui.Subheadline>

            <ui.GridContainer columns={3} noPadding>
              {elements.map((elem, index) => (
                <LinkBox
                  fullHeight
                  key={`linkbox-${tag}-${index}`}
                  title={elem.title}
                  description={elem.description}
                  link={elem.link}
                  image={`https://wwebdev-images.s3.eu-central-1.amazonaws.com${elem.image.replace('/content', '')}`}
                  isExternal={true}
                />
              ))}
            </ui.GridContainer>
            <Link href={`/library/${value.toLowerCase()}`}>View all</Link>
            <br/><br/><br/>
          </div>)
        })}
      </ui.Container>
    </Layout>
  )
}

export async function getStaticProps() {
    const data = await fetch(process.env.NEXT_PUBLIC_HOSTNAME + '/api/library').then(res => res.json())
    return {
        props: {
          data
        },
    }
}

export default Library
