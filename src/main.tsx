import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import { LoadingProvider } from "./LoadingContext.tsx";
import "@/styles/globals.css";

import ScrollToTop from "@/components/scrollToTop.tsx";
import LoadingTransition from "@/components/loadingTransition.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <LoadingProvider>
          <ScrollToTop />
          <LoadingTransition />
          <App />
        </LoadingProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
