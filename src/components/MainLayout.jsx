import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    CssBaseline,
    Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children,name='Select Inventory',handleBack,activeStep  }) => {
    const navigate = useNavigate();

    return (
        <>
            <CssBaseline />
            <Box sx={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
                <AppBar
                    position="sticky"
                    elevation={0}
                    sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        py: 1,
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            minHeight: '50px',
                            px: 2,
                        }}
                    >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="back"
                            onClick={() => {
                                if (activeStep > 0) {
                                  handleBack();
                                } else {
                                  // Redirect to Google
                                  window.location.href = 'https://www.google.co.in/';
                                }
                              }}                            sx={{ mr: 2 }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                textAlign: 'center',
                                flexGrow: 1,
                            }}
                        >
                            {name}
                        </Typography>
                        {/* Invisible placeholder for spacing */}
                        <Box sx={{ width: 48 }} />
                    </Toolbar>
                    {/* Blue underline */}
                    <Box sx={{ height: '3px', backgroundColor: '#3b82f6',width:'50%' }} />
                </AppBar>
                {children}
            </Box>
        </>
    );
};

export default MainLayout;
