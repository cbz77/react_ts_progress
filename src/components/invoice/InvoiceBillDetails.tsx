import { useState } from "react"

interface InvoiceBillDetailsProps{
    onAddItem: any,
}

const InvoiceBillDetails: React.FC<InvoiceBillDetailsProps> = ({onAddItem}) => {

    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(0)
    const [errorMsg, setErrorMsg] = useState('')

    const handleAdditem = () => {
        if(!item.trim()){
            setErrorMsg("Please input data to items section")
        }

        if (!/^[a-zA-Z]+$/.test(item)) {
            setErrorMsg(`Item should only contain 
                alphabetical characters.`);
            return;
        }

        const newItem = {item, quantity, price}

        onAddItem(newItem)
        setItem('')
        setQuantity(1)
        setPrice(0)
        setErrorMsg('')

    }

    return(
        <div className="component_InvoiceBillDetails">

            <div className="card bg-neutral p-3">

                <div className="card-title"><h3>Nová položka</h3></div>

                <div className="card-content">

                    <div className="flex flex-row gap-2 mt-2 mb-2">

                        <div className="form-control w-full">

                            <div className="label">
                                <span className="label-text">Název:</span>
                            </div>
                            <input type="text" value={item} onChange={(e:any) => setItem(e.target.value)} placeholder="Název" className="input input-bordered"></input>

                        </div>

                        <div className="form-control w-1/5">

                            <div className="label">
                                <span className="label-text">Množství:</span>
                            </div>
                            <input type="number" value={quantity} onChange={(e:any) => setQuantity(e.target.value)} placeholder="Množství" className="input input-bordered"></input>

                        </div>

                        <div className="form-control">

                            <div className="label">
                                <span className="label-text">Cena:</span>
                            </div>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" value={price} onChange={(e:any) => setPrice(e.target.value)} placeholder="Cena" className="grow"></input>
                                <span className="badge">Kč</span>
                            </label>

                        </div>

                    </div>

                </div>

                <div className="card-actions flex justify-end">

                    <div className="">
                        <button className="btn btn-primary" onClick={handleAdditem}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                                Přidat položku
                        </button>
                    </div>

                </div>

                <p className="text-red-400">{errorMsg}</p>
                {/* <div role="alert" className="alert alert-warning mt-3 mb-3">
                    
                </div> */}

            </div>

        </div>
    )
}

export default InvoiceBillDetails