import App from "./App.tsx";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { RecoilRoot } from "recoil";
import i18n from "./i18n.ts";

if (process.env.NODE_ENV == "PROD") {
  console.log = () => {
    return;
  };
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </RecoilRoot>
  </React.StrictMode>
);
