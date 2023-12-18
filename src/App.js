import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
