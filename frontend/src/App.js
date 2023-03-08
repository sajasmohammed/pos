import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import 'antd/dist/antd';
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
