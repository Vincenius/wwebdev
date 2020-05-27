import React from "react";
import PropTypes from "prop-types"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import * as S from './styled'

const CodeBlock = ({ language, value, label }) => (
    <S.Container hasLabel={!!label}>
        {label && <S.Label>{label}</S.Label> }
        <SyntaxHighlighter language={language} style={prism}>
            {value}
        </SyntaxHighlighter>
    </S.Container>
)

export default CodeBlock;