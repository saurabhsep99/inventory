import React from 'react';
import { useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, ListItemButton, Box, Button, Typography } from '@mui/material';
import { removeCategory, incrementCategoryNumber, decrementCategoryNumber } from '../store/categorySlice';

const CategoryList = ({ categories }) => {
    const dispatch = useDispatch();

    const handleRemoveCategory = (index) => {
        dispatch(removeCategory(index));
    };

    const handleIncrementCategory = (index) => {
        dispatch(incrementCategoryNumber(index));
    };

    const handleDecrementCategory = (index) => {
        const category = categories.find((category, categoryIndex) => categoryIndex === index);
        if (category && category.number <= 1) {
            dispatch(removeCategory(index));
        } else {
            dispatch(decrementCategoryNumber(index));
        }
    };

    return (
      <List sx={{ mt:3 }}>
          {categories.map((category, index) => (
            <ListItem key={index}
              secondaryAction={
                <Box sx={{display:'flex', alignItems:'center'}}>
                  <Button sx={{minWidth:'30px', p:'0px', borderRadius:'50%', color:'black', border:'1px solid black', '&:hover':{color:'grey', borderColor:'grey'}}} onClick={() => handleDecrementCategory(index)}>-</Button>
                  <Typography sx={{px:1}}>{category.number}</Typography>
                  <Button sx={{minWidth:'30px', p:'0px', borderRadius:'50%', color:'black', border:'1px solid black', '&:hover':{color:'grey', borderColor:'grey'}}} onClick={() => handleIncrementCategory(index)}>+</Button>
                 </Box>
              }
             >
               <ListItemButton>
                <ListItemText primary={category.name} />
               </ListItemButton>
           </ListItem>
          ))}
       </List>
    );
};

export default CategoryList;