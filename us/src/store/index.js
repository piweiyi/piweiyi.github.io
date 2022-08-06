import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import getters from './getters'
Vue.use(Vuex)
const state = {
   isCollapsed:false,       //是否折叠菜单栏
   spinShow: false,         //控制加载弹窗的出现
   spinContent: '正在执行中请耐心等待...',//加载弹窗的内容
}
const mutations ={
    setisCollapsed(state){
        state.isCollapsed=!state.isCollapsed;
    },
    setSpinShow(state,spinShow){
        state.spinShow = spinShow
    },
    setSPinContent(state,spinContent){
        state.spinContent = spinContent
    }
}
const store = new Vuex.Store({
    modules: {
        permission
    },
    getters,
    state:state,
    mutations:mutations
  })
  export default store
  