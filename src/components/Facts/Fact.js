import React, { Component } from 'react'
import PropTypes from 'prop-types';

const Fact =({randomFact})=>{

Fact.propTypes={
      randomFact: PropTypes.array.isRequired, 
}
// const mapped = randomFact.map(fact=>(
//     <p>{fact}</p>
//     ))
   return(
       
           <div>
               {randomFact}
           </div>
       
   )

   

}
export default Fact