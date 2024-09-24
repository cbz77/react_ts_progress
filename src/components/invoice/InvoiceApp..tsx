
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
            
            let pdf_content: string = 
                `název: ${item.item} / `+ 
                `množství: ${item.quantity} ks / `+
                `cena: ${item.price} CZK `

            pdf.text(pdf_content,20, yPos)
        })

        //add total amount to PDF
        let totalAmount: any = calculateTotalAmount()
        totalAmount = totalAmount.toFixed(2)
        
        pdf.text(
            `Celkem: ${totalAmount} CZK`,20, 180
        )

        pdf.save('faktura.pdf')
    }

    return(
        <div className="component_InvoiceApp">
            <InvoiceBillDetails onAddItem={handleAddItem}></InvoiceBillDetails>
            <InvoiceItemList items={items} onDeleteItem={handleDeleteItem}></InvoiceItemList>
            
            <div className="divider"></div>

            <div className="flex flex-row items-center m-2">
                <div className="w-1/2">
                    <InvoiceTotalAmount total={calculateTotalAmount()}></InvoiceTotalAmount>
                </div>
                <div className="w-1/2 flex justify-end">
                    <button className="btn btn-primary" onClick={handleDownloadPDF}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Stáhnout PDF
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default InvoiceApp