import React from 'react'
import * as S from './styled'

const ImageTextBlock = props => {
    const { image, title, link, description } = props
    return (
        <S.Container>
            <S.Image src={image} alt={title} />
            <S.Content>
                <h3>
                    <a href={link} target="_blank" rel="noopener">
                        {title}
                    </a>
                </h3>

                <a href={link} target="_blank" rel="noopener">
                    {link}
                </a>
                <p>{description}</p>
            </S.Content>
        </S.Container>
    )
}

export default ImageTextBlock
