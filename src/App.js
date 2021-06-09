import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js'
import './App.css';
import ImageFormLink from './Components/ImageFormLink/ImageFormLink.js';
import Rank from './Components/Rank/Rank.js';
import Particles from 'react-particles-js';

class App extends Component{
  constructor(){
    super();
    this.state={
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit=()=>{
    console.log('click');
  }
  render(){
  return (
    <div className="App">
        <Particles className="particles"
              params={{
            		particles: {
            		number:{
                  value:65,
                  density:{
                    enable:true,
                    value_area: 800
                  }
                }
            		}
            	}}
              
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageFormLink 
      onInputChange={this.onInputChange}
      onButtonSubmit={this.onButtonSubmit}
      />
    </div>
  );
}
}

export default App;
