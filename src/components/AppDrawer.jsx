import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from "react-router-dom";

const AppDrawer = ({ open, onClose }) => {
    return (
        <Drawer
            variant="temporary"
            open={open}
            onClose={onClose}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{ display: { md: 'none' } }}
        >
            <List sx={{ padding: 0 }}>
                <ListItem
                    component={Link}
                    to="/"
                    sx={{ padding: '8px 16px' }}
                >
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                    component={Link}
                    to="/inventory"
                    sx={{ padding: '8px 16px' }}
                >
                    <ListItemText primary="Inventory" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default AppDrawer;