import { legacy_createStore as createStore} from "redux";
import {reducer} from "./DataReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


//Redux persist

const persistConfig = {
    key: 'root',
    storage: storage,
}

// Presist reducer включает конфиг и редьюсер (если редьюсеров несколько, используеи combine reducers)

const persistedReducer = persistReducer(persistConfig, reducer)

//Глобальный store


export const store = createStore(persistedReducer)

// Persister

export const persistor = persistStore(store)

