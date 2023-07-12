import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/details";
import First from "./components/first";
import Navbar from "./components/navbar";
import Products from "./components/products";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route />
      </Routes>
      </BrowserRouter>

     
    </div>
  )
}
export default App;