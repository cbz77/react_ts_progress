
interface PaintMenuProps{
    setLineColor: any,
    setLineWidth: any,
    setLineOpacity: any
}

const PaintMenu: React.FC<PaintMenuProps> = ({setLineColor, setLineWidth, setLineOpacity}) => {

    return(
        <div className="paint_menu">

            <label>Brush color:</label>
            <input type="color" onChange={(e: any) => {setLineColor(e.target.value)}}></input>

            <label>Brush width:</label>
            <input type="range" min={3} max={20} onChange={(e: any) => {setLineWidth(e.target.value)}}></input>

            <label>Brush opacity:</label>
            <input type="range" min={1} max={100} onChange={(e: any) => {setLineOpacity(e.target.value / 100)}}></input>

        </div>
    )
}

export default PaintMenu