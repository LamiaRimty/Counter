
import React, { Component } from 'react';

class Counter extends Component {
    state = {     
        count:0,
        tags:["tag1","tag2","tag3"]   
     };

    //  constructor(){
    //     super();
    //    this.handleIncrement.bind=this.handleIncrement(this);
    //  }

    changeCount(){
        const { count} =this.state; //destructring the property ,storing it in a separate const count 
        return count === 0 ? 0 :count ;
    }
    getBadgeclasses() {
        let countClass = "badge m-2 bg-";
        countClass += this.state.count === 0 ? "warning" : "primary";
        return countClass;
    }


    handleIncrement=(product)=>{
        console.log(product);
       this.setState({count: this.state.count+1});
    };
    render() { 
  return ( 
  <div>
                 <span className={this.getBadgeclasses()} >{this.changeCount()}</span>
                 <button 
                 onClick={()=> this.handleIncrement(product)}
                className="btn btn-secondary btn-sm"
                >Increment
                </button>
             <ul>
                { this.state.tags.map((tag)=> 
                    <li key={tag.id}  >{tag}</li>
                 ) }
             </ul>
             </div>
            );
    }
}
 
export default Counter;