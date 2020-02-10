import React from 'react'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'
import * as S from './styled'

function LinkBox({ title, description, image, link, selfPromoted }) {
    const linkWithRef = `${link}?utm_source=wweb.dev`
    return <S.Container>
        { selfPromoted && <div>
            <S.PromoBg></S.PromoBg>
            <S.PromoLabel>{selfPromoted}</S.PromoLabel>
        </div>
        }
        <S.Content>
            <div>
                { image && <a href={linkWithRef} target="_blank" rel="noopener">
                    <img src={image} alt={title} />
                </a> }
                <S.Description>
                    <a href={linkWithRef} target="_blank" rel="noopener">
                        <h2>{title}</h2>
                    </a>
                    <p>{description}</p>
                </S.Description>
            </div>

            <S.Visit href={linkWithRef} target="_blank" rel="noopener">
                visit <ArrowRight width="1em" height="1em" />
            </S.Visit>
        </S.Content>
    </S.Container>
}
export default LinkBox