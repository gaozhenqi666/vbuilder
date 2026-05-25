import './assets/main.css'

import { browserTracingIntegration, init, replayIntegration } from '@sentry/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { initBlocks } from './blocks'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

init({
    app,
    dsn: 'https://94be5f3494f02354fc412c6f605bb360@o1265103.ingest.us.sentry.io/4507836939763712',
    integrations: [browserTracingIntegration(), replayIntegration()],
    // Tracing
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

app.use(pinia)
app.use(router)

app.use(initBlocks())

app.mount('#app')
