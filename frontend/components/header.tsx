import React from 'react';
import {Box, Grid, Theme} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

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

const iconColor = {
    color:'#3A3A3A',
    fontSize:'26px'
}
const iconSize = {
    fontSize: '40px',
    color:'#FFF',
}

const HeaderItemWrapper = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border:'0px solid', 
    width:'13%'
}

const HeaderItemInnerWrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const HeaderitemWrapperWidth = {
    width:'18%'
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
          color: '#3A3A3A',
          pl: 6,
          pr: 6,
          fontSize:'18px'
        }}
      >
        <Box sx={HeaderItemWrapper}>
            <Box><Box sx={HeaderItemInnerWrapper}><LocationOnOutlinedIcon sx={iconColor}/></Box><Box>Find a Store</Box></Box>
            <Box><Box sx={HeaderItemInnerWrapper}><SearchOutlinedIcon sx={iconColor}/></Box><Box>Search</Box></Box>
        </Box>
        
        <Box sx={HeaderItemWrapper}><img src="https://img-cdn.magrabi.com/medias/sys_master/root/hb0/h3f/9069140738078/logo/logo.png"/></Box>
        <Box sx={[HeaderItemWrapper,HeaderitemWrapperWidth]}>
        <Box  sx={HeaderItemInnerWrapper}><Box><AccountCircleRoundedIcon sx={iconSize}/></Box><Box>drm</Box></Box>
            <Box><Box sx={HeaderItemInnerWrapper}><FavoriteBorderOutlinedIcon sx={iconColor}/></Box><Box>Favorites</Box></Box>
            <Box><Box sx={HeaderItemInnerWrapper}><ShoppingBagOutlinedIcon sx={iconColor}/></Box><Box>Basket</Box></Box>
        </Box>
      </Box>
            </Grid>
        </Grid>   
    );

}

export default Header;