import React, { useState } from 'react'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import * as S from './styles/animatedCssBgControls'

const Controls = ({ children, source, credit, htmlCode, cssCode, changeBg, activeBg }) => {
    const [showControl, toggleControl] = useState(true);
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
        <div>
            <S.Container>
                <S.Nav>
                    <a
                        onClick={() => changeBg(0)}
                        className={activeBg === 0 ? 'active' : ''}
                    >
                        Demo 1
                    </a>
                    <a
                        onClick={() => changeBg(1)}
                        className={activeBg === 1 ? 'active' : ''}
                    >
                        Demo 2
                    </a>
                    <a
                        onClick={() => changeBg(2)}
                        className={activeBg === 2 ? 'active' : ''}
                    >
                        Demo 3
                    </a>
                </S.Nav>
                <S.Header noMargin={!showControl}>
                    <h3>Controls</h3>
                    <a
                        onClick={e => {
                            e.preventDefault()
                            toggleControl(!showControl)}
                        }
                        href="#"
                    >
                        { showControl && 'hide' }
                        { !showControl && 'show' }
                    </a>
                </S.Header>

                { showControl && children }
                { showControl && <S.Source>
                    <span>
                        Credit: {credit}
                    </span>
                    <a href={source} target="_blank" rel="noopener">
                        Source
                    </a>
                </S.Source> }

            </S.Container>
            <S.Container>
                <S.Header noMargin={!showCode}>
                    <h3>Code</h3>
                    <a
                        onClick={e => {
                            e.preventDefault()
                            toggleCode(!showCode)}
                        }
                        href="#"
                    >
                        { showCode && 'hide' }
                        { !showCode && 'show' }
                    </a>
                </S.Header>

                { showCode && <div>
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
                </div>}
            </S.Container>
        </div>

    )
}

export default Controls
