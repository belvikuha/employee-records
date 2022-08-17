// import './employees-add-form.css';
import './employees-add-form.scss';


import { useState } from 'react';
const EmployeesAddForm = ({onAdd}) => {

    const [name, setName] = useState();
    const [salary, setSalary] = useState();


    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                onSubmit={(e)=>{
                    e.preventDefault();
                    
                    onAdd(name, salary)
                }}
                className="add-form d-flex">
                <input type="text"
                    onChange={(e) => {setName(e.target.value);}}
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    value ={name} />
                <input type="number"
                    onChange={(e) =>{ setSalary(e.target.value)}}
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    value = {salary} />

                <button type="submit"
                        className="btn btn-outline-light"
                        >
                            Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;