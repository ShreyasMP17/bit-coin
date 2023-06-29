import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    let [products, setproducts] = useState([])
    let params = useParams()
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`https://api.coinranking.com/v2/coins`)
            let data = await response.json()
            setproducts(data.products)
        }
        fetchData()
    })
    return (
        <div className="readproducts">
            <h1>VIEW</h1>
            <div className="dd">
                <h1>hunk</h1>
               
                {products.map(data => (
                    <div className="proImage">
                        <h1>{data.title}</h1>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Details;