import React, {useState} from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    CssBaseline,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppDrawer from './AppDrawer';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

const MainLayout = ({ children }) => {
      const [drawerOpen, setDrawerOpen] = useState(false);
       const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };
    return (
        <>
            <CssBaseline />
             <Box sx={{ backgroundColor: '#f9fafb', minHeight: '100vh'}}>
                 <AppBar
                    position="static"
                    elevation={0}
                    sx={{
                        backgroundColor: 'transparent',
                        color: 'black',
                        py: 1,
                    }}
                >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderRadius: 2,
                            backgroundColor: 'white',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            mx: 'auto',
                            width: '100%',
                            px: { xs: 2, md: 3 },
                            minHeight: '50px'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2, display: { md: 'none' } }}
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" sx={{ fontWeight: 600, mr: 2 }}>
                                Happy<span style={{color:'red'}}>Locate</span>
                            </Typography>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                                 <Button color="inherit" component={Link} to="/">Home</Button>
                                <Button color="inherit" component={Link} to="/inventory">Inventory</Button>
                            </Box>
                        </Box>
                    </Toolbar>
                 </AppBar>
               <AppDrawer open={drawerOpen} onClose={handleDrawerToggle} />
                {children}
            </Box>
        </>
    );
};

export default MainLayout;