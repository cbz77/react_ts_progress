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
            <div className="m-2 flex justify-center">
                <Coin side={side}></Coin>
            </div>

            <div className="flex justify-center items-center">
                <button className="btn btn-primary mt-3" onClick={() => FlipCoin()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    Flip the coin
                </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                <span className="m-2">Total flips: <span className="font-bold text-blue-200">{totalFlips}</span></span>
                <span className="m-2">Total heads: <span className="font-bold text-yellow-200">{totalHeads}</span></span>
                <span className="m-2">Total tails: <span className="font-bold text-red-200">{totalTails}</span></span>
            </div>
        
        </div>
    )
}

export default CoinApp