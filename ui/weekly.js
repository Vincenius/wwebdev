import styled from 'styled-components'
import * as ui from '../ui'

export const Container = styled(ui.Container)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 40px;
    margin: 40px auto;
`
export const IntroText = styled(ui.Container)`
    margin: 20px auto 40px;
`