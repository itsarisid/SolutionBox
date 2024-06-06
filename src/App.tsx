import { Suspense, useTransition } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const {t}=useTransition();
  return (
    <BrowserRouter basename="abc.com">
      <Suspense fallback={<h1>loading</h1>}>
      <Routes>

      <Route path="error" element={<span>error</span>}>

      </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
