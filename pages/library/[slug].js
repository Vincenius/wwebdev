import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import Layout from '../../components/Layout'
import LinkBox from '../../components/LinkBox'
import * as ui from '../../ui'

const mapTag = {
  "latest": "All",
  "javascript": "JavaScript",
  "css": "CSS",
  "tool": "Tools",
  "react": "React",
  "article": "Articles",
  "design": "Design",
  "library": "Libraries",
  "other": "Other"
}

const Library = ({ data, slug }) => {
  const [searchVal, setSearchVal] = useState('')

  const elements = data.data.filter(elem => 
    elem.title.toLowerCase().includes(searchVal.toLowerCase()) ||
    elem.description.toLowerCase().includes(searchVal.toLowerCase()) ||
    elem.link.toLowerCase().includes(searchVal.toLowerCase())
  )

  return (
    <Layout
      title={`${mapTag[slug]} Resources Library`}
      description={`A collection ${mapTag[slug]} Resources I curated over the years.`}
    >
      <ui.Container>
        <ui.SectionHeadline>{mapTag[slug]} Resources</ui.SectionHeadline>

        <TextField
          required
          id="filled-required"
          placeholder="Type here..."
          variant="filled"
          value={searchVal}
          onChange={e => setSearchVal(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <ui.GridContainer columns={3} noPadding>
          {elements.map((elem, index) => (
            <LinkBox
              fullHeight
              key={`linkbox-${index}`}
              title={elem.title}
              description={elem.description}
              link={elem.link}
              image={`https://wwebdev-images.s3.eu-central-1.amazonaws.com${elem.image.replace('/content', '').replace('/weekly', '').replace('../assets', '')}`}
              isExternal={true}
            />
          ))}
        </ui.GridContainer>
      </ui.Container>
    </Layout>
  )
}
//getStaticPaths
export async function getStaticPaths() {
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

  // Generate paths for each slug
  const paths = Object.values(tags).map(slug => ({
    params: { slug: slug.toLowerCase() },
  }));

  return {
    paths,
    fallback: false, // or true/ 'blocking' depending on your use case
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug
  let data = { data: [] };
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/library?tag=${slug}`);
    data = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return {
    props: {
      data,
      slug,
    },
  }
}

export default Library
