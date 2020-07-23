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
    const [chipData, setChipData] = useState([])
    const [searchVal, setSearchVal] = useState('') // whats used for search (debounced)
    const [inputVal, setInputVal] = useState('') // whats displayed in input field

    useEffect(() => {
      setSearchValDebounced = _debounce(value => setSearchVal(value), 500)
      setChipData(weeklyTags.map(tag => ({
        label: tag,
        active: false,
      })))
    }, [])

    const { status, data, error } = useQuery(`allWeeklies`, async () => {
      const weeklyPromises = weeklyData.map(async w => {
        const response = await fetch(`/weekly/data/${w.id}.json`)
        const result = await response.json()
        return result.items
      })
      const response = await Promise.all(weeklyPromises)
      return response
    })
    const loadingOrIdle = status === 'loading' || status === 'idle'
    const flatData = data ? data.flat() : []

    const toggleActive = value => {
      const newChipData = chipData.map(data =>
        data.label === value
          ? { label: data.label, active: !data.active }
          : data
      )
      setChipData(newChipData)
    }

    const changeSearchInput = e => {
      const { value } = e.target
      setSearchValDebounced.cancel

      setInputVal(value)
      setSearchValDebounced(value.toLowerCase())
    }

    const activeFilter = chipData
      .filter(d => d.active)
      .map(d => d.label)

    const filteredData = flatData.length && activeFilter.length
      ? flatData
        .filter(d => d.tags.some(tag => activeFilter.includes(tag)))
        .filter(d => searchVal === '' ||
          d.title.toLowerCase().includes(searchVal) ||
          d.description.toLowerCase().includes(searchVal))
      : flatData
        .filter(d => searchVal === '' ||
          d.title.toLowerCase().includes(searchVal) ||
          d.description.toLowerCase().includes(searchVal))

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

              <FilterBar
                chipData={chipData}
                toggleActive={toggleActive}
                loading={loadingOrIdle}
                count={filteredData.length}
              />
          </ui.Container>
          <ui.GridContainer>
            { loadingOrIdle && generateLinkBoxLoading() }
            { !loadingOrIdle && generateWeeklyContent(filteredData) }
            { !loadingOrIdle && filteredData.length === 0 &&
              <p>Couldn't find anything...</p>
            }
          </ui.GridContainer>
        </Layout>
    )
}

export default WeeklyLibrary
