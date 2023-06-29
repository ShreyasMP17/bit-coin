import { useEffect, useState } from "react"
import "../styles/first.css"


const First = () => {
    let [coins, setCoins] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("https://api.coinranking.com/v2/coins")
            let data = await response.json()
            setCoins(data.data.coins)
        }
        fetchData()
    })
    return ( 
        <div className="first">
            <div className="main">
                <div className="txt">
<h1>CRYPTOCURRENCY LIVE PRICE TABLES</h1>
<p>Minimum puchase is 50 coins tokens.Get a bonus from <br /> 25% <br /> to on every token purchase</p>
</div>
<div className="box">
    <div className="box1">
    {coins.map((data) => (
                <div className="proItems">
                    
                    <div className="proData">
                        <div className="new">
                    <img height="150" width="150" src={data.iconUrl} alt="" />
                    <h1>{data.name}</h1>
                    <h1>{data.marketCap}</h1>
                    <h2>USD</h2>
                    <h1>{data.price}$</h1>
                    <button >Buy coin</button>
                    </div>
                    
                    </div>

                    

                </div>

            ))}

    </div>
    
</div>
</div>
        </div>
     );
}
 
export default First;