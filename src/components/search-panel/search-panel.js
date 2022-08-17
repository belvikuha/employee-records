import { Component } from 'react';

import './search-panel.css';
import { useState } from 'react';
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr : ''
        }

    }

    onUpdateChange =(e)=>{
        const searchStr = e.target.value;
        this.setState({searchStr});
            
        this.props.onInputSearchStr(searchStr);
    }
    // const [searchStr, setsearchStr] = useState("");
    
    //console.log(searchStr);

    // const onChangeSearchStr = (sfs) =>{
    //     onInputSearchStr(searchStr);
    // }
render(){
    return (
        <input type="text"
                value = {this.state.searchStr}
                onChange={this.onUpdateChange}
                
                // data-value= {subStr}
                className="form-control search-input"
                placeholder="Найти сотрудника"/>
    )
}
}
export default SearchPanel;