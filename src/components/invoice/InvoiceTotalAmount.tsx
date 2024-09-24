
interface InvoiceTotalAmountProps{
    total: any
}

const InvoiceTotalAmount: React.FC<InvoiceTotalAmountProps> = ({total}) => {

    return(
        <div className="invoice_total">
            <h3>Total amount: {total}</h3>
        </div>
    )
}

export default InvoiceTotalAmount