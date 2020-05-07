import React from "react";
import PropTypes from "prop-types"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CodeBlock = ({ language, value }) => (
    <SyntaxHighlighter language={language} style={prism}>
        {value}
    </SyntaxHighlighter>
)

export default CodeBlock;