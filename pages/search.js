import React, { useState } from 'react'
import * as ui from '../ui'
import Search from '../components/Search'
import Layout from '../components/Layout'

const SearchPage = () => {
  return (
    <Layout
      title="Search"
    >
      <Search />
    </Layout>
  )
}

export default SearchPage
