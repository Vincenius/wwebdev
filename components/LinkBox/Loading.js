import React from 'react'
import LazyLoad from 'react-lazy-load'
import Skeleton from '@mui/material/Skeleton'
import ArrowRight from '@mui/icons-material/ArrowRightAlt'
import * as S from './styled'

function LoadingLinkBox() {
    return (
        <S.Container>
            <S.Content>
                <div>
                    <Skeleton variant="rectangular" height={200} />
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
    );
}
export default LoadingLinkBox