import React from 'react'
import ArrowRight from '@material-ui/icons/ArrowRightAlt';
import * as S from './styled'

function LinkBox({ title, description, image, link, selfPromoted }) {
    return <S.Container>
        { selfPromoted && <div>
            <S.PromoBg></S.PromoBg>
            <S.PromoLabel>{selfPromoted}</S.PromoLabel>
        </div>
        }
        <S.Content>
            <div>
                { image && <a href={link} target="_blank" rel="noopener">
                    <img src={image} alt={title} />
                </a> }
                <S.Description>
                    <a href={link} target="_blank" rel="noopener">
                        <h2>{title}</h2>
                    </a>
                    <p>{description}</p>
                </S.Description>
            </div>

            <S.Visit href={link} target="_blank" rel="noopener">
                visit <ArrowRight />
            </S.Visit>
        </S.Content>
    </S.Container>
}
export default LinkBox