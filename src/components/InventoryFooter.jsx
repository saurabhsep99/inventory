import React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";


const InventoryFooter = ({
  activeStep,
  steps,
  totalQuantity,
  handleBack,
  handleNext,
  handleOpen,
}) => {

  const inventoryItems = useSelector((state) => state.categories.inventoryItems);

  function groupByCategoryId(items) {
    return items.reduce((result, item) => {
      const { categoryId } = item;
  
      if (!result[categoryId]) {
        result[categoryId] = [];
      }
  
      result[categoryId].push(item);
      return result;
    }, {});
  }


  const saveInventoryItems = async () => {
    try {
      const response = await fetch('https://mocki.io/v1/ce781e32-6b05-42be-88b4-8cde32c8e1ba', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(groupByCategoryId(inventoryItems))
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.log(inventoryItems)
    }
  };


  return (
    <Card
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        py: 2,
        px: 2,
        position: 'relative', // Allow responsiveness
        width: '100%',
      }}
    >
      <CardContent>
        {activeStep > 0 ? (
          <>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ color: 'green', fontWeight: 600 }}>
                Please ensure all inventory is added upfront. Any items added later during pickup will incur extra charges.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {activeStep === steps.length - 1 && (
                <Button
                  variant="text"
                  sx={{ textTransform: 'none', color: 'blue', fontWeight: 'bold' }}
                  onClick={handleOpen}
                >
                  {`View ${totalQuantity} items`}
                </Button>
              )}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: 'none',
                    backgroundColor: '#3b82f6',
                    '&:hover': { backgroundColor: 'darkblue' },
                  }}
                  onClick={saveInventoryItems}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                backgroundColor: '#3b82f6',
                '&:hover': { backgroundColor: '#darkblue' },
                width: '100%',
                borderRadius: '10px 12px'
              }}
              onClick={handleNext}
            >
              Continue
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default InventoryFooter;
