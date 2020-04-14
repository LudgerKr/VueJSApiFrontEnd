import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import Article from "../views/Article";
import Create from "../views/Create";
import Edit from "../views/Edit";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  {
    path: '/article/:id',
    name: 'idArticle',
    component: Article
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/edit/:id',
    name: 'editArticle',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
