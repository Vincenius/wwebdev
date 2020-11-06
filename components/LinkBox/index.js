import React, { useState } from 'react'
import Image from 'next/image'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'
import * as S from './styled'

function LinkBox({ title, description, image, link, selfPromoted }) {
    return <S.Container>
        { selfPromoted && <div>
            <S.PromoBg></S.PromoBg>
            <S.PromoLabel>{selfPromoted}</S.PromoLabel>
        </div> }
        <S.Content>
            <div>
                { image && <a href={link} target="_blank" rel="noopener">
                    <Image src={image} alt={title} unsized />
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