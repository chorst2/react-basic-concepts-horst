import React, { useState, useEffect } from 'react';
import Country from './components/Country';
import NewCountry from './components/NewCountry';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import './App.css';

const App = () => {
  const [ countries, setCountries ] = useState([]);
  const [ medals, setMedals ] = useState([]);
  // state = {
  //   countries: [
  //     { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 4 },
  //     { id: 2, name: 'China', gold: 3, silver: 2, bronze: 0  },
  //     { id: 3, name: 'Germany', gold: 0, silver: 0, bronze: 2  },
  //   ],
  //   medals: [
  //     {id: 1, name: 'gold'},
  //     {id: 2, name: 'silver'},
  //     {id: 3, name: 'bronze'},
  //   ]
  // }
  useEffect(() => {
    let mutableCountries = [
      { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 4 },
      { id: 2, name: 'China', gold: 3, silver: 2, bronze: 0  },
      { id: 3, name: 'Germany', gold: 0, silver: 0, bronze: 2  },
    ];
    let mutableMedals = [
      {id: 1, name: 'gold'},
      {id: 2, name: 'silver'},
      {id: 3, name: 'bronze'},
    ];
    setCountries(mutableCountries);
    setMedals(mutableMedals);
  }, []);

  const handleIncrement = (countryID, medal) => {
    const countryIndex = countries.findIndex((c) => c.id === countryID);
    const countriesMutable = [...countries];
    countriesMutable[countryIndex][medal] += 1;
    setCountries(countriesMutable);
  }

  const handleDecrement = (countryID, medal) => {
    const countryIndex = countries.findIndex((c) => c.id === countryID);
    const countriesMutable = [...countries];
      if(countriesMutable[countryIndex][medal] >= 0){
        countriesMutable[countryIndex][medal] -= 1;
      }
    setCountries(countriesMutable);
  }

  const getTotalMedalsForAll = () => {
    const goldMedals = countries.reduce((a, b) => a + b.gold, 0);
    const silverMedals = countries.reduce((a, b) => a + b.silver, 0);
    const bronzeMedals = countries.reduce((a, b) => a + b.bronze, 0);
    return goldMedals + silverMedals + bronzeMedals;
  }

  const handleAdd = (newCountryName) => {
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    const mutableCountries = countries.concat({ id: id, name: newCountryName, gold: 0, silver: 0, bronze: 0});
    setCountries(mutableCountries);
  }

  const handleDelete = (countryId) => {
    const mutableCountries = countries.filter(c => c.id !== countryId);
    setCountries(mutableCountries);
  }

  

  
    return ( 
      <div className="App">
          <h1 className='Country'>Total Medals: {getTotalMedalsForAll()}</h1>
          <Container fixed={true} style={{paddingTop: '70px', paddingBottom: '20px'}}>
          <NewCountry saveCountry={ handleAdd } />
          <Grid spacing = {2} justifyContent='center' container>
            { countries.map(country =>
              <Grid item key={country.id}>
                <Country 
                  key={ country.id } 
                  id={ country.id }
                  country={ country }
                  medals={medals}
                  handleIncrement={ handleIncrement }
                  handleDecrement={ handleDecrement }
                  onDelete={handleDelete}
                  /> 
              </Grid>
            )}
          </Grid>
          </Container>
      </div>
     );
  }

 
export default App;
