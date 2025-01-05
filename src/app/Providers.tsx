"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/app/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Provider store={store}>
        <PersistGate
          loading="loading redux persist variables...."
          persistor={persistor}
        >
          {children}
        </PersistGate>
      </Provider>
    </html>
  );
};

export default Providers;
