import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

const Medal = (props) => {
    const { medal, country, handleDecrement, handleIncrement } = props;


    // helper method
    const renderMedals = (medal) => medal === undefined || medal === null || medal < 0 ? 0 : medal;
        


         return ( 
            <div className="Country" style={{ color: 'white' }}> 
                {medal.name} Medals: {renderMedals(country[medal.name])}<br/>
                <Button style={{ color: 'white' }} onClick={ () => handleIncrement(country.id, medal.name) } startIcon={<AddIcon />}>Add</Button>
                <Button style={{ color: 'white' }} onClick={ () => handleDecrement(country.id, medal.name) } startIcon={<RemoveIcon />}>Remove</Button>
            </div>
        );
    }


export default Medal