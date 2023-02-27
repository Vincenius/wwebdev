import React from "react";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism'

import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import markup from 'react-syntax-highlighter/dist/cjs/languages/prism/markup'
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python'

import * as S from './styled'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('javascript', js)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('markup', markup)
SyntaxHighlighter.registerLanguage('python', python)

const CodeBlock = ({ language, value, label }) => (
    <S.Container hasLabel={!!label}>
        {label && <S.Label>{label}</S.Label> }
        <SyntaxHighlighter language={language} style={prism}>
            {value}
        </SyntaxHighlighter>
    </S.Container>
)

export default CodeBlock;