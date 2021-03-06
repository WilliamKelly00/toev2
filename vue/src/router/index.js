import { createRouter, createWebHistory } from 'vue-router'

import Data from '../views/Data.vue'
import Portfolio from '../views/Portfolio.vue'
import Topics from '../views/Topics.vue'
import AddQuestion from '../views/AddQuestion.vue'
import NFT from '../views/NFT.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Portfolio },
  { path: '/portfolio', component: Portfolio },
  { path: '/data', component: Data },
  { path: '/topics', component: Topics},
  { path: '/addquestion', component: AddQuestion},
  { path: '/nft', component: NFT}
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
