import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Book from '@/components/Book'
import Movie from '@/components/Movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/hello'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    }
  ]
})
