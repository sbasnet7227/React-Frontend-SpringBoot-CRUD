import React, { Component } from 'react'

export default class HomeComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    
        this.viewEmployeeList = this.viewEmployeeList.bind(this)
    }
    viewEmployeeList(){
        this.props.history.push('/employees'); 
      }
    render() {
        return (
           <div>
                <button style= {{marginTop: "20px"}} className="btn btn-primary"  onClick={this.viewEmployeeList}>View Employee List</button>
                   
           </div> 
        
        )
    }
}
