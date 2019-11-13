import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import Fact from './components/Facts/Fact';
import Button from './components/Button/Button';
import './App.css';
import axios from 'axios';

class App extends Component{
 state={
   background: 'red',
   randomFact: [],
 }

 getFact = async fact =>{
   const res = await axios.get('https://api.chucknorris.io/jokes/random')
    console.log(res.data)
   this.setState({ randomFact: res.data.value}, console.log(this.randomFact))
   console.log(fact)
   console.log(res.data.value)
   

  }
  render(){
    const {randomFact} = this.state;
    return(
    <div className='App'>
      <Router>
      <Nav/>
      <div className='container'>
        <Switch>
          <Route exact path='/' render={props =>(
            <Fragment>
            <Fact randomFact={randomFact} />
            <Button getFact={this.getFact} />
            </Fragment>
          )}/>
        </Switch>
      </div>
      </Router>
    </div>
    )
  }
}

export default App