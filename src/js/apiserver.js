const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '24061129-288dc6abfa1f4d8fd1e3dc1ee'

export default class NewsApiService {
  constructor() {
    this.searchQuery = ''
    this.page = 1
  }
  fetchArticles() {
    console.log(this)
    let url =
      BASE_URL +
      `?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=4&key=${API_KEY}`

    return fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        this.incrimentPage()
        console.log(data.hits)
        return data.hits
      })
  }

  incrimentPage() {
    this.page += 1
  }

  resetPage() {
    this.page = 1
  }
  get query() {
    return this.searchQuery
  }
  set query(newQuery) {
    this.searchQuery = newQuery
  }
}
