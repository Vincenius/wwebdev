import React, { useState } from 'react'
import * as S from './styled'

const FilterBar = ({ chipData, toggleActive, loading, count = 0 }) => {

  return (
    <S.Container>
      <S.FilterLabel>
        { loading ? '' : <span>[{count}] </span> }
        Filter by:
      </S.FilterLabel>
      { loading && <S.LoadingChip variant="rect" width={160} height={32} />}
      { !loading && chipData.map(data => {
        return (
          <S.FilterChip
            key={data.label}
            label={data.label}
            color={data.active ? 'primary' : 'default'}
            clickable
            onClick={() => toggleActive(data.label)}
          />
        );
      })}
    </S.Container>
  )
}

export default FilterBar
