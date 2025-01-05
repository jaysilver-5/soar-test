import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/app/store";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Soar Task",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`max-w-full w-screen min-h-screen flex overflow-x-hidden max-h-screen`}
        >
          <div className="w-fit hidden xl:block">
            <Sidebar />
          </div>
          <div className="flex-grow w-full flex full bg-white flex-col">
            <Header />
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
