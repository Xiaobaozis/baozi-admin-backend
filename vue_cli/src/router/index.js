import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import MallDetail from '../views/Mall/MallDetail'
//解决路由点击重复的问题
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        component: Main,
        children: [{
                path: '/',
                name: 'home',
                component: () =>
                    import ('@/views/Home/Home')
            },
            {
                path: '/mall',
                name: 'Mall',
                component: () =>
                    import ('@/views/Mall/Mall'),
                children: [{
                    path: '/mallDetail',
                    name: 'MallDetail',
                    component: MallDetail
                }],
            },
            // {
            //     path: '/mallDetail',
            //     name: 'MallDetail',
            //     component: MallDetail

            // },
            {
                path: '/user',
                name: 'User',
                component: () =>
                    import ('@/views/User/User')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router