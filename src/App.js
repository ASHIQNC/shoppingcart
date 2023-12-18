import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import SingleProductDetail from "./Pages/SingleProduct/SingleProductDetail";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
        <Route
          path="detail"
          element={<SingleProductDetail></SingleProductDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
