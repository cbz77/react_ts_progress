
import InvoiceBillDetails from "./InvoiceBillDetails"
import InvoiceItemList from "./InvoiceItemList"
import InvoiceTotalAmount from "./InvoiceTotalAmount"

import jsPDF from "jspdf"
import { useState } from "react"


const InvoiceApp: React.FC = () => {

    const [items, setItems] = useState<any[]>([])

    const handleAddItem = (item: any) => {
        setItems([...items, item]);
    }

    console.log("items")
    console.log(items)

    const handleDeleteItem = (index: any) => {
        const updatedItems: any = [...items]
        updatedItems.splice(index, 1)
        setItems(updatedItems)
    }

    const calculateTotalAmount = () => {

        return items.reduce(
            (total, item) =>
                total +
                item.quantity *
                item.price, 0)
        
    }

    const handleDownloadPDF = () => {
        const pdf = new jsPDF()

        pdf.text('Faktura', 20, 20)

        //add items to PDF
        items.forEach((item: any, index: any) => {
            const yPos = 30 + index * 10
            pdf.text(
                `Item: ${item.item}
                 Quantity: ${item.quantity}
                 Price: ${item.price}
                `,20, yPos
            )
        })

        //add total amount to PDF
        let totalAmount: any = calculateTotalAmount()
        totalAmount = totalAmount.toFixed(2)
        
        pdf.text(
            `Total amount: ${totalAmount}`,20, 180
        )

        pdf.save('faktura.pdf')
    }

    return(
        <div>

            <h2>Faktury:</h2>

            <InvoiceBillDetails onAddItem={handleAddItem}></InvoiceBillDetails>
            <InvoiceItemList items={items} onDeleteItem={handleDeleteItem}></InvoiceItemList>
            <InvoiceTotalAmount total={calculateTotalAmount()}></InvoiceTotalAmount>
            <button className="btn btn-primary" onClick={handleDownloadPDF}>Stáhnout PDF</button>
        </div>
    )
}

export default InvoiceApp