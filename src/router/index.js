import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/index.js'
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/search',
        name: 'Search',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "search" */ '../views/Search.vue')
    },
    {
        path: '/mv',
        name: 'Mv',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Mv" */ '../views/Mv.vue')
    },
    {
        path: '/itemmv',
        name: 'ItemMv',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "ItemMv" */ '../views/ItemMv.vue')
    },
    {
        path: '/itemMusic',
        name: 'ItemMusic',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "itemMusic" */ '../views/ItemMusic.vue')
    },
    {
        path: '/find',
        name: 'Find',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "findt" */ '../views/Find.vue')
    },
    {
        path: '/singer',
        name: 'Singer',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "singer" */ '../views/Singer.vue')
    },
    {
        path: '/singermusic',
        name: 'SingerMusic',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "SingerMusic" */ '../views/SingerMusic.vue')
    },
    {
        path: '/iconone',
        name: 'IconOne',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "IconOne" */ '../views/IconOne.vue')
    },
    {
        path: '/recomendmv',
        name: 'RecomendMv',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "RecomendMv" */ '../views/RecomendMv.vue')
    },
    {
        path: '/toplist',
        name: 'Toplist',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Toplist" */ '../views/Toplist.vue')
    },
    {
        path: '/login',
        name: 'Login',
        beforeEnter: (to, from, next) => {
            // console.log(from, to);
            // next()
            // 拿到登录状态 路由首位
            const { islogin } = localStorage
            islogin ? next({ name: 'home' }) : next()

        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Login" */ '../views/Login.vue')
    },
    {
        path: '/loginview',
        name: 'LoginView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "LoginView" */ '../views/LoginView.vue')
    },
    {
        path: '/infouser',
        name: 'InfoUser',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "InfoUser" */ '../views/InfoUser.vue')
    },

    {
        path: '/register',
        name: 'Register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        beforeEnter: (to, from, next) => {
            // console.log(from, to);
            // next()
            // 拿到登录状态 路由首位
            const { islogin } = localStorage
            islogin ? next({ name: 'home' }) : next()

        },
        component: () =>
            import ( /* webpackChunkName: "Mv" */ '../views/Register.vue')

    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from) => {
    if (to.path == '/login' || to.path == '/mv' || to.path == '/register') {
        store.state.isFooterMusic = false

    } else if (to.path == '/itemmv' || to.path == '/infouser') {
        store.state.isFooterMusic = false

    } else {
        store.state.isFooterMusic = true
    }
})
export default router