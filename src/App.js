import React, { Component } from 'react';
import Country from './components/Country';
import './App.css';

class App extends Component {
  state = {
    countries: [
      { id: 1, country: 'United States', gold: 2 },
      { id: 2, country: 'China', gold: 3 },
      { id: 3, country: 'Germany', gold: 0 },
    ]
  }

  

  render() { 
    return ( 
      <div className="App">
        { this.state.countries.map(country => 
          <Country 
            key={ country.id } 
            country={ country } 
             />
        )}
      </div>
     );
  }
}
 
export default App;
