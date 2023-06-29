import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/details";
import First from "./components/first";
import Navbar from "./components/navbar";
import Products from "./components/products";

function App() {
  return (
    <div className="App">
    <First/>
      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
       
        <Route path="/products" element={<Products/>}/>
        <Route />
      </Routes>
      </BrowserRouter>

      <Routes>
        <Route path="/products/:id" element={<Details/>}/>
      </Routes> */}
    </div>
  )
}
export default App;