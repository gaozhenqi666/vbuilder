import { createRouter, createWebHistory } from 'vue-router'

// import ActionDetailView from '../views/ActionDetailView.vue'
// import ActionsView from '../views/ActionsView.vue'
// import DataSourceDetailView from '../views/DataSourceDetailView.vue'
// import DataSourceView from '../views/DataSourceView.vue'
// import PageLayoutView from '../views/PageLayoutView.vue'
// import RunnerView from '../views/RunnerView.vue'
import AppView from '../views/AppView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/app',
            name: 'home',
            component: AppView,
            children: [
                {
                    path: '',
                    redirect: '/app/layout'
                },
                {
                    path: 'dataSource',
                    name: 'dataSource',
                    component: () => import('../views/DataSourceView.vue'),
                    // component: DataSourceView,
                    children: [
                        {
                            path: '',
                            redirect: '/app/dataSource/1'
                        },
                        {
                            path: ':id',
                            name: 'dataSourceDetail',
                            component: () => import('../views/DataSourceDetailView.vue')
                            // component: DataSourceDetailView
                        }
                    ]
                },
                {
                    path: 'layout',
                    name: 'layout',
                    component: () => import('../views/PageLayoutView.vue')
                    // component: PageLayoutView
                },
                {
                    path: 'actions',
                    name: 'actions',
                    component: () => import('../views/ActionsView.vue'),
                    // component: ActionsView,
                    children: [
                        {
                            path: ':id',
                            name: 'actionsDetail',
                            component: () => import('../views/ActionDetailView.vue')
                            // component: ActionDetailView
                        }
                    ]
                }
            ]
        },
        {
            path: '/runner',
            name: 'runner',
            component: () => import('../views/RunnerView.vue')
            // component: RunnerView
        },
        {
            path: '/',
            redirect: '/app/layout'
        }
    ]
})

// export const innerRouter = createRouter({
//   history: createMemoryHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     }
//   ]
// })

export default router
