import React from 'react';
import { CssBaseline, Grid2 } from '@mui/material'
import Header from './components/Header/Header.jsx';
import List from './components/List/List.jsx';
import Map from './components/Map/Map.jsx';
//import PlaceDetails from './components/PlaceDetails/PlaceDetails.jsx'

function App() {
  return (
    <>
      <CssBaseline />
        <Header />
      <Grid2 container spacing={3}      style={{ width:'100%'}}>
          <Grid2 item size={{xs: 12, md: 4}}>
            <List />
          </Grid2>
            
          <Grid2 item size={{xs: 12, md: 8}}>
            <Map />
          </Grid2>
      </Grid2> 
    </>
  );
}

export default App;
