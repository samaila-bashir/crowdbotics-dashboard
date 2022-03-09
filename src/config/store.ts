/* eslint-disable import/no-anonymous-default-export */
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { createStore } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

function defaultReducer(state={},action:any){
    return state;
}

const persistedReducer = persistReducer(persistConfig as any,defaultReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);

  return { store, persistor };
};

