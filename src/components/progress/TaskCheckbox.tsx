
interface TaskCheckboxProps {
    idCheckboxu: string,
    textCheckboxu: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TaskCheckbox: React.FC<TaskCheckboxProps> = ({idCheckboxu, textCheckboxu, onChange}) => {

    return(
        <div className='form-control mt-5'>
          <label htmlFor={idCheckboxu} className='label'>
            <input type="checkbox" name={idCheckboxu} id={idCheckboxu} className='checkbox' onChange={onChange}/>
            <span className='label-text'>{textCheckboxu}</span>
            </label>
        </div>
    )
}

export default TaskCheckbox