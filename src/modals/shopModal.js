import React from "react";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/system";

const Shopmodal=( {open, close, theme} )=>{
    console.log("State",open);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return(
        <ThemeProvider theme={theme}>
        <div className="modal">
            <Modal
            open={open}
            onClose={close}
            >
            <Box sx={style}>
            <Typography component="h1" variant="h5" style={{color:"#FE5454"}} textAlign="center">
                Place your order 
            </Typography>
            <Typography variant="body1" gutterBottom style={{color:"#889296"}} textAlign="center">
                We'll use this info to pack your order!
            </Typography>
            <Box textAlign="center">
            <Button variant="contained" onClick={close} sx={{ mt: 3, mb: 2 }} color="custom">ADD TO CART</Button>
            </Box>
            </Box>
            </Modal>
        </div>
        </ThemeProvider>
    )
}

export default Shopmodal;