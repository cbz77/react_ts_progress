import Coin from "./Coin"
import { useEffect, useState } from "react"

const CoinApp = () => {

    const [side, setSide] = useState('start');
    const [totalHeads, setTotalHeads] = useState(0);
    const [totalTails, setTotalTails] = useState(0);
    const [totalFlips, setTotalFlips] = useState(0);

    const FlipCoin = () => {
        const random = Math.random();
        if(random < 0.5){
            setSide('heads')
            setTotalHeads(totalHeads + 1)
        }else{
            setSide('tails')
            setTotalTails(totalTails + 1)
        }

        setTotalFlips(totalFlips + 1)
    }

    
    return (
        <div className="component_CoinApp">
            <div className="m-2">
                <Coin side={side}></Coin>
            </div>
            <button className="btn btn-primary" onClick={() => FlipCoin()}>Flip the coin</button>
            <span className="m-2">Total flips: <span className="font-bold text-blue-200">{totalFlips}</span></span>
            <span className="m-2">Total heads: <span className="font-bold text-yellow-200">{totalHeads}</span></span>
            <span className="m-2">Total tails: <span className="font-bold text-red-200">{totalTails}</span></span>
        </div>
    )
}

export default CoinApp