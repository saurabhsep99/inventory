import React from 'react';
import { Drawer, List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, Box, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

const ViewItemsDrawer = ({ open, handleClose }) => {
  const inventoryItems = useSelector((state) => state.categories.inventoryItems);

  return (
    <Drawer
      anchor="bottom" 
      open={open}
      onClose={handleClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          maxWidth: 'sm', 
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          padding: '16px',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>Added Items</Box>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      
      <List sx={{ pt: 0 }}>
        {inventoryItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/vite.svg" />
        </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${item.quantity}`}
              sx={{ marginLeft: 1 }} // Add a little spacing between the avatar and the text
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default ViewItemsDrawer;
