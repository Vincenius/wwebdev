import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import { lightBlue, gradient, boxShadow, darkGrey } from '../../ui/constants'

export const Container = styled(Paper)`
    position: relative;
`
export const Content = styled.article`
    position: relative;
    z-index: 1;
    background: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        font-weight: 500;
        color: ${darkGrey};
        margin: 0.25em 0 1em;

        &:hover {
            color: ${lightBlue}
        }
    }

    img {
        width: 100%;
        height: ${props => props.fullHeight ? '100%' : '200px'};
        object-fit: cover;
    }

    a {
        text-decoration: none;
    }

    p {
        line-height: 1.3;
    }
`
export const Description = styled.div`
    padding: 20px;

    p {
        margin-bottom: 0;
    }
`
export const PromoBg = styled.div`
    background: ${gradient};
    box-shadow: ${boxShadow};
    position: absolute;
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    left: -4px;
    top: -4px;
    z-index: 0;
    border-radius: 4px;
`
export const PromoLabel = styled.div`
    position: absolute;
    z-index: 2;
    right:0;
    top: 0;
    background: ${gradient};
    padding: 6px;
    border-bottom-left-radius: 4px;
    color: #fff;
`
export const Visit = styled.a`
    padding: 0 20px 16px;
    display: inline-flex;
    align-items: center;
    line-height: 1;
`