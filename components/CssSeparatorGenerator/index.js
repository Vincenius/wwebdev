import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import Controls from './Controls'
import * as S from './styled'
import * as ui from '../../ui/'
import { SEPARATORS, SEPARATOR_OPTIONS } from './constants'
import BrowserMockup from '../BrowserMockup'
import Ad from '../Ads/Ad'
import Featured from '../Featured'
import NewsletterLink from '../NewsletterLink'

const Generator = props => {
    const defaultSeparator = SEPARATORS.SKEWED
    const [active, setActive] = useState(defaultSeparator)
    const [options, setOptions] = useState(SEPARATOR_OPTIONS[defaultSeparator])

    const handleCheck = e => {
        setOptions({ ...options, [e.target.name]: e.target.checked });
    }

    const handleChange = (key, newVal) => {
        setOptions({ ...options, [key]: {
            ...options[key],
            value: newVal,
        } });
    }

    const useSeparator = val => {
        setActive(val)
        setOptions(SEPARATOR_OPTIONS[val])
    }

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
        <ui.Container>
            <ui.SectionHeadline as="h1">CSS Section Separator Generator</ui.SectionHeadline>
            <S.SidebarContainer>
                <ui.SidebarArticle as="article">
                    <BrowserMockup maxWidth={730}>
                        <TopElement options={options} noBgColor={active === SEPARATORS.SKEWED}>
                            { active === SEPARATORS.SKEWED &&
                                <S.SkewBg options={options}></S.SkewBg>
                            }
                            { active === SEPARATORS.WAVE &&
                                <S.Wave options={options}></S.Wave>
                            }
                        </TopElement>
                        <S.ControlContainer>
                            <h3>Controls</h3>
                            { options.reversed !== undefined &&
                                <S.FormControlLabel
                                    label="Reversed"
                                    control={
                                        <S.Checkbox
                                            checked={options.reversed}
                                            onChange={handleCheck}
                                            name="reversed"
                                            color="primary"
                                        />
                                    }
                                />
                            }
                            { Object.entries(options).map(([key, option]) =>
                                key !== 'reversed' && <S.SliderContainer key={`${key}-slider`}>
                                    <label>{key}</label>
                                    <S.Slider
                                        value={option.value}
                                        onChange={(e, newVal) => handleChange(key, newVal)}
                                        aria-labelledby={`${key}-slider`}
                                        min={option.min}
                                        max={option.max}
                                        step={option.step}
                                        valueLabelDisplay="auto"
                                        size="small"
                                    />
                                </S.SliderContainer>
                            )}
                        </S.ControlContainer>
                    </BrowserMockup>

                    <ui.Subheadline>Get the separator code</ui.Subheadline>
                    <Controls
                        options={options}
                        setOptions={setOptions}
                        active={active}
                    />

                    <ui.Subheadline>CSS section divider description</ui.Subheadline>
                    <p>
                        With this CSS Section Separator Generator, you can choose between 6 different dividers.
                        Each of them can be customized by using the controls in the preview field.
                    </p>
                    <p>
                        The tool includes a skewed divider, a semi-circle divider, a wave divider, a spikes divider, a triangle divider and a curved divider.
                        Most of these dividers are pure CSS and using the ::before and ::after pseudo-elements. Some need an additional HTML element.
                    </p>
                    <p>
                        If you enjoyed this tool, subscribe to my newsletter below to get notified when I release something new.
                    </p>

                    <ui.Subheadline>You might also like</ui.Subheadline>
                    <Featured resourceIds={[1, 4, 13]} />
                </ui.SidebarArticle>
                <ui.Sidebar>
                    <Ad />
                    <ui.Subheadline noMarginBottom>Choose a section divider</ui.Subheadline>
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
                    <ui.MobileHide><br/><NewsletterLink /></ui.MobileHide>
                </ui.Sidebar>
            </S.SidebarContainer>
        </ui.Container>
    )
}

export default Generator
