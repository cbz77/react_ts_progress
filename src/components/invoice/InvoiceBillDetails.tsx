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
        <div>

            <h3>Detail faktury:</h3>

            <label>Item:</label>
            <input type="text" value={item} onChange={(e:any) => setItem(e.target.value)}></input>

            <label>Quantity:</label>
            <input type="text" value={quantity} onChange={(e:any) => setQuantity(e.target.value)}></input>

            <label>Price:</label>
            <input type="text" value={price} onChange={(e:any) => setPrice(e.target.value)}></input>

            <button className="btn btn-primary" onClick={handleAdditem}>Add item</button>

            <p className="text-red-400">{errorMsg}</p>

        </div>
    )
}

export default InvoiceBillDetails