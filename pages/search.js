import React from 'react'
import styled from 'styled-components'
import * as ui from '../ui'
import { Layout, SearchInput } from '../components'


const Search = () => (
  <Layout
    title="Search"
  >
    <ui.Container>
      <ui.SectionHeadline>Search</ui.SectionHeadline>

      <SearchInput />
    </ui.Container>
  </Layout>
)

export default Search
