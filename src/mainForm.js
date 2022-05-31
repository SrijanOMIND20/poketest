import * as React from 'react';
import { useState, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Shopmodal from './modals/shopModal';
import Icon from '@mui/material/Icon';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({ palette: {
    custom: {
      main: '#FE5454',
      contrastText: '#fff',
    },},
});

function valuetext(value) {
    return `${value}°C`;
}


export default function Form() {
    let pokeMon={
        starter1:{
            url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
            name:"Charmander"
          },
        starter2:{
            url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
            name:"Squirtle"
        },
        starter3:{
            url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
            name:"Bulbasaur"
        }
    }
    const [starterPokemon,setstarterPokemon]=useState('');
    const [location, setLocation] = useState('');
    const [fullName, setFullName] = useState('');
    const [codeName, setCodeName] = useState('');
    const [open, setOpen] = useState(false);
    const nameRef = useRef();
    const codeNameRef = useRef();
    const distanceRef = useRef();

    const getInventory = (inventory) =>{
      console.log(inventory)
    }

    const handleChange = (event) => {
      setLocation(event.target.value);
    };
    const handleModal=()=>{
        setOpen(!open)
        //console.log(open);
    }
    const handleChangeTab = (event) => {
        console.log(event.target.value);
        setstarterPokemon(event.target.value);
      };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  if(location=="Kanto"){
      pokeMon={
          starter1:{
              url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
              name:"Charmander"
            },
          starter2:{
              url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
              name:"Squirtle"
          },
          starter3:{
              url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
              name:"Bulbasaur"
          }
  }
}
  else if(location=="Johto"){
    pokeMon={
        starter1:{
            url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
            name:"Cyndaquil"
          },
        starter2:{
            url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
            name:"Totodile"
        },
        starter3:{
            url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",
            name:"Chikorita"
        }
  }
}
else{
    pokeMon={
        starter1:{
            url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png",
            name:"Torchic"
          },
        starter2:{
            url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png",
            name:"Treecko"
        },
        starter3:{
            url:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png",
            name:"Mudkip"
        }
  } 
}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Fill This Form 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              color='custom'
              id="email"
              label="Full Name"
              name="email"
              autoComplete="email"
              autoFocus
              variant='filled'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              color='custom'
              name="password"
              label="Code Name"
              type="password"
              id="password"
              variant='filled'
              autoComplete="current-password"
            />
            <br />
            <Slider
                size='small'
                aria-label="pokeCenterDistance"
                defaultValue={20}
                color="custom"
                getAriaValueText={valuetext}
                valueLabelDisplay="on"
            />
        <FormControl variant="filled" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-autowidth-label">What's your starting region?</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={location}
          fullWidth
          onChange={handleChange}
        >
          <MenuItem value={"Kanto"}>Kanto</MenuItem>
          <MenuItem value={"Johto"}>Johto</MenuItem>
          <MenuItem value={"Hoenn"}>Hoenn</MenuItem>
        </Select>
        </FormControl>
        <Typography variant="body1" gutterBottom>
            Choose your starter pokemon 
        </Typography>
        <Tabs value={starterPokemon} centered>
        <Tab icon={<Avatar
  alt={pokeMon.starter1.name} src={pokeMon.starter1.url} style={{width:48,height:48}}
/>} value={pokeMon.starter1.name} onClick={handleChangeTab}/>
        <Tab icon={<Avatar
  alt={pokeMon.starter2.name} src={pokeMon.starter2.url} style={{width:48,height:48}}
/>} value={pokeMon.starter2.name} onClick={handleChangeTab}/>
        <Tab icon={<Avatar
 alt = {pokeMon.starter3.name} src={pokeMon.starter3.url} style={{width:48,height:48}}
/>} value={pokeMon.starter3.name} onClick={handleChangeTab}/>
        </Tabs>
            <Grid container spacing={2}>
            <Grid item xs={8}>
            <Typography variant="body1" gutterBottom>
            What do you want to pack?
            </Typography>
            </Grid>
            <Grid item xs={4}>
            <IconButton aria-label="delete" onClick={handleModal}>
                <AddCircleIcon color='custom' />
            </IconButton>
            {open && <Shopmodal open={open} close={handleModal} theme={theme} getinventory={getInventory}/>}
            </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              color='custom'
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ADD TO CART
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}