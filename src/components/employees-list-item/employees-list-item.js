// import { useState } from 'react';
import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, rise, active,onDelete, onToggleProp} = props; //деструктиризация
    // const [a, setA] = useState(active);
    // const[star, setStar] = useState(true);


    
    // let makeActive = ( ) => {
    //     a ? setA(false) : setA(true);
    // }


    // let giveStar = () =>{
    //     star ? setStar(false) : setStar(true);
    // }

    let classNames = 'list-group-item d-flex justify-content-between';
 
    if(active){
        classNames += ' increase';
    }
    if(rise){
        classNames += ' like';
    }
    return (
        <li className={classNames}>
            <span data-toggle="rise" onClick={onToggleProp} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    data-toggle = "active"
                    onClick={onToggleProp}>
                    <i  className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;