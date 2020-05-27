import React, { useState } from 'react'
import styled from 'styled-components'
import { TextField, Button, CircularProgress } from '@material-ui/core'

import * as ui from '../ui'
import { Layout } from '../components'
import searchFunc from '../utils/search'

const Search = () => {
  const [searchVal, setSearchVal] = useState('')
  const [state, setState] = useState()
  const [result, setResult] = useState()

  const startSearch = async () => {
    setState('loading')
    const result = await searchFunc(searchVal)
    setResult(result)
    setState('done')
  }


  return (
    <Layout
      title="Search"
    >
      <ui.Container>
        <ui.SectionHeadline>Search</ui.SectionHeadline>

        <TextField
          required
          id="filled-required"
          placeholder="Type here..."
          variant="filled"
          value={searchVal}
          onChange={e => setSearchVal(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={startSearch}
        >
          Search
        </Button>

        { state === 'loading' &&
          <div><CircularProgress /></div>
        }

        { state === 'done' && result.length &&
          <div>Result</div>
        }

        { state === 'done' && !result.length &&
          <div>No result</div>
        }
      </ui.Container>
    </Layout>
  )
}

export default Search
