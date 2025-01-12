import React, { useState } from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Box,
    TextField,
    Grid,
    Chip,
    InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import {
    addInventoryItem,
    incrementInventoryQuantity,
    decrementInventoryQuantity,
} from '../store/categorySlice';


const InventoryitemsCard = ({ items, categoryId }) => {
    const dispatch = useDispatch();
    const inventory = useSelector((state) => state.categories.inventoryItems);

    // Find the item's quantity from the Redux store for the specific category
    const existingItem = inventory.find((data) => data.name === items.name && data.categoryId === categoryId);
    const quantity = existingItem ? existingItem.quantity : 0;

    const handleAddCategory = () => {
        if (!existingItem) {
            dispatch(addInventoryItem({ name: items.name, imageUrl: items.imageUrl, categoryId }));
        } else {
            dispatch(incrementInventoryQuantity({ name: items.name, categoryId }));
        }
    };

    const handleIncrement = () => {
        dispatch(incrementInventoryQuantity({ name: items.name, categoryId }));
    };

    const handleDecrement = () => {
        dispatch(decrementInventoryQuantity({ name: items.name, categoryId }));
    };

    return (
        <Card sx={{ mb: 2, display: 'flex', flexDirection: 'column', ml: 2 }}>
            <CardMedia
                component="img"
                height="200"
                image={`/${items?.name}.jpg`}
                alt={items?.name}
                sx={{ objectFit: 'contain' }}
            />
            <CardContent>
                <Typography variant="h6" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {items?.name}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                {quantity > 0 ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Button sx={{borderRadius:'50%',minWidth:'25px'}} variant="outlined" size="small" onClick={handleDecrement}>-</Button>
                        <Typography>{quantity}</Typography>
                        <Button  sx={{borderRadius:'50%',minWidth:'25px'}} variant="outlined" size="small" onClick={handleIncrement}>+</Button>
                    </Box>
                ) : (
                    <Button variant="contained" color="primary" size="small" onClick={handleAddCategory}>Add</Button>
                )}
            </CardActions>
        </Card>
    );
};

const InventoryDashboard = ({ item,categoryId }) => {

    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);

    const uniqueCategories = [...new Set(item.map((items) => items.category))];

    const filtereditems = item.filter((items) =>
        (selectedCategory ? items.category === selectedCategory : true) &&
        items.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box sx={{ padding: 2, width: '100%' }}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Search Inventory"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    mb: 3,
                    borderRadius: '50px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '50px',
                    },
                }}
            />

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                <Chip
                    label="All"
                    clickable
                    onClick={() => setSelectedCategory(null)}
                    color={!selectedCategory ? 'primary' : 'default'}
                />
                {uniqueCategories.map((category) => (
                    <Chip
                        key={category}
                        label={category}
                        clickable
                        onClick={() => setSelectedCategory(category)}
                        color={selectedCategory === category ? 'primary' : 'default'}
                    />
                ))}
            </Box>

            <Grid container spacing={2}>
                {filtereditems.map((items) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={items.id}>
                        <InventoryitemsCard items={items} categoryId={categoryId} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default InventoryDashboard;
