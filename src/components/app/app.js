import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data : [
        {name: 'Jhon', salary: 100, active: true,rise: true, id: 1},
        {name: 'Rusik', salary: 9000, active: false,rise: false,  id: 2},
        {name: 'Karl', salary: 2000, active: false,rise: false,  id: 3},
        {name: 'Poul', salary: 900, active: false,rise: false,  id: 4}
      ],
      searchStr: '',
      filterProp: ''
    }
    this.maxId = 5;
  }

  deleteItem = (id) => {
    this.setState(({data}) =>{
      
      //// 1-й способ 
      // const index = data.findIndex(elem => elem.id === id ) 
      // const before = data.slice(0, index);
      // const after = data.slice(index+1);
      // const newArr = [...before , ...after];

      // 2-й способ
      const newArr = data.filter(item=> item.id!==id) 



      return{
        data: newArr
      }
    })
  }

  addItem = (name, salary) =>{
    if(name.length >=2 && salary >1){
      const person = {
      name: name,
      salary: salary,
      active: false,
      rise: false,
      id: this.maxId
    }
      this.setState(({data})=>{
      const newArr = [...data, person];
      return{
        data: newArr
      }
    })
    this.maxId++;
    }
    
  }

  // onToggleIncreese = (id) =>{
  //   this.setState(({data})=>({
  //       data: data.map(item =>{
  //           if(item.id === id){
  //             return {...item, active: !item.active}
  //           }
  //           return item;
  //       })
  //   }))
  // }
  // onToggleRise =(id) =>{
  //   this.setState(({data})=>({
  //     data: data.map(item =>{
  //         if(item.id === id){
  //           return {...item, rise: !item.rise}
  //         }
  //         return item;
  //     })
  // }))
  // }

  onToggleProp = (id, prop) =>{
    this.setState(({data})=>({
      data: data.map(item =>{
          if(item.id === id){
            return {...item, [prop]: !item[prop]}
          }
          return item;
      })
  }))
  }


  searchFilteredProp = (empls, prop) =>{
      switch (prop){
          case '0':
            return empls;
          case 'rise':
            return empls.filter(emp =>emp.rise);
          case 'salary':
            return empls.filter(emp =>emp.salary > 1000);
          default:
            return empls;
      }
  }

  searchEmpl =(empl, str)=>{
    if(str.length === 0 )
      return empl;
    return empl.filter(item=>{
      return item.name.indexOf(str) > -1 
    })
  }

  setSearchStr = (str) => {
   this.setState({searchStr:str});
  }
  setFilterProp = (prop) => {
    this.setState({filterProp: prop});
   }
 
  render(){
    const {data, searchStr, filterProp} = this.state;
    const visibleData = this.searchFilteredProp(this.searchEmpl(data, searchStr),filterProp);

    // let visDat =this.searchEmpl2(data);
    // console.log( visDat) 
    const numberOfEmpl = data.length;
    const numberOfEmplStar = data.filter(empl =>empl.active).length;
    return (
    <div className="app">
        <AppInfo 
        numberEmpl={numberOfEmpl}
        numberStarEmpl = {numberOfEmplStar}
        />

        <div className="search-panel">
            <SearchPanel
              onInputSearchStr={this.setSearchStr}
              // {(e)=>this.setSearchStr(e.currentTarget.getAttribute('value'))}
            />
            <AppFilter
            onFilterProp = {
              (e)=> this.setFilterProp(e.currentTarget.getAttribute('data-filter'))
            }
            filter = {filterProp}
            />
        </div>
        
        <EmployeesList data={visibleData} 
        onDelete={this.deleteItem}
        onToggleProp= {this.onToggleProp}
        
        />
        <EmployeesAddForm
        onAdd={this.addItem}/>
    </div>
  )
  }
  

  
}

export default App;
