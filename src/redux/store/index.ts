import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import AuthReducer from '../slice/authSlice'
import rootSaga from '../saga/rootSaga'


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:{
        auth:AuthReducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store