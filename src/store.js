import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './stores/global'

export default configureStore({
    reducer: {
        global: globalReducer
    }
})
