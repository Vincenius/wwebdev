import articleData from '../content/posts'

const fetchWeekly = async (searchVal, page = 1) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/search?q=${searchVal}&p=${page}`)
  const result = await response.json()
  const elements = (result || []).map(item => ({ ...item, headline: item.title, shareImage: item.image }))
  const canFetchMore = elements.length === 20

  return { elements, nextPage: canFetchMore ? page + 1 : null }
}

const fetchArticles = async searchVal => {
  const lowerCaseSearch = searchVal.toLowerCase()
  const articleResourceResults = articleData
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