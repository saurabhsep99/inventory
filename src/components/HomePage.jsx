import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    Typography,
    Button,
} from '@mui/material';
import { addCategory } from '../store/categorySlice';
import CategoryDialog from './CategoryDialog';
import MainLayout from "./MainLayout";


const HomePage = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const categories = useSelector((state) => state.categories.categories);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleSaveCategory = (category) => {
        dispatch(addCategory(category));
        
    };

    return (
         <MainLayout>
            <Container
                maxWidth="md"
                sx={{
                    mt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <Typography variant="body1" paragraph sx={{ mt: 3 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </Typography>

                <Button variant="contained" color="primary" onClick={handleOpen}>
                    Add details
                </Button>
                   <CategoryDialog
                    open={open}
                    onClose={handleClose}
                    onSave={handleSaveCategory}
                    categories={categories}
                    />
            </Container>
        </MainLayout>
    );
};

export default HomePage;