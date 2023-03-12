import React from 'react';
import {Box, Grid, Theme} from '@mui/material';
import {styled} from '@mui/material/styles'

const sxStyle = {
    backgroundColor:'#3A3A3A',
    width:'100%',
    spacing:'0',
  direction:'column',
  alignItems:'center',
  justifyContent:'center',
  display:'flex',
  color:'#F7961C',
  height:'48px',
  fontFamily: 'Acumin Pro',
}
const spanStyle= {
    color: '#FFFFFF',
}
const mainHeader = {
    backgroundColor:'#F7961C',
    width:'100%',
  direction:'column',
  color:'#F7961C',
  height:'70px',
  fontFamily: 'Acumin Pro',
  
}



function Header() {
    return (
        <Grid >
            <Grid item XS={12} sx={sxStyle}>
                <Box >
            <Box component="span" sx={spanStyle}>FREE SHIPPING FOR ALL ORDERS,</Box> LIMITED TIME ONLY | FAST SHIPPING WITHIN <Box component="span" sx={spanStyle}>2-4 BUSINESS DAYS*</Box> | FREE <Box component="span" sx={spanStyle}>IN-STORE</Box> RETURN
            </Box>
            </Grid>
            <Grid item XS={12} sx={mainHeader}>
            <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height:'100%',
          color: '#FFF',
          pl: 6,
          pr: 6,
        }}
      >
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Box>
            </Grid>
        </Grid>   
    );

}

export default Header;