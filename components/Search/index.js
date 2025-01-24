import React, { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import LinkBox from '../LinkBox'
import searchFunc from '../../utils/search'
import { generateLinkBoxLoading } from '../../content/generator'
import * as ui from '../../ui'
import * as S from './styled'

const Search = props => {
  const [searchVal, setSearchVal] = useState('')
  const [state, setState] = useState()
  const [result, setResult] = useState([])
  const [options, setOptions] = useState({ wweb_dev: true, library: false, page: 1 })

  const handleCheckboxChange = e => {
    setOptions({ ...options, [e.target.name]: e.target.checked })
  }

  const startSearch = async newSearch => {
    setState('loading')
    const useOptions = { ...options, page: newSearch ? 1 : options.page }
    const { result: newResult, nextPage } = await searchFunc(searchVal, useOptions)
    if (newSearch) {
      setResult(newResult)
    } else {
      setResult(oldResults => [...oldResults, ...newResult])
    }
    setOptions({ ...options, page: nextPage })
    setState('done')
  }

  return (
    <div>
      <ui.Container>
        <ui.SectionHeadline>Search</ui.SectionHeadline>
        <S.SearchInput
          required
          id="filled-required"
          placeholder="Type here..."
          variant="filled"
          value={searchVal}
          onChange={e => setSearchVal(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <S.SearchButton
          variant="contained"
          color="primary"
          onClick={() => startSearch(true)}
        >
          Search
        </S.SearchButton>

        {/* <S.CheckboxContainer>
          <FormControlLabel
            control={<Checkbox color="primary" name="wweb_dev" onChange={handleCheckboxChange} checked={options.wweb_dev} />}
            label="wweb.dev content" />
          <FormControlLabel
            control={<Checkbox color="primary" name="library" onChange={handleCheckboxChange} checked={options.library} />}
            label="Library content" />
        </S.CheckboxContainer> */}
      </ui.Container>

      <ui.GridContainer>
        { result.length > 0 && result.map(r => <LinkBox
            key={`linkbox-${r.link}`}
            title={r.headline}
            description={r.description}
            link={r.link}
            image={r.shareImage}
            sponsored={r.sponsored}
        /> ) }
        { state === 'loading' && generateLinkBoxLoading(4) }
        { state === 'done' && result.length === 0 &&
          <p>Couldn't find anything...</p>
        }
      </ui.GridContainer>

      { options.page && options.page > 1 && <ui.Container>
        <Button
          variant="contained"
          color="primary"
          onClick={() => startSearch()}
          disabled={state === 'loading'}
        >
          Load More
        </Button>
      </ui.Container> }
    </div>
  )
}

export default Search
