import { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Collapse } from '@mui/material';

const disasters = [
  { id: 0, name: 'FirstAid' },
  { id: 1, name: 'Earthquake' },
  { id: 2, name: 'Flood' },
  { id: 3, name: 'Cyclone' },
  { id: 4, name: 'Coronavirus' },
  { id: 5, name: 'Tsunami' },
  { id: 6, name: 'Landslide' },
  { id: 7, name: 'Avalanche' },
];

function HelpDocs() {
  const [expandedId, setExpandedId] = useState(-1);

  const handleToggle = (id) => {
    setExpandedId(id === expandedId ? -1 : id);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h3" align="center" sx={{ mb: 2, fontFamily:'Times'}}>
        HelpDocs
      </Typography>
      <Grid container spacing={2}>
        {disasters.map((disaster) => (
          <Grid item xs={12} key={disaster.id}>
            <Card sx={{ cursor: 'pointer', border:'0.1rem solid',  borderColor:'secondary.main'}} onClick={() => handleToggle(disaster.id)}>
              <CardContent>
                <Typography variant="h5" >
                  {disaster.name}
                </Typography>
                <Collapse in={expandedId === disaster.id} timeout="auto" unmountOnExit>
                  <Box sx={{ mt: 2 }}>
                    <iframe
                      title="PDF Viewer"
                      src={`https://pdf-assist-connect.netlify.app/pdf/${disaster.name.toLowerCase()}.pdf`}
                      width="100%"
                      height="600px"
                    />
                  </Box>
                </Collapse>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HelpDocs;
