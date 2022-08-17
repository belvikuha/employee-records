import "./app-filter.css";

const AppFilter = ({onFilterProp, filter}) => {

    const buttonsData = [
        {name: '0', label:' Все сотрудники'},
        {name: 'rise', label:'На повышение'},
        {name: 'salary', label:'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label})=> {
        const active = filter === name; //зесь будет либо true либо false 
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return(
            <button type="button"
                onClick={onFilterProp}
                data-filter={name}
                className={`btn ${clazz}`}>
             {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;