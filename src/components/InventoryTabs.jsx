import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const InventoryTabs = ({ activeTab, handleTabChange }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Tabs value={activeTab} onChange={handleTabChange} aria-label="inventory-tabs">
                <Tab label="Room Wise" />
                <Tab label="Categories Wise" />
            </Tabs>
        </Box>
    );
};

export default InventoryTabs;