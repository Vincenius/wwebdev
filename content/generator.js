import React from 'react'
import WeeklyPreview from '../components/WeeklyPreview'
import ArticlePreview from '../components/ArticlePreview'
import LinkBox from '../components/LinkBox'
import LinkBoxLoading from '../components/LinkBox/Loading'
import SubscribeForm from '../components/SubscribeForm'

import { weeklyData } from './weekly'
import articleData from './articles'
import resourceData from './resources'
import templateData from './templates'

export const generateWeekly = maxCount => {
    const data = maxCount
        ? weeklyData.slice(0,maxCount)
        : weeklyData
    return data.map(d => <WeeklyPreview
        key={`weekly-${d.id}`}
        number={d.id}
        date={d.date}
        description={d.description}
        previewImage={d.previewImage}
    />)
}

export const generateWeeklyContent = (data, filter) => {
    return data.map((item, index) =>
        <React.Fragment key={`linkbox-${item._id}`}>
            <LinkBox
                key={`linkbox-${index}`}
                title={item.title}
                description={item.description}
                link={item.link}
                image={item.image}
                selfPromoted={item.selfPromoted}
            />
            { index === 2 && <SubscribeForm type="weekly" isSmall={true} /> }
        </React.Fragment>)
}

export const generateArticles = () => {
    return articleData.map(d => <ArticlePreview
        key={`article-${d.id}`}
        date={d.date}
        updatedAt={d.updatedAt}
        headline={d.headline}
        description={d.description}
        link={d.link}
        previewImage={d.previewImage}
    />)
}

export const generateResources = () => {
    return resourceData.map(d =>
        <ArticlePreview
            key={d.headline}
            date={d.date}
            updatedAt={d.updatedAt}
            headline={d.headline}
            description={d.description}
            link={d.link}
            previewImage={d.previewImage}
        />
    )
}

export const generateArticleAndResources = maxCount => {
    const data = [...articleData, ...resourceData, ...templateData]
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
    />).slice(0, maxCount)
}

export const generateLinkBoxLoading = (maxCount = 6) => {
    const previews = []
    for (let i = 0; i < maxCount; i++) {
        previews.push(<LinkBoxLoading key={`loading-${i}`} />)
    }
    return previews
}