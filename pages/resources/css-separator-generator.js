import React, { useState } from 'react'
import { Head, CssSeparatorGenerator } from '../../components'
import meta from '../../content/resources'

const postMeta = meta.find(m => m.id === 5)

const Demo = () => {
    const [activeBg, changeBg] = useState(0);
    return (
        <div>
            <Head
                isArticle={true}
                title={postMeta.headline}
                link={`https://wweb.dev${postMeta.link}`}
                description={postMeta.description}
                image={postMeta.previewImage}
                date={new Date(postMeta.date)}
            />

            <CssSeparatorGenerator />
        </div>
    )
}

export default Demo
