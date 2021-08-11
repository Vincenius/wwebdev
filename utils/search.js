import articleData from '../content/articles'
import resourceData from '../content/resources'

const search = async (searchWord) => {
  const articleResourceData = [...articleData, ...resourceData]
  const articleResourceResults = articleResourceData
    .map(
      a => a.headline.includes(searchWord) || a.description.includes(searchWord)
        ? a : null
    )
    .filter(Boolean)

  return articleResourceResults
}

export default search