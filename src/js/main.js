import { debounce } from 'lodash'
import swal from 'sweetalert'
import fotoTpl from '../templates/galerry.hbs'
import NewsApiService from '../js/apiserver'

const refs = {
  serchForm: document.querySelector('.search-form'),
  serchInput: document.querySelector('.js-serch'),
  listcard: document.querySelector('.js-gallery'),
  serchmoreButton: document.querySelector('.js-button'),
}

const newsApiService = new NewsApiService()

refs.serchForm.addEventListener('submit', fetachcard)
refs.serchmoreButton.addEventListener('click', fetachMoreCard)

// let searchQuery = ''

function fetachcard(eve) {
  eve.preventDefault()

  clearArticalse()
  newsApiService.query = eve.currentTarget.elements.query.value
  newsApiService.resetPage()
  newsApiService.fetchArticles().then(appendfotoTpl)
}

function fetachMoreCard() {
  newsApiService.fetchArticles().then(appendfotoTpl)
}

function appendfotoTpl(articles) {
  refs.listcard.insertAdjacentHTML('beforeend', fotoTpl(articles))
}
function clearArticalse() {
  refs.listcard.innerHTML = ''
}
function errorNotifi() {
  swal({
    title: 'Are you sure?',
    text:
      'Die Bestellung wird aufgegeben und es können keine weiteren Artikel hinzugefügt werden!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#DD6B55',
    confirmButtonText: 'Ja, Bestellung aufgeben!',
    closeOnConfirm: false,
  })
}
