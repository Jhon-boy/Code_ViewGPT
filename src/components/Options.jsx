import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Options = () => {
    const [value, setValue] = React.useState(0);


  return (
  <Box sx={{ width: 300 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Limpiar" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Copiar" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Guardar" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  )
}
