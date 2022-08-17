import "./app-info.css";

const AppInfo = ({numberEmpl, numberStarEmpl} ) => {



    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {numberEmpl}</h2>
            <h2>Премию получат: {numberStarEmpl}</h2>
        </div>
    )
}

export default AppInfo;