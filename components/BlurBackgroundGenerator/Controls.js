import React, { useState } from 'react'
import Slider from '@mui/material/Slider'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowRight from '@mui/icons-material/ArrowRight'
import ArrowLeft from '@mui/icons-material/ArrowLeft'
import * as ui from '../../ui'
import * as S from './styledControls'

const generateCircle = () => {
    const left = Math.floor(Math.random() * 100)
    const top = Math.floor(Math.random() * 100)
    const size = Math.floor(Math.random() * 100)
    const color1 = `#${Math.floor(Math.random()*16777215).toString(16)}`
    const color2 = `#${Math.floor(Math.random()*16777215).toString(16)}`
    return { color: [color1, color2], size, top, left }
}

const Controls = ({ htmlCode = '', cssCode = '', values, setValues }) => {
    const [showControl, toggleControl] = useState(true)
    const [activeCircle, setActiveCircle] = useState(0)
    const [showCode, toggleCode] = useState(false);
    const [copiedCode, showCopied] = useState('')

    let htmlTextArea = React.createRef()
    let cssTextArea = React.createRef()

    const copyToClipboard = (textArea, areaName) => {
        textArea.current.select()
        document.execCommand('copy')
        showCopied(areaName)

        setTimeout( () => {
            showCopied('')
        }, 2000);
    }

    return (
        <>
            <ui.Subheadline as="h2">Configuration</ui.Subheadline>

            <Accordion defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="blur background configuration"
                >
                    <b>Settings</b>
                </AccordionSummary>
                <AccordionDetails>
                    <S.Container>
                        <label>Background gradient</label>
                        <input
                            type="color"
                            value={values.bgColor[0]}
                            onChange={e => {
                                setValues({ ...values, bgColor: [e.target.value, values.bgColor[1]] })
                            }}
                        />
                        <input
                            type="color"
                            value={values.bgColor[1]}
                            onChange={e => {
                                setValues({ ...values, bgColor: [values.bgColor[0], e.target.value] })
                            }}
                        />

                        <label>Circle Count</label>
                        <Slider
                            aria-labelledby={`circle count`}
                            valueLabelDisplay="auto"
                            step={1}
                            min={1}
                            max={10}
                            value={values.circles.length}
                            onChange={(event, value) => {
                                const newCircles = [...values.circles]

                                if (value < values.circles.length) {
                                    if (activeCircle >= value) {
                                        setActiveCircle(activeCircle - 1)
                                    }
                                    newCircles.length = value
                                } else if (value > values.circles.length) {
                                    while (value > newCircles.length) {
                                        const newCircle = generateCircle()
                                        newCircles.push(newCircle)
                                    }
                                }

                                setValues({ ...values, circles: newCircles })
                            }}
                        />

                        <S.CircleContainer>
                            <S.NavButton
                                color="primary"
                                aria-label="prev circle"
                                variant="contained"
                                disabled={activeCircle === 0}
                                onClick={() => setActiveCircle(activeCircle-1)}
                            >
                                <ArrowLeft />
                            </S.NavButton>
                            <S.CircleControls>
                                <label>#{activeCircle+1} Circle</label>
                                <input
                                    type="color"
                                    value={values.circles[activeCircle].color[0]}
                                    onChange={e => {
                                        const newCircles = [...values.circles]
                                        newCircles[activeCircle].color[0] = e.target.value
                                        setValues({ ...values, circles: newCircles })
                                    }}
                                />
                                <input
                                    type="color"
                                    value={values.circles[activeCircle].color[1]}
                                    onChange={e => {
                                        const newCircles = [...values.circles]
                                        newCircles[activeCircle].color[1] = e.target.value
                                        setValues({ ...values, circles: newCircles })
                                    }}
                                />
                                <label>Top Position</label>
                                <Slider
                                    aria-labelledby={`circle ${activeCircle+1} top position`}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={0}
                                    max={100}
                                    value={values.circles[activeCircle].top}
                                    onChange={(event, value) => {
                                        const newCircles = [...values.circles]
                                        newCircles[activeCircle].top = value
                                        setValues({ ...values, circles: newCircles })
                                    }}
                                />
                                <label>Left Position</label>
                                <Slider
                                    aria-labelledby={`circle ${activeCircle+1} top position`}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={0}
                                    max={100}
                                    value={values.circles[activeCircle].left}
                                    onChange={(event, value) => {
                                        const newCircles = [...values.circles]
                                        newCircles[activeCircle].left = value
                                        setValues({ ...values, circles: newCircles })
                                    }}
                                />
                                <label>Size</label>
                                <Slider
                                    aria-labelledby={`circle ${activeCircle+1} size`}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={0}
                                    max={150}
                                    value={values.circles[activeCircle].size}
                                    onChange={(event, value) => {
                                        const newCircles = [...values.circles]
                                        newCircles[activeCircle].size = value
                                        setValues({ ...values, circles: newCircles })
                                    }}
                                />
                            </S.CircleControls>
                            <S.NavButton
                                color="primary"
                                aria-label="next circle"
                                variant="contained"
                                onClick={() => setActiveCircle(activeCircle+1)}
                                disabled={activeCircle+1 === values.circles.length}
                            >
                                <ArrowRight />
                            </S.NavButton>
                        </S.CircleContainer>
                    </S.Container>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="blur background configuration"
                >
                    <b>Code</b>
                </AccordionSummary>
                <AccordionDetails>
                    <S.Container>
                        <S.Header noMargin={true}>
                            <span>HTML</span>
                            <div>
                                <S.Copied visible={copiedCode === 'html'}>copied</S.Copied>
                                <FileCopyIcon onClick={() => copyToClipboard(htmlTextArea, 'html')} />
                            </div>
                        </S.Header>

                        <S.CodeArea
                            value={htmlCode}
                            rowsMax={5}
                            marginBottom={true}
                            ref={htmlTextArea}
                        />

                        <S.Header noMargin={true}>
                            <span>CSS</span>
                            <div>
                                <S.Copied visible={copiedCode === 'css'}>copied</S.Copied>
                                <FileCopyIcon onClick={() => copyToClipboard(cssTextArea, 'css')} />
                            </div>
                        </S.Header>
                        <S.CodeArea
                            rowsMax={5}
                            value={cssCode}
                            ref={cssTextArea}
                        />
                    </S.Container>
                </AccordionDetails>
            </Accordion>
        </>
        // <S.Controls>
        //     <S.Container>
        //         <S.Header noMargin={!showControl}>
        //             <h3>Controls</h3>
        //             <a
        //                 onClick={e => {
        //                     e.preventDefault()
        //                     toggleControl(!showControl)}
        //                 }
        //                 href="#"
        //             >
        //                 { showControl && 'hide' }
        //                 { !showControl && 'show' }
        //             </a>
        //         </S.Header>

        //         { showControl &&  }
        //     </S.Container>
        //     <S.Container>
        //         <S.Header noMargin={!showCode}>
        //             <h3>Code</h3>
        //             <a
        //                 onClick={e => {
        //                     e.preventDefault()
        //                     toggleCode(!showCode)}
        //                 }
        //                 href="#"
        //             >
        //                 { showCode && 'hide' }
        //                 { !showCode && 'show' }
        //             </a>
        //         </S.Header>

        //         { showCode && <div>
        
        //         </div>}
        //     </S.Container>
        // </S.Controls>
    )
}

export default Controls
