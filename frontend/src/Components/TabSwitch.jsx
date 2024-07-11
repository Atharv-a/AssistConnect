import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function TabSwitch({ value, setValue }) {

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box 
      sx={{ 
        width: '100%',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
          display: "flex",
        }}
      >
        <Tab 
          value="one" 
          label="Ask for Help"
          sx={{
            flex: 1, 
          }} 
        />
        <Tab 
          value="two" 
          label="Information You provided" 
          sx={{
            flex: 1,
          }}
        />
      </Tabs>
    </Box>
  );
}

export default TabSwitch;
