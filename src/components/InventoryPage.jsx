import React, { useState, useEffect } from 'react';
import {
    Container,
    Box,
    Button,
    Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainLayout from './MainLayout';
import InventoryTabs from './InventoryTabs';
import InventoryStepper from './InventoryStepper';
import CategoryList from './CategoryList';
import InventoryAccordionList from "./InventoryAccordionList";
import { useSelector, useDispatch } from "react-redux";
import ViewItemsDialog from './ViewItemsDialog';
import InventoryDashboard from './InventoryItemCard';
import { addCategory } from '../store/categorySlice';
import InventoryFooter from './InventoryFooter';

function getSteps() {
    return ['Select Inventory', 'Add Inventory'];
}

const InventoryPage = () => {
    const navigate = useNavigate();
    const categories = useSelector((state) => state.categories.categories);
    const [activeTab, setActiveTab] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const [expandedPanel, setExpandedPanel] = useState(null);
    const [inventoryItems, setInventoryItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);



    const steps = getSteps();
    const dispatch = useDispatch();

    const addedItems = useSelector((state) => state.categories.inventoryItems);
    const totalQuantity = addedItems.reduce((sum, item) => sum + item.quantity, 0);


    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleNext = () => {
        if (activeStep === 1) {
            setOpenAlert(true)
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedPanel(isExpanded ? panel : null);
    };

    const handleGoBack = () => {
        navigate('/')
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const apiUrl = 'https://mocki.io/v1/a54f151c-1900-4afb-8554-f2e087ebf5ca';
    const rosourceUrl = 'https://mocki.io/v1/ce781e32-6b05-42be-88b4-8cde32c8e1ba'


    useEffect(() => {
        const fetchInventoryItems = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setInventoryItems(data.inventoryItems)
            } catch (error) {
                console.error('Failed to fetch inventory items:', error);
            }
        };

        const fetchResources = async () => {
            try {
                const response = await fetch(rosourceUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log('data', data)
                dispatch(addCategory(data));
            } catch (error) {
                console.error('Failed to fetch inventory items:', error);
            }
        };

        fetchInventoryItems();
        fetchResources();
    }, []);

    console.log('steps', steps)

    return (
        <MainLayout handleBack={handleBack} name={activeStep === 0 ? 'Select Inventory' : 'Add Inventory'} activeStep={activeStep}>
            
            <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', 
      }}
    >
            <Container sx={{ mt: 5 }}>
                <InventoryTabs activeTab={activeTab} handleTabChange={handleTabChange} />
                {activeStep === 0 && (
                    <CategoryList categories={categories} />
                )}
                {activeTab === 0 ? <InventoryAccordionList
                    categories={categories}
                    expandedPanel={expandedPanel}
                    handleAccordionChange={handleAccordionChange}
                    activeStep={activeStep}
                    items={inventoryItems} /> : <InventoryDashboard item={inventoryItems} />}
            </Container>
            
            <Box sx={{ mt: 'auto' }}>
        <InventoryFooter
          activeStep={activeStep}
          steps={steps}
          totalQuantity={totalQuantity}
          handleBack={handleBack}
          handleNext={handleNext}
          handleOpen={handleOpen}
        />
      </Box>
    </Box>
     
            {open && <ViewItemsDialog open={open} handleClose={handleClose} />}

        </MainLayout>
    );
};

export default InventoryPage;