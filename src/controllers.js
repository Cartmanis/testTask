import axios from 'axios'

export function getNews () {
  return axios.get('https://newsapi.org/v2/top-headlines?sources=google-news-ru&apiKey=330db6d77688433c9b653878ec1b3f89')
}
