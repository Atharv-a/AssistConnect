import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Divider } from '@mui/material';

const helplineNumbers = [
  { id: 1, name: 'Police', number: 100 },
  { id: 2, name: 'Fire', number: 101 },
  { id: 3, name: 'Ambulance', number: 102 },
  { id: 4, name: 'Emergency', number: 112 },
  { id: 5, name: 'Women Helpline (Domestic Abuse)', number: 181 },
  { id: 6, name: 'Women in Distress', number: 1091 },
  { id: 7, name: 'Child Helpline', number: 1098 },
  { id: 8, name: 'Senior Citizens Helpline', number: 14567 },
  { id: 9, name: 'Medical Helpline', number: 108 },
  { id: 10, name: 'Road Accident Emergency Service', number: 1073 },
  { id: 11, name: 'Indian Railways Helpline', number: 139 },
  { id: 12, name: 'National Disaster Response Force (NDRF)', number: 1078 },
  { id: 13, name: 'National Helpline for COVID-19', number: 1075 },
  { id: 14, name: 'Anti-Obscene Calls Cell', number: 1091 },
  { id: 15, name: 'Anti-Poison Helpline', number: 1066 },
  { id: 16, name: 'Vandrevala Foundation for Mental Health', number: '1860-2662-345' }
];

const Helplines = () => {
  return (
    <Box sx={{ p: 2}}>
      <Typography variant="h3" align="center" sx={{ mb: 2,  fontFamily:'Time'}}>
        Helpline Numbers
      </Typography>
      
      <Grid container spacing={2}>
        {helplineNumbers.map((helpline) => (
          <Grid item xs={12} sm={6} md={4} key={helpline.id}>
            <Card 
              sx={{ 
                height: '100%', 
                border:'0.1rem solid',
                borderColor:'secondary.main'
                }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}
                >
                  {helpline.name}
                </Typography>
                <Divider
                  sx={{
                    backgroundColor:'secondary.main'
                  }}
                />
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {helpline.number}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Helplines;
