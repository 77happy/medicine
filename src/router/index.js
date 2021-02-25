import Vue from 'vue'
//先导入路由
import VueRouter from 'vue-router'


// 1.通过Vue.use来安装插件
Vue.use(VueRouter)

// 2.创建路由插件

const routes = [
        //在这里配置n个路由 配置路由组件
        //数组里每一个都是一个路由
        // 让一个URL对应一个组件 URL写的并不是完整的URL

        {
            path: '/',
            redirect: '/Login'
                // 根目录 默认显示Login
        },
        {
            path: '/login',
            component: () =>
                import ('@/views/public/Login.vue')
        },
        // 个人中心
        {
            path: '/personal',
            component: () =>
                import ('@/components/personal.vue')
        },
        //消息
        {
            path: '/message',
            component: () =>
                import ('@/components/message.vue')
        },
        {
            path: '/index',
            name: 'index',
            // 管理员操作
            component: () =>
                import ('@/views/index/index.vue'),
            children: [{
                    // index的默认页是home
                    path: '/',
                    component: () =>
                        import ('@/views/index/home.vue')
                },
                {
                    // index的默认页是home
                    path: '/putMed',
                    component: () =>
                        import ('@/views/index/Managedo/putMed.vue')
                },
                {
                    // index的默认页是home
                    path: '/operMan',
                    component: () =>
                        import ('@/views/index/Managedo/operMan.vue')
                }
            ]
        },
        {
            // 医生
            path: '/docotor',
            component: () =>
                import ('@/views/index/index.vue'),
            children: [{
                    // docotor的默认页是home
                    path: '/',
                    component: () =>
                        import ('@/views/index/docotorHome.vue')
                },
                {

                    path: '/prescribing',
                    component: () =>
                        import ('@/views/index/Docotordo/prescribing.vue')
                }, {
                    path: '/operation',
                    component: () =>
                        import ('@/views/index/Docotordo/operation.vue')

                }
            ]
        }

    ]
    //实例化VueRouter并将routes添加进去
    // eslint-disable-next-line no-unused-vars
const router = new VueRouter({
    //ES6简写，等于routes：routes
    routes,
    mode: 'history'
});

//抛出这个这个实例对象方便外部读取以及访问  不导出main.js页面无法访问
export default router