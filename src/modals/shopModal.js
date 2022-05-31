import React, { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import { useRef } from "react";
import Switch from '@mui/material/Switch';
import { FormControl, Grid, InputLabel, MenuItem } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import { ThemeProvider } from "@mui/system";
import Slider from '@mui/material/Slider';

const Shopmodal=( {open, close, theme, getinventory} )=>{
    // console.log("State",open);
    const [ item, setItem ] = useState('');
    const [ numberOfItems, setNumberOfItems] = useState(0);
    const [bag, setBag] = useState(false);
    const [ bill , setBill ] = useState(0.0);
    const inventory={
        "Poke Ball":5,
        "Great Ball":10,
        "Super Potion":10,
        "Hyper Potion":20,
        "Bag":2
    }
    // useEffect(()=>{
    //         if(item!==""){
    //             bag ?
    //             setBill(inventory[item]*numberOfItems + 2.0) :
    //             setBill(inventory[item]*numberOfItems + 2.0)
    //         }
    //         else{
    //             setBill(0.0);
    //         }
    // },[])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
      };
    const handleChange=(event)=>{
        setItem(event.target.value);
        let newItem = event.target.value
        if(newItem!==""){
        setBill(inventory[newItem]*numberOfItems)
        }
        else{
        setBill(0.0)
        }
    }

    const requiredBag=( event )=>{
        setBag(event.target.checked)
        let newBagReq = event.target.checked
        newBagReq ?
        setBill(bill+2.0) :
        setBill(bill+0.0)
    }

    const showDetails=()=>{
        let finalBill=0.0;
        console.log("Inventory",item);
        console.log("Number of items", numberOfItems);
        console.log("Bag required: ",bag);
        bag ? 
        finalBill=(inventory[item]*numberOfItems+(inventory["Bag"])):
        finalBill=(inventory[item]*numberOfItems)
        console.log("Total: ",finalBill)
        setBill(finalBill)
        const cart = 
        {
            [item]:numberOfItems,
            "Bag":bag,
            "Bill":bill
        }
        getinventory({...cart});
        close();
    }

    const getSliderValue=(event)=>{
        let itemNo = event.target.value
        setNumberOfItems(event.target.value);
        setBill(inventory[item]*itemNo);
    }

    function valuetext(value) {
        return value;
    }

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
            <FormControl variant="filled" sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Choose Item</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={item}
                fullWidth
                onChange={handleChange}
                >
          <MenuItem value={""}><em></em></MenuItem> 
          <MenuItem value={"Poke Ball"}>Poke Ball</MenuItem>
          <MenuItem value={"Great Ball"}>Great Ball</MenuItem>
          <MenuItem value={"Super Potion"}>Super Potion</MenuItem>
          <MenuItem value={"Hyper Potion"}>Hyper Potion</MenuItem>
        </Select>
        </FormControl>
        <Slider
                size='small'
                aria-label="pokeCenterDistance"
                defaultValue={0}
                min={0}
                max={10}
                color="custom"
                onChange={getSliderValue}
                getAriaValueText={valuetext}
                valueLabelDisplay="on"
        />
        </Box>
        <Grid container spacing={2}>
            <Grid item xs={8}>
            <Typography variant="body1" gutterBottom style={{color:"#889296"}}>
                I need a bag for that!
            </Typography>
            </Grid>
            <Grid item xs={4}>
                <Switch defaultValue="false" onChange={requiredBag} size="small" color="custom"/>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={8}>
            <Typography variant="body2" gutterBottom style={{color:"#889296"}}>
                Total:
            </Typography>
            </Grid>
            <Grid item xs={4}>
                {`${bill}$`}
            </Grid>
        </Grid>
            <Box textAlign="center">
            <Button type="submit" variant="contained" onClick={showDetails} sx={{ mt: 3, mb: 2 }} color="custom">ADD TO CART</Button>
            </Box>
            </Box>
            </Modal>
        </div>
        </ThemeProvider>
    )
}

export default Shopmodal;