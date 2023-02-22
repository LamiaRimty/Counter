
import React, { Component } from 'react';

class Counter extends Component {
    state = {     
       count:this.props.counter.value,
        // tags:[]   
     };
   
          
     handleIncrement=()=>{
        this.setState({count:this.state.count+1});
     };
    changeCount(){
        const { count} =this.state; //destructring the property ,storing it in a separate const count 
        return count === 0 ? "Zero" :count ;
    }
    getBadgeclasses() {
        let countClass = "badge m-2 bg-";
        countClass += this.state.count === 0 ? "warning" : "primary";
        return countClass;
    }

    doHundleIncrement=()=>{
      this.handleIncrement({id:this.state.count});
     }
    render() {         
  return ( 
       <div>
                 <h4>Counter {this.props.counter.id}</h4>
                 <span className={this.getBadgeclasses()} >{this.changeCount()}</span>
                 <button 
                 onClick={this.doHundleIncrement}
                className="btn btn-secondary btn-sm m-2"
                >Increment
                </button>

                <button 
                onClick={()=> this.props.onDelete(this.props.counter.id)}
                className='btn btn-danger btn-sm m-2'
                
                >Delete</button>
             {/* <ul>
                { this.state.tags.map((tag)=> 
                    <li key={tag.id}  >{tag}</li>
                 ) }
             </ul> */}
             </div>
            );
    }
}
 
export default Counter;