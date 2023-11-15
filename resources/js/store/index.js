import { createStore, createLogger } from 'vuex'
const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
    modules:{
        // todo
        // every individual store goes into ./modules
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

export default store
