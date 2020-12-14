import React, { Component } from 'react';

class Counter extends Component {
    //state = {  }
    render() { 
        return (
            //we must have one parent element to contain our react application
        //instead of the div, we could use React.fragment, this prevents having an unnecessary div
        <div>
            <h1>hey buddu</h1>
            <button>increment</button> 
        </div>
        );
    }
}
 
export default Counter;