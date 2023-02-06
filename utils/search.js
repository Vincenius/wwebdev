import articleData from '../content/articles'
import resourceData from '../content/resources'

const fetchWeekly = async (searchVal, page = 1) => {
  const json = { search: searchVal, page }

  const stringified = JSON.stringify(json)
  const query = encodeURI(stringified)
  const response = await fetch(`https://vyx7vatlne.execute-api.eu-central-1.amazonaws.com/prod?q=${query}`)
  const result = await response.json()
  const elements = (result || []).map(item => ({ ...item, headline: item.title, previewImage: item.image }))
  const canFetchMore = elements.length === 20

  return { elements, nextPage: canFetchMore ? page + 1 : null }
}

const fetchArticles = async searchVal => {
  const lowerCaseSearch = searchVal.toLowerCase()
  const articleResourceData = [...articleData, ...resourceData]
  const articleResourceResults = articleResourceData
    .filter(
      a => a.headline.toLowerCase().includes(lowerCaseSearch) ||
      a.description.toLowerCase().includes(lowerCaseSearch)
    )

  return articleResourceResults
}

const search = async (searchWord, options) => {
  const articles = options.wweb_dev && options.page === 1
    ? await fetchArticles(searchWord)
    : []

  const weeklies = options.weekly
    ? await fetchWeekly(searchWord, options.page)
    : { elements: [], nextPage: null }

  return {
    result: [...articles,...weeklies.elements],
    nextPage: weeklies.nextPage,
  }
}

export default search