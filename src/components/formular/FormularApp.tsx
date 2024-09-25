import { useState } from "react"

const FormularApp = () => {

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [type, setType] = useState("type_1")
    const [range, setRange] = useState(0)
    const [toggle, setToggle] = useState(false)

    const handleChange = (e: any) => {

        switch(e.target.name){
            case 'name':
                setName(e.target.value)
                break

            case 'type':
                setType(e.target.value)
                break

            case 'range':
                setRange(e.target.value)
                break

            case 'toggle':
                setToggle(e.target.checked)
                break

            default:
                break
        }

        
    }

    const handleSubmit = (e: any) => {

        if(!name.trim()){
            setNameError('Jméno je povinné')
            return
        }

        setNameError('')
        e.preventDefault()

        console.log({name, type, range})
    }

    return (
        <div className="component_FormularApp">

            <div className="container mx-auto max-w-md">

                <form className="form-control w-full max-w-xs">

                    <div className="flex flex-col gap-2">
                        <div>
                            <input type="text" name="name" className="input input-bordered w-full max-w-xs" placeholder="Jméno" onChange={handleChange} required/>
                        </div> 
                    </div>
                    
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Typ 1</span>
                            <input type="radio" name="radio-1" className="radio" value="type_1" checked={type === "type_1"} onChange={handleChange}/>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Typ 2</span>
                            <input type="radio" name="radio-1" className="radio" value="type_2" checked={type === "type_2"} onChange={handleChange}/>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Typ 3</span>
                            <input type="radio" name="radio-1" className="radio" value="type_3" checked={type === "type_3"} onChange={handleChange}/>
                        </label>
                    </div>

                    <div className="divider"></div>

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">ON / OFF</span>
                            <input type="checkbox" name="toggle" className="toggle" checked={toggle} onChange={handleChange}/>
                        </label>
                    </div>

                    <div className="form-control">
                        <input type="range" name="range" className="range" min={0} max={500} onChange={handleChange}/>
                    </div>

                </form>

                {nameError && 
                    <div role="alert" className="alert alert-error m-2">{nameError}</div>
                }
                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

                <div className="divider"></div>

                {toggle && 
                    <div style={{width: range + "px", height: "100px"}} className="bg-red-400"></div>
                }
                

            </div>

        </div>
    )
} 

export default FormularApp