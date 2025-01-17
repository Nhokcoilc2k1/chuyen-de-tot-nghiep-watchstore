import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app/appSlice";
import productSlice from "./products/productSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore,  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import userSlice from "./user/userSlice";
import orderSlice from "./orders/orderSlice";
import brandSlice from "./brand/brandSlice";
import loginSlice from "./login/loginSlice";

const commonConfig = {
  key: 'shop/user',
  storage
}

const userConfig = {
  ...commonConfig,
  whitelist: ['isLoggedIn', 'token']
}

export const store = configureStore({
    reducer: {
      app: appSlice,
      products: productSlice,
      orders: orderSlice,
      brands: brandSlice,
      userLogin: loginSlice,
      user: persistReducer(userConfig, userSlice)
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor =  persistStore(store)

