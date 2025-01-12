import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InventoryDashboard from "./InventoryItemCard";
import { useSelector } from 'react-redux';

const InventoryAccordionList = ({ categories, expandedPanel, handleAccordionChange, activeStep, items }) => {
  const inventoryItems = useSelector((state) => state.categories.inventoryItems);
  
  const handleClose = () => {
    setOpen(false);  
  };

  const generateAccordions = () => {
    const accordions = [];
    if (activeStep === 1) {
      for (const category of categories) {
        for (let i = 1; i <= category.number; i++) {
          const categoryId = `${category.name}-${i}`;
          const filteredInventoryItems = inventoryItems.filter((item) => item.categoryId === categoryId);
           const totalQuantity = filteredInventoryItems.reduce((sum, item) => sum + item.quantity, 0);
          accordions.push(
            <Accordion key={categoryId} expanded={expandedPanel === categoryId} onChange={handleAccordionChange(categoryId)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
                <Typography>{`${category.name} - ${i}`} <span style={{ color: 'blue', marginLeft: '40px' }}>{`Item Added ${totalQuantity}`}</span></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <InventoryDashboard item={items} categoryId={categoryId} />
                </Box>
              </AccordionDetails>
              
            </Accordion>
          );
        }
      }
    }

    return accordions;
  };

  return (
    <Box sx={{ mt: 3 }}>
      {generateAccordions()}
    </Box>
  );
};

export default InventoryAccordionList;
