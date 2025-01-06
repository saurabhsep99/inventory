import React from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';

const InventoryStepper = ({ activeStep, steps }) => {
    return (
         <Box sx={{display:'flex', justifyContent:'center'}}>
             <Stepper activeStep={activeStep} alternativeLabel sx={{mt:2, mb:4}}>
                {steps.map((label) => (
                  <Step key={label}>
                     <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
           </Stepper>
         </Box>
    );
};

export default InventoryStepper;