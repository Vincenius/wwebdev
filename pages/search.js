import React, { useState } from 'react'
import * as ui from '../ui'
import { Layout, Search } from '../components'

const SearchPage = () => {
  return (
    <Layout
      title="Search"
    >
      <ui.Container>
        <ui.SectionHeadline>Search</ui.SectionHeadline>

        <Search />
      </ui.Container>
    </Layout>
  )
}

export default SearchPage
