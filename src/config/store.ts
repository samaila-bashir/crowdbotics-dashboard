/* eslint-disable import/no-anonymous-default-export */
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { createStore } from "redux";
import rootReducer from "./root.reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig as any,rootReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);

  // persistor.purge();

  return { store, persistor };
};

