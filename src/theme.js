import { createTheme } from '@mui/material/styles';

const theme = createTheme({
palette: {
 primary: {
   main: '#2e7d32', // Define your primary color
 },
},
typography: {
 fontFamily: 'Roboto, sans-serif', // Set a consistent font
},
components: {
 MuiAppBar: {
   styleOverrides: {
     root: {
       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add shadow
     },
   },
 },
},
});

export default theme;