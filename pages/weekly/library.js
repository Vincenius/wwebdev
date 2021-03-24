import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import _debounce from 'lodash/debounce'

import Layout from '../../components/Layout'
import WeeklyTabs from '../../components/WeeklyTabs'
import FilterBar from '../../components/FilterBar'
import * as ui from '../../ui'
import { weeklyData } from '../../content/weekly'
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
    const fetchWeekly = async (page = 0, search) => {
      const json = search
        ? { search }
        : { weekly: '1' } // TODO fetch all and paginate
      console.log(search)
      const stringified = JSON.stringify(json)
      const query = encodeURI(stringified)
      const response = await fetch(`https://vyx7vatlne.execute-api.eu-central-1.amazonaws.com/prod?q=${query}`)
      return response.json()
    }

    useEffect(() => {
      setSearchValDebounced = _debounce(value => setSearchVal(value), 500)
    }, [])

    const { status, data, error } = useQuery(['allWeeklies', searchVal], () => fetchWeekly(0, searchVal), { keepPreviousData: false })
    const loadingOrIdle = status === 'loading' || status === 'idle'

    const changeSearchInput = e => {
      const { value } = e.target
      setSearchValDebounced.cancel

      setInputVal(value)
      setSearchValDebounced(value.toLowerCase())
    }

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
            { loadingOrIdle && generateLinkBoxLoading() }
            { !loadingOrIdle && generateWeeklyContent(data) }
            { !loadingOrIdle && data.length === 0 &&
              <p>Couldn't find anything...</p>
            }
          </ui.GridContainer>
        </Layout>
    )
}

export default WeeklyLibrary
