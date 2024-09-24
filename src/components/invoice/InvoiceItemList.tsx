
interface InvoiceItemListProps{
    items: any,
    onDeleteItem: any
}

const InvoiceItemList: React.FC<InvoiceItemListProps> = ({items, onDeleteItem}) => {

    return(
        <div className="component_InvoiceItemList">

            <h3 className="mt-3 font-medium pl-3">Seznam položek:</h3>

            {items.map((item: any, index: any) => (

                <div className="flex flex-col md:flex-row items-center border rounded-lg border-gray-400 m-2 p-2 invoice-item" key={index}>

                    <div className="index md:w-10 text-gray-600">{index + 1}.</div>
                    <div className="name md:w-2/5 font-medium">{item.item}</div>
                    <div className="quantity md:w-1/5">množství: {item.quantity}</div>
                    <div className="price md:w-1/5">cena: {item.price} Kč</div>
                    <button className="btn btn-secondary md:w-1/5 mt-3 md:mt-0" onClick={() => {onDeleteItem(index)}}>Smazat položku</button>

                </div>

            ))}

        </div>
    )
}

export default InvoiceItemList