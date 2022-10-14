import styled from 'styled-components'
import { darkGrey, breakpoint, lightBlue } from '../../ui/constants'

export const Container = styled.header`
    position: relative;
    padding: 0 0 24px;
    display: block;
    margin-bottom: 50px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(112.5deg, rgba(232, 232, 232, 0.03) 0%, rgba(232, 232, 232, 0.03) 2%,rgba(231, 231, 231, 0.03) 2%, rgba(231, 231, 231, 0.03) 4%,rgba(231, 231, 231, 0.03) 4%, rgba(231, 231, 231, 0.03) 11%,rgba(2, 2, 2, 0.03) 11%, rgba(2, 2, 2, 0.03) 67%,rgba(231, 231, 231, 0.03) 67%, rgba(231, 231, 231, 0.03) 90%,rgba(111, 111, 111, 0.03) 90%, rgba(111, 111, 111, 0.03) 100%),linear-gradient(157.5deg, rgba(210, 210, 210, 0.03) 0%, rgba(210, 210, 210, 0.03) 17%,rgba(254, 254, 254, 0.03) 17%, rgba(254, 254, 254, 0.03) 18%,rgba(96, 96, 96, 0.03) 18%, rgba(96, 96, 96, 0.03) 44%,rgba(159, 159, 159, 0.03) 44%, rgba(159, 159, 159, 0.03) 70%,rgba(24, 24, 24, 0.03) 70%, rgba(24, 24, 24, 0.03) 82%,rgba(16, 16, 16, 0.03) 82%, rgba(16, 16, 16, 0.03) 100%),linear-gradient(22.5deg, rgba(47, 47, 47, 0.03) 0%, rgba(47, 47, 47, 0.03) 32%,rgba(124, 124, 124, 0.03) 32%, rgba(124, 124, 124, 0.03) 40%,rgba(200, 200, 200, 0.03) 40%, rgba(200, 200, 200, 0.03) 42%,rgba(16, 16, 16, 0.03) 42%, rgba(16, 16, 16, 0.03) 64%,rgba(243, 243, 243, 0.03) 64%, rgba(243, 243, 243, 0.03) 94%,rgba(93, 93, 93, 0.03) 94%, rgba(93, 93, 93, 0.03) 100%),linear-gradient(90deg, #FFF,#FFF);
    }
`

export const Content = styled.div`
    position: relative;
    max-width: 848px;
    width: 100%;
    padding: 0 24px 0;
    margin: 120px auto;
    color: ${darkGrey};
    text-align: center;

    h1 {
        position: relative;
        font-size: 2.5em;
        line-height: 1.5em;
        letter-spacing: -0.2px;
        font-weight: 500;
        margin-top: 48px;
        margin-bottom: 16px;

        &::after {
            content: '';
            display: block;
            width: 1.5em;
            height: 1px;
            position: absolute;
            left: 50%;
            top: 100%;
            background: ${lightBlue};
            transform: translateX(-50%);
        }

        @media (max-width: ${breakpoint}) {
            font-size: 2em;
        }
    }
`
