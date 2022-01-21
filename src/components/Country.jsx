import React, { Component } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import RemoveIcon from '@mui/icons-material/Remove';



class Country extends Component {
   state = { 
       name: this.props.country.country,
       gold: this.props.country.gold,
    }

    // helper method
    renderMedals(gold) {
    return (gold === undefined || gold === null || gold < 0 ? 0 : gold);
    }

    handleIncrement = () => {
        this.setState({gold: this.state.gold + 1})
      }
    
      handleDecrement = () => {
          if(this.state.gold >= 0){
            this.setState({gold: this.state.gold - 1})
          }
      }

    

   render() { 
     return ( 
        
        <div style={{ width: '250px',  margin: '0 auto', paddingTop: '30px' }}>
            <Card variant="outlined" style={{ backgroundColor: 'lightPink', width:'250px', boxShadow: '10px 10px 5px grey' }}>
                <div className="Country" style={{ color: 'white' }}>{this.state.name}</div>
                <Divider variant="middle" />
                <div className="Country" style={{ color: 'white' }}> 
                    Gold Medals: {this.renderMedals(this.state.gold)}
                </div>
                <Button style={{ color: 'white' }} onClick={this.handleIncrement} startIcon={<AddIcon />}>Add</Button>
                <Button style={{ color: 'white' }} onClick={this.handleDecrement} startIcon={<RemoveIcon />}>Remove</Button>
            </Card>
        </div>
        
     
    );
   }
 }

 export default Country
