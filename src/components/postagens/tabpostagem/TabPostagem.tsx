import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value} >
        <AppBar position="static" className='TabCor'>
          <Tabs centered indicatorColor="secondary" onChange={handleChange} className="TabLCor">
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Fotos" value="2"/>
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Box>
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Topetinho-vermelho</Typography>
          <Box>
            <img src='https://i.pinimg.com/474x/e1/d2/21/e1d221db184a6b804c89d5ca6a8c5c1f.jpg' alt='Topetinho-vermelho'/>
          </Box>
          </Box>
          <Box>
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Zumbidor-guatemalteco</Typography>
          <Box>
            <img src='https://i.pinimg.com/474x/51/71/c7/5171c7380418a83685f84554dbbdb2ac.jpg' alt='Zumbidor-guatemalteco'/>
          </Box>
          </Box>
          <Box>
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Pássaro-secretário</Typography>
          <Box>
            <img src='https://i.pinimg.com/474x/21/c2/99/21c299f4dc91355e2116d5966a98c027.jpg' alt='Pássaro-secretário'/>
          </Box>
          </Box>
          <Box>
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Douc-de-canelas-vermelhas</Typography>
          <Box>
            <img src='https://i.pinimg.com/474x/2e/5e/3e/2e5e3e26685282235db152fbf6d76960.jpg' alt='Douc-de-canelas-vermelhas'/>
          </Box>
          </Box>
          <Box>
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Parauacu/Parauaçu</Typography>
          <Box>
            <img src='https://i.pinimg.com/564x/ab/88/36/ab88368fbb365db8db8ff0bc06f2e4ac.jpg' alt='Douc-de-canelas-vermelhas'/>
          </Box>
          </Box>
          <Box>
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Jacu-cigano</Typography>
          <Box>
            <img src='https://i.pinimg.com/474x/08/1c/0c/081c0ccacb3c53a8898fcd16948c7dcd.jpg' alt='Jacu-cigano'/>
          </Box>
          </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;