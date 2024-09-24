
interface InvoiceItemListProps{
    items: any,
    onDeleteItem: any
}

const InvoiceItemList: React.FC<InvoiceItemListProps> = ({items, onDeleteItem}) => {

    return(
        <div>

            <h3>Seznam položek:</h3>

            {items.map((item: any, index: any) => (

                <div className="card card-bordered border-gray-400 m-2 p-2 invoice-item" key={index}>

                    <div className="card-title">{item.item}</div>
                    <div className="card-body">
                        <div className="quantity">Quantity: {item.quantity}</div>
                        <div className="price">Price: {item.price}</div>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-secondary" onClick={() => {onDeleteItem(index)}}>Delete item</button>
                    </div>
                   
                </div>

            ))}

        </div>
    )
}

export default InvoiceItemList