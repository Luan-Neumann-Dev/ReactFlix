import storage from 'redux-persist/lib/storage' // padrão da localstorage para a web.

const persistConfig = {
    key:"root",
    version: 1,
    storage, //storageengine(localstorage, sessionstorage, etc.)
}

export default persistConfig;