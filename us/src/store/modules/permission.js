//生成动态权限路由
import { constantRoutes } from '@/router'
const permission = {
    state: {
        routes: [],
        addRoutes: []
    },
    mutations: {
        SET_ROUTES: (state, routes) => {
            state.addRoutes = routes
            state.routes = constantRoutes.concat(routes)
        }
    },
    actions: {
        // 生成路由 
        GenerateRoutes({ commit }) {
            return new Promise(resolve => {
                const accessedRoutes = []
                accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })
                commit('SET_ROUTES', accessedRoutes)
                resolve(accessedRoutes)
            })
        }
    }
}

export const loadView = (view) => { // 路由懒加载
    return (resolve) => require([`@/views/${view}`], resolve)
}

export default permission
