import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

function Info({ formData }) {
    return (
        formData.description === null ? 
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding:"1rem"}}>
            <Typography variant='h6' color="primary.dark" sx={{ textAlign: 'center', width: '100vh' }}>
                Data provided by you will appear here
            </Typography>
        </Box>
        :
        (
            <Box sx={{ flexGrow: 1, bgcolor: 'primary.paper', padding:"1rem"}}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem divider>
                            <ListItemText 
                                primary={
                                    <Typography variant="h5" sx={{ textDecoration: "underline", marginBottom:"0.1rem"}} color="primary.dark">
                                        Description
                                    </Typography >
                                }
                                secondary={
                                    <Typography color="secondary"  sx={{ wordWrap: 'break-word' }}>
                                        {formData.description}
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText 
                                primary={
                                    <Typography variant="h5" sx={{ textDecoration: "underline",marginBottom:"0.1rem"  }} color="primary.dark">
                                        Service
                                    </Typography>
                                }
                                secondary={
                                    <Typography color="secondary">
                                        {formData.servicetype}
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText 
                                primary={
                                    <Typography variant="h5" sx={{ textDecoration: "underline",marginBottom:"0.1rem" }} color="primary.dark">
                                        Location
                                    </Typography>
                                }
                                secondary={
                                    <>
                                        <Typography component="span" display="block" color="secondary">
                                            Latitude: {formData.location.lat}
                                        </Typography>
                                        <Typography component="span" display="block" color="secondary">
                                            Longitude: {formData.location.lng}
                                        </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                </nav>
            </Box>
        )
    );
}

export default Info;
