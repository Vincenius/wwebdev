import React, { useState, useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import _debounce from 'lodash/debounce'

import Layout from '../../components/Layout'
import WeeklyTabs from '../../components/WeeklyTabs'
import * as ui from '../../ui'
import { generateWeeklyContent, generateLinkBoxLoading } from '../../content/generator'

const weeklyTags = [
  'React',
  'JavaScript',
  'CSS',
  'Tool',
  'Article',
  'Library',
  'Resource',
  'Generator',
  'Other',
]

let setSearchValDebounced

const WeeklyLibrary = () => {
    const [searchVal, setSearchVal] = useState('') // whats used for search (debounced)
    const [inputVal, setInputVal] = useState('') // whats displayed in input field
    const [page, setPage] = useState(1)
    const [canFetchMore, setCanFetchMore] = useState(true)

    const fetchWeekly = async () => {
      const json = !!searchVal
        ? { search: searchVal, page }
        : { page }

      const stringified = JSON.stringify(json)
      const query = encodeURI(stringified)
      const response = await fetch(`https://vyx7vatlne.execute-api.eu-central-1.amazonaws.com/prod?q=${query}`)
      const elements = await response.json()
      if (elements.length !== 20) {
        setCanFetchMore(false)
      }
      return { elements: elements || [], nextPage: page + 1 }
    }

    useEffect(() => {
      setSearchValDebounced = _debounce(async value => {
        await setPage(1)
        setSearchVal(value)
      }, 500)
    }, [])

    useEffect(() => {
      if (page !== 1) {
        fetchMore()
      }
    }, [page])

    const {
      status,
      data,
      error,
      fetchMore,
      isFetchingMore,
      isFetching,
    } = useInfiniteQuery(
      ['allWeeklies', searchVal],
      fetchWeekly,
      { getFetchMore: (lastGroup, allGroups) => lastGroup.nextPage, }
    )
    const isLoading = status === 'loading' || status === 'idle' || !!isFetchingMore || !!isFetching

    const changeSearchInput = e => {
      const { value } = e.target
      setSearchValDebounced.cancel

      setInputVal(value)
      setSearchValDebounced(value.toLowerCase())
    }

    const loadMore = () => {
      setPage(page + 1)
    }

    const allElements = data ?
      data.reduce((acc, curr) => [...acc, ...curr.elements], [])
      : []

    return (
        <Layout title="Library of previous weekly content">
          <ui.Container>
            <ui.SectionHeadline>Library of previous weekly content</ui.SectionHeadline>
            <WeeklyTabs activeTab={1} />

            <TextField
              required
              id="filled-required"
              placeholder="Search..."
              variant="filled"
              value={inputVal}
              onChange={changeSearchInput}
              style={{ width: '100%', marginTop: '30px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </ui.Container>
          <ui.GridContainer>
            { allElements && allElements.length > 0 && generateWeeklyContent(allElements) }
            { isLoading && generateLinkBoxLoading(4) }
            { !isLoading && allElements.length === 0 &&
              <p>Couldn't find anything...</p>
            }
          </ui.GridContainer>

          { canFetchMore &&
            <ui.Container>
              <Button
                variant="contained"
                color="primary"
                onClick={() => loadMore()}
                disabled={isLoading}
              >
                {!isLoading && 'Load More'}
                {isLoading && 'Loading...'}
              </Button>
            </ui.Container>
          }
        </Layout>
    )
}

export default WeeklyLibrary
