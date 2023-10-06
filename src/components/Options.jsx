import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import ContentCopyIcon  from '@mui/icons-material/ContentCopy';
import SaveIcon  from '@mui/icons-material/Save';

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
        <BottomNavigationAction label="Intentar de nuevo" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Copiar" icon={<ContentCopyIcon  />} />
        <BottomNavigationAction label="Guardar" icon={<SaveIcon  />} />
      </BottomNavigation>
    </Box>
  )
}
