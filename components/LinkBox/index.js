import React, { useState } from 'react'
import Link from 'next/link'
import LazyLoad from 'react-lazy-load'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'
import Skeleton from '@material-ui/lab/Skeleton'
import * as S from './styled'

const LinkComp = ({ isExternal, link, children }) => !isExternal
    ? <Link href={link}>{children}</Link>
    : <a href={link} target="_blank" rel="noopener">{children}</a>

function LinkBox({ title, description, image, link, selfPromoted, fullHeight, isExternal = true, sponsored }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    return <S.Container>
        { selfPromoted && <div>
            <S.PromoBg></S.PromoBg>
            <S.PromoLabel>{selfPromoted}</S.PromoLabel>
        </div> }
        <S.Content fullHeight={fullHeight}>
            <div>
                { image && <LinkComp link={link} isExternal={isExternal}>
                    { !imageLoaded && <Skeleton variant="rect" height={203} /> }
                    <LazyLoad offsetVertical={1000} onContentVisible={() => setImageLoaded(true)}>
                        <img src={image} alt={title} />
                    </LazyLoad>
                </LinkComp> }
                <S.Description>
                    { sponsored && <S.Sponsored>Sponsored</S.Sponsored> }
                    <LinkComp link={link} isExternal={isExternal}>
                        <h2>{title}</h2>
                    </LinkComp>
                    <p>{description}</p>
                </S.Description>
            </div>

            {isExternal && <S.Visit href={link} target="_blank" rel="noopener noreferrer">
                visit <ArrowRight width="1em" height="1em" />
            </S.Visit> }
        </S.Content>
    </S.Container>
}
export default LinkBox