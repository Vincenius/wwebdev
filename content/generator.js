import React from 'react'
import ArticlePreview from '../components/ArticlePreview'
import LinkBoxLoading from '../components/LinkBox/Loading'

import postData from './posts'
import templateData from './templates'


export const generateArticles = () => {
    return postData.filter(p => p.type === 'Article').map(d => <ArticlePreview
        key={`article-${d.id}`}
        date={d.date}
        updatedAt={d.updatedAt}
        headline={d.headline}
        description={d.description}
        link={d.link}
        previewImage={d.previewImage}
        shareImage={d.shareImage}
    />)
}

export const generateResources = () => {
    return postData.filter(p => p.type === 'Resource').map(d =>
        <ArticlePreview
            key={d.headline}
            date={d.date}
            updatedAt={d.updatedAt}
            headline={d.headline}
            description={d.description}
            link={d.link}
            previewImage={d.previewImage}
            shareImage={d.shareImage}
        />
    )
}

export const generateArticleAndResources = () => {
    const data = [...postData, ...templateData]
    return data.sort((a,b) => {
        return new Date(b.date) - new Date(a.date);
    }).map((d, index) => <ArticlePreview
        type={d.type}
        key={`article-${index}`}
        date={d.date}
        updatedAt={d.updatedAt}
        headline={d.headline}
        description={d.description}
        link={d.link}
        previewImage={d.previewImage}
        shareImage={d.shareImage}
    />)
}

export const generateLinkBoxLoading = (maxCount = 6) => {
    const previews = []
    for (let i = 0; i < maxCount; i++) {
        previews.push(<LinkBoxLoading key={`loading-${i}`} />)
    }
    return previews
}