import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@mui/icons-material/Add';


const NewCountry = (props) => {
    // state = {
    //     newCountryName: '',
    //     open: false,
    // }
    const [ newCountryName, setNewCountryName ] = useState('');
    const [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        setNewCountryName('');
    }

    const handleClose = () => {
        setOpen(false);
    }

    
    //handleChange = (e) => this.setState({ [e.target.name]: e.target.value});

    const saveCountry = (e) => {
        e.preventDefault();
        props.saveCountry(newCountryName);
        setOpen(false);
    } 
    


        return (
            <div>
                <Button variant="outlined" style={{ color: 'black', margin: '30px' }} onClick={handleOpen} 
                startIcon={<AddIcon />}> New Country</Button>

                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={(e) => saveCountry(e) }>
                        <DialogTitle>Enter Country Name</DialogTitle>
                        <DialogContent>
                            <TextField
                            autoFocus
                            type="text"
                            id="newCountryName"
                            name="newCountryName"
                            value={ newCountryName }
                            onChange={ (e) => setNewCountryName(e.target.value) }
                            margin="dense"
                            label="Country Name"
                            fullWidth
                            variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button disabled={ newCountryName.trim().length === 0 } type="submit" onClick={saveCountry}>Add</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
    
  }


export default NewCountry;
