import { weeklyData } from '../content/weekly'
import articleData from '../content/articles'
import resourceData from '../content/resources'

export default async (searchWord) => {
  const articleResourceData = [...articleData, ...resourceData]
  const articleResourceResults = articleResourceData
    .map(
      a => a.headline.includes(searchWord) || a.description.includes(searchWord)
        ? a : null
    )
    .filter(Boolean)

  const weeklyPromises = weeklyData.map(async w => {
    const res = await fetch(`/weekly/data/${w.id}.json`)
    const resData = await res.json()
    return {
      ...w,
      ...resData,
    }
  })

  const weeklyDetailData = await Promise.all(weeklyPromises)
  const weeklyResult = weeklyDetailData
    .map(w =>
      w.items.find(item => item.title.includes(searchWord)) ||
      w.items.find(item => item.description.includes(searchWord))
        ? w : null
    )
    .filter(Boolean)

  return [
    ...articleResourceResults,
    ...weeklyResult,
  ]
}