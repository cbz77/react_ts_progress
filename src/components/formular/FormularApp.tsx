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

                <form className="form-control">

                    <div className="flex flex-col gap-2">
                        <div>
                            <input type="text" name="name" className="input input-bordered w-full" placeholder="Jméno" onChange={handleChange} required/>
                        </div> 
                    </div>

                    <div className="divider"></div>
                    
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
                        <input type="range" name="range" className="range" min={0} max={255} onChange={handleChange}/>
                    </div>

                    {toggle && 
                        <div style={{backgroundColor: 'rgb('+range+', 0, 0)'}} className="bg-red-400 w-full h-10 mt-2 rounded text-center text-yellow-200 flex justify-center items-center">R</div>
                    }

                    <div className="divider"></div>

                    {nameError && 
                        <div role="alert" className="alert alert-error mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>
                            {nameError}
                            <button className="btn btn-sm btn-ghost" onClick={() => setNameError('')}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    }

                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

                </form>

            </div>

        </div>
    )
} 

export default FormularApp