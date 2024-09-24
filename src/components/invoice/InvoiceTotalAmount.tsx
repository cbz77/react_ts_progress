
interface InvoiceTotalAmountProps{
    total: any
}

const InvoiceTotalAmount: React.FC<InvoiceTotalAmountProps> = ({total}) => {

    return(
        <div className="component_InvoiceTotalAmount">
            <h3>Celkem: <span className="font-bold text-yellow-200">{total} Kč</span></h3>
        </div>
    )
}

export default InvoiceTotalAmount