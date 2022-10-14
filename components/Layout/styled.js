import styled from 'styled-components'
import { greyBlue, boxShadow } from '../../ui/constants'

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    box-shadow: ${boxShadow};
    background: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;

    @media (min-width: 1441px) {
        margin: 20px auto;
        border-radius: 10px;
    }
`
export const Time = styled.time`
    font-size: 1rem;
    line-height: 30px;
    margin-right: 3px;
`
export const SDate = styled.p`
    margin-bottom: 0;
    color: ${greyBlue};
`
export const Updated = styled(SDate)`
    margin: 0 auto;
    font-style: italic;
`