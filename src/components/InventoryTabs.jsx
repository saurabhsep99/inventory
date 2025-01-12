import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const InventoryTabs = ({ activeTab, handleTabChange }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f9fafb', p: 1, borderRadius: '12px' }}>
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                aria-label="inventory-tabs"
                TabIndicatorProps={{
                    style: { display: 'none' }, // Hides default indicator
                }}
                sx={{
                    minHeight: 'unset',
                    '& .MuiTab-root': {
                        textTransform: 'none',
                        fontWeight: 500,
                        fontSize: '14px',
                        minHeight: 'unset',
                        minWidth: 'unset',
                        px: 2, // Padding X
                        py: 1, // Padding Y
                        borderRadius: '12px',
                        transition: 'background-color 0.3s, color 0.3s',
                    },
                    '& .MuiTab-root.Mui-selected': {
                        backgroundColor: '#3b82f6', // Blue for active tab
                        color: 'white',
                    },
                    '& .MuiTab-root:not(.Mui-selected)': {
                        backgroundColor: 'transparent', // No background for inactive tab
                        color: 'black',
                    },
                }}
            >
                <Tab label="Room Wise" />
                <Tab label="Categories Wise" />
            </Tabs>
        </Box>
    );
};

export default InventoryTabs;