import React from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Medal from './Medal';
import Badge from '@mui/material/Badge';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';



const Country = (props) => {
    const { onDelete, country, medals, id, handleIncrement, handleDecrement } = props;

    const totalCountryMedals = (country, medals) => {
        let total = 0;
        medals.forEach(medal => {total += country[medal.name];});
        return total;
    }


 
     return ( 
        
        <div style={{ width: '250px', padding: '20px'}}>
            <Card variant="outlined" style={{ backgroundColor: 'lightPink', width:'250px', boxShadow: '10px 10px 5px grey', padding: '15' }}>
                <div className="Country" style={{ color: 'white' }}>
                    <Button style={{ color: 'white' }} onClick={ () => onDelete(id) } startIcon={<DeleteIcon />}></Button>
                    {country.name}  <Badge className="Badge" badgeContent={totalCountryMedals(country, medals)} color="secondary"></Badge>
                </div> 
                <Divider variant="middle" />
                { props.medals.map(medal => 
                <Medal 
                    key={ medal.id } 
                    country={ country }
                    medal={medal}
                    handleIncrement={handleIncrement }
                    handleDecrement={handleDecrement }
                    />
                )}
                
            </Card>
        </div>
        
     
    );
   }
 

 export default Country
