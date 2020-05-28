import React, { useState } from 'react'
import { CircularProgress, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import { ArticlePreview } from '../'
import * as S from './styled'
import searchFunc from '../../utils/search'

const Search = props => {
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
    <div>
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
        onClick={startSearch}
      >
        Search
      </S.SearchButton>

      { state === 'loading' &&
        <S.LoadingContainer><CircularProgress /></S.LoadingContainer>
      }

      { state === 'done' && result.length > 0 &&
        <S.ResultContainer>
            { result.map(r => <ArticlePreview
              key={`article-${r.id}`}
              date={r.date}
              updatedAt={r.updatedAt}
              headline={r.headline || `Weekly #${r.id}`}
              description={r.description}
              link={r.link || `/weekly/${r.id}`}
              previewImage={r.previewImage}
          />) }
        </S.ResultContainer>
      }

      { state === 'done' && result.length === 0 &&
        <S.NoResults>
          Couldn't find anything with this keyword.
        </S.NoResults>
      }
    </div>
  )
}

export default Search
