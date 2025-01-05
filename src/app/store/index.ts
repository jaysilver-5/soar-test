// src/app/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./slices/userSlice";

const persistConfig = {
  key: "user",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  // Explicitly configure middleware if needed
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
