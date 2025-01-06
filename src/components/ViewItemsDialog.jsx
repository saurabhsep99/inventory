import React from 'react';
import { Dialog, DialogTitle, List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, Box, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

const ViewItemsDialog = ({ open, handleClose }) => {
    const inventoryItems = useSelector((state) => state.categories.inventoryItems);

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            {/* Dialog Title with Close Button */}
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>Added Items</Box>
                <IconButton onClick={handleClose} size="small">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
        <Divider/>
            {/* List of Items */}
            <List sx={{ pt: 0 }}>
                {inventoryItems.map((item) => (
                    <ListItem  disablePadding key={item.id}>
                        <ListItemAvatar>
                            <Avatar sx={{marginLeft:'12px'}}>{item.name[0]}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.name}
                            secondary={`Quantity: ${item.quantity}`}
                            sx={{ marginLeft: 1 }} // Add a little spacing between the avatar and the text
                        />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
};

export default ViewItemsDialog;
