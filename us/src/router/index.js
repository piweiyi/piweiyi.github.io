import Vue from 'vue'
import VueRouter from 'vue-router'
import NPprocess from 'nprogress'
import 'nprogress/nprogress.css'//顶部的加载进度条样式
Vue.use(VueRouter)
const constantRoutes = [
    {
        name: 'layout',
        path: '',
        redirect: '/home',
        hidden: false,
        component: (resolve) => require(['@/layout/Index'], resolve),
        meta: {
            title: '首页',
            icon: 'iconzhuangtaijiankong',
        },
        children: [
            {
                // 首页
                name: 'home',
                path: '/home',
                hidden: false,
                component: (resolve) => require(['@/views/home_page/index'], resolve),
                meta: {
                    title: '开篇',
                    icon: '',
                },
            },
            {
                // 相册
                name: 'photo',
                path: '/photo',
                hidden: false,
                component: (resolve) => require(['@/views/photo_album/index'], resolve),
                meta: {
                    title: '时光机',
                    icon: '',
                },
            },
            {
                // 时光机
                name: 'time',
                path: '/time',
                hidden: false,
                component: (resolve) => require(['@/views/time_machine/index'], resolve),
                meta: {
                    title: '信',
                    icon: '',
                }
            },
        ]
    },
    {
        name: 'layout1',
        path: '/',
        hidden: false,
        component: (resolve) => require(['@/layout/Index'], resolve),
        meta: {
            title: '首页',
            icon: 'iconzhuangtaijiankong',
        },
        children: [
            {
                // 相册详情
                name: 'PhotoInfo',
                path: '/PhotoInfo',
                hidden: false,
                component: (resolve) => require(['@/views/photo_album/PhotoInfo'], resolve),
                meta: {
                    title: '相册详情',
                    icon: '',
                }
            },
        ]
    }
]
const router = new VueRouter(
    {
        mode: 'history', // 去掉url中的#
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes
    }
)
// 解决重复点击导航路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}
router.afterEach(() => {
    NPprocess.done()
})
export { constantRoutes }
export default router