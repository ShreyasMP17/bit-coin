import "../styles/products.css"

import { useEffect } from "react"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"

const Products = () => {

    let navigate=useNavigate();
    let handleTap=(id)=>{
        navigate(`/products/${id}`)
    }
    let [products, setproducts] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("https://dummyjson.com/products")
            let data = await response.json()
            setproducts(data.products)
        }
        fetchData()
    })
    return (<div className="products">
        <h1>Products</h1>
        <div className="pro">
            {products.map(data => (
                <div className="proItems">
                    <div className="proImage">
                    <img src={data.thumbnail} alt="" />
                    </div>
                    <div className="proData">
                    <h1>{data.title}</h1>
                    <h1>{data.brand}</h1>
                    <h2>{data.description}</h2>
                    <h2>{data.stock}</h2>
                    <h2>{data.rating}</h2>
                    <h3 className="text-danger">{data.discountPercentage}% <span style={{color:"black"}}> ₹{Math.trunc((data.price*80)-(data.discountPercentage/100)*(data.price*80))}</span></h3>
                    <p className="text-decoration-line-through"> MRP:{data.price*80}</p>
                    
                    <button onClick={()=>handleTap(data.id)}>Details</button><button>CART</button>
                    </div>

                    

                </div>

            ))}


        </div>
    </div>);
}

export default Products;