import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button
} from '@mui/material';

const CategoryDialog = ({ open, onClose, onSave, categories }) => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryNumber, setCategoryNumber] = useState('');
    const [nameError, setNameError] = useState('');

    const handleSave = (closeDialog) => {
        const isDuplicated = categories.some(category => category.name === categoryName);

       if(isDuplicated){
            setNameError('Category name already exists, please use a different one')
           return;
       }else{
            setNameError('');
       }


        onSave({ name: categoryName, number: parseInt(categoryNumber, 10) });
        if (closeDialog) {
          onClose();
        }
        setCategoryName('');
        setCategoryNumber('');
    };

     const handleClose = () => {
      setCategoryName('');
      setCategoryNumber('');
       setNameError('');
      onClose();
    };


    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>House Details</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    size='small'
                    style={{marginTop:'10px',marginBottom:'10px'}}
                    id="categoryName"
                    label="Part of house"
                    type="text"
                    fullWidth
                    error={!!nameError}
                    helperText={nameError}
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
                <TextField
                    size='small'
                    style={{marginTop:'10px'}}
                    id="quantity"
                    label="Quantity"
                    type="number"
                    fullWidth
                    value={categoryNumber}
                    onChange={(e) => setCategoryNumber(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} size='small' color="primary">
                    Close
                </Button>
                <Button variant='contained' size='small' onClick={() => handleSave(true)} color="primary">
                  Save
                </Button>
              <Button variant='contained' size='small' onClick={() => handleSave(false)} color="primary">
                Save and Add
               </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CategoryDialog;