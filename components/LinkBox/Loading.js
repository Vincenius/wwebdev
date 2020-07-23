import React from 'react'
import LazyLoad from 'react-lazy-load'
import Skeleton from '@material-ui/lab/Skeleton'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'
import * as S from './styled'

function LoadingLinkBox() {
    return <S.Container>
        <S.Content>
            <div>
                <Skeleton variant="rect" height={200} />
                <S.Description>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width={140} />
                </S.Description>
            </div>

            <S.Visit>
                <Skeleton variant="text" width={90} />
            </S.Visit>
        </S.Content>
    </S.Container>
}
export default LoadingLinkBox