import React from 'react';
// import {Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchResults from './components/SearchResults';

class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '', search: false, res:[]};
    
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange = (e)=>{
        this.setState({value: e.target.value, search:false});
    }

    handleSubmit = async()=>{
        let res = await this.search();
        res= res.medicines;
        this.setState({search: true,
            res: res
        }); 
       
    }


    search = async()=>{
        let response = await fetch(`http://localhost:4100/v1/medicineInfo?name=${this.state.value}`);
        return await response.json();
    }



    render() {
        return (
            <div className="container row">
                <nav className="col-sm-12 navbar nav-style navbar-expand-lg">
                <NavBar/>
                </nav>
                <div className="col-sm-4">
                    <label>Enter medicine to search</label>
                </div>
                <div className="col-sm-4">
                    <input className="form-control"
                     type="text" 
                    onChange ={this.handleChange}
                    //  value={this.state.value}
                    placeholder="Enter here to search"/> 
                </div>
                <div className="col-sm-2">
                    <button onClick={this.handleSubmit}>
                        Search
                    </button>
                </div>
                <div className="col-sm-8">
                {/* <h1>hi</h1> */}

                </div>
            {this.state.search && <SearchResults results={this.state.res}/> }
              
            </div>
        );
    }
}

export default SearchPage;