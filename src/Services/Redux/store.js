/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import Reducer from './Reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['loading'],
    whitelist: [''],
};

const persistedReducer = persistReducer(persistConfig, Reducer);

let composeEnhanchers = compose;

if (__DEV__) {
    composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const Store = createStore(persistedReducer, composeEnhanchers(applyMiddleware()));
const Persistor = persistStore(Store);

export { Store, Persistor };
