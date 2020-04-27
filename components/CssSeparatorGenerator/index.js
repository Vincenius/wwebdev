import React, { useState } from 'react'
import Link from 'next/link'
import { Card } from '@material-ui/core'
import Controls from './Controls'
import * as S from './styled'
import { SEPARATORS, SEPARATOR_OPTIONS } from './constants'
import { Nav } from '../'

const Generator = props => {
    const defaultSeparator = SEPARATORS.SKEWED
    const [active, setActive] = useState(defaultSeparator)
    const [options, setOptions] = useState(SEPARATOR_OPTIONS[defaultSeparator])

    const useSeparator = val => {
        setActive(val)
        setOptions(SEPARATOR_OPTIONS[val])
    }

    const reversedClass = options.reversed ? 'reverse' : ''
    const TopElement = active === SEPARATORS.SEMI_CIRCLE
        ? S.SemiCircle
        : active === SEPARATORS.SPIKES
            ? S.Spikes
            : active === SEPARATORS.TRIANGLE
                ? S.Triangle
                : active === SEPARATORS.CURVED
                    ? S.Curved
                    : S.Top

    return (
        <React.Fragment>
            <S.Container>
                <Nav isArticle={true} />
                <TopElement options={options} noBgColor={active === SEPARATORS.SKEWED}>
                    <Controls
                        options={options}
                        setOptions={setOptions}
                        active={active}
                    />

                    { active === SEPARATORS.SKEWED &&
                        <S.SkewBg options={options}></S.SkewBg>
                    }
                    { active === SEPARATORS.WAVE &&
                        <S.Wave options={options}></S.Wave>
                    }
                </TopElement>
                <S.Bottom>
                    <S.Row>
                        { Object.entries(SEPARATORS).map(([key, val]) =>
                            <Card
                                className={active === val ? 'active' : ''}
                                key={`${val}-card`}
                                onClick={() => { useSeparator(val) }}
                            >
                                <img src={`/resources/css-separators/${val}.png`} alt={`${val} preview`} />
                            </Card>
                        )}
                    </S.Row>
                </S.Bottom>
            </S.Container>
        </React.Fragment>
    )
}

export default Generator
