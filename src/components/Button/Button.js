import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Button extends Component { 

state={
    text: ''
}

onClick = (e) =>{
    this.props.getFact(this.state.text)
}

render(){
    return(
        <div>
            <button onClick={this.onClick}>GET FACT</button>
    <h1>{this.text}</h1>
        </div>
    )
}


}

export default Button