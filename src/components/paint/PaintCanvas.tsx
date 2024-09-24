import { useEffect, useState, useRef } from "react"
import PaintMenu from "./PaintMenu"

const PaintCanvas: React.FC = () => {

    const canvasRef: any = useRef(null)
    const ctxRef: any = useRef(null)

    const [isDrawing, setIsDrawing] = useState(false)
    const [lineWidth, setLineWidth] = useState(5)
    const [lineColor, setLineColor] = useState("black")
    const [lineOpacity, setLineOpacity] = useState(0.1)

    //initialization when component mounts for the first time
    useEffect(() => {
        const canvas: any = canvasRef.current
        const ctx: any = canvas.getContext("2d")
        
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
    }, [lineColor, lineOpacity, lineWidth])

    //function for starting drawing
    const startDrawing = (e: any) => {

        const canvas: any = canvasRef.current
        const rect = canvas.getBoundingClientRect()

        ctxRef.current.beginPath()
        ctxRef.current.moveTo(
            e.clientX - rect.left,
            e.clientY - rect.top
        )
        setIsDrawing(true)
    }

    //function for ending the drawing
    const endDrawing = () => {

        ctxRef.current.closePath()
        setIsDrawing(false)
    }

    const draw = (e: any) => {
        if(!isDrawing){
            return
        }

        const canvas: any = canvasRef.current
        const rect = canvas.getBoundingClientRect()

        ctxRef.current.lineTo(
            e.clientX - rect.left,
            e.clientY - rect.top
        )
        ctxRef.current.stroke()
    }


    return(
        <div>

            <h2>Paint</h2>

            <div className="card card-bordered border-2 border-yellow-400">

                <PaintMenu setLineColor={setLineColor} setLineWidth={setLineWidth} setLineOpacity={setLineOpacity}></PaintMenu>
                <canvas ref={canvasRef} onMouseUp={endDrawing} onMouseDown={startDrawing} onMouseMove={draw} width={`640px`} height={`480`}></canvas>

            </div>

        </div>
    )
}

export default PaintCanvas