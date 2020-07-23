import React, { useState } from 'react'
import LazyLoad from 'react-lazy-load'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'
import Skeleton from '@material-ui/lab/Skeleton'
import * as S from './styled'

function LinkBox({ title, description, image, link, selfPromoted }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    return <S.Container>
        { selfPromoted && <div>
            <S.PromoBg></S.PromoBg>
            <S.PromoLabel>{selfPromoted}</S.PromoLabel>
        </div> }
        <S.Content>
            <div>
                { image && <a href={link} target="_blank" rel="noopener">
                    { !imageLoaded && <Skeleton variant="rect" height={203} /> }
                    <LazyLoad offsetVertical={1000} onContentVisible={() => setImageLoaded(true)}>
                        <img src={image} alt={title} />
                    </LazyLoad>
                </a> }
                <S.Description>
                    <a href={link} target="_blank" rel="noopener">
                        <h2>{title}</h2>
                    </a>
                    <p>{description}</p>
                </S.Description>
            </div>

            <S.Visit href={link} target="_blank" rel="noopener">
                visit <ArrowRight width="1em" height="1em" />
            </S.Visit>
        </S.Content>
    </S.Container>
}
export default LinkBox