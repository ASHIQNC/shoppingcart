import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

// lazyloading
const LazyHome = React.lazy(() => import("./Pages/Home/Home"));
const LazyCart = React.lazy(() => import("./Pages/Cart/Cart"));
const LazySingleDetail = React.lazy(() =>
  import("./Pages/SingleProduct/SingleProductDetail")
);
function App() {
  return (
    <div>
      <Header></Header>
      <Suspense fallback={"loading"}>
        <Routes>
          <Route path="/" element={<LazyHome></LazyHome>}></Route>
          <Route path="cart" element={<LazyCart></LazyCart>}></Route>
          <Route
            path="detail/:id"
            element={<LazySingleDetail></LazySingleDetail>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
