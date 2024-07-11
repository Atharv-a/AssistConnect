import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import errorMessage, { cautionLen } from '../Utility';
import toast from 'react-hot-toast';
import { postFormData } from '../api';
import toDTO from '../mapper';

const Form = ({ formData, setFormData, setValue }) => {
  const [localData, setLocalData] = useState(formData);

  useEffect(() => {
    setLocalData(() => ({
      description: formData.description || "",
      servicetype: formData.servicetype||"",
      location: formData.location
    }));
  }, [formData.location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData({ ...localData, [name]: value });
  };

  const  handleSubmit = async (e) => {
    e.preventDefault();
    const { description, servicetype, location } = localData;

    if (!description) {
      errorMessage('Description is required');
      return;
    }
    if (!servicetype) {
      errorMessage('Service type is required');
      return;
    }
    if (!location || !location.lat || !location.lng) {
      errorMessage('Location is required');
      return;
    }
    if (description.length > 1000) {
      cautionLen('Description', 1000);
      return;
    }

    toast.remove();
    const success = await postFormData(toDTO(localData));
    if(success === true){
      setFormData(localData)
      setValue('two')
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        margin: '1rem 0',
        border: '0.1rem solid',
        borderColor: 'secondary.main',
        borderRadius: '4px',
        p: '1rem',
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        type='text'
        label="Description"
        variant="outlined"
        name="description"
        value={localData.description || ''}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        color='secondary'

      />
      <FormControl fullWidth>
        <InputLabel id="serviceType-label" color='secondary'>Service Type</InputLabel>
        <Select
          labelId="serviceType-label"
          id="serviceType"
          name="servicetype"
          value={localData.servicetype || ''}
          onChange={handleChange}
          label="Service Type"
          color='secondary'
        >
          <MenuItem value=""><em>Select</em></MenuItem>
          <MenuItem value="Rescue">Rescue</MenuItem>
          <MenuItem value="FireFighters">FireFighters</MenuItem>
          <MenuItem value="Police">Police</MenuItem>
          <MenuItem value="Medical">Medical</MenuItem>
        </Select>
      </FormControl>
      <TextField
        disabled
        type='text'
        label="Location (Latitude)"
        variant="outlined"
        name="location.lat"
        value={localData.location?.lat || ''}
        onChange={(e) => handleChange({ target: { name: 'location.lat', value: e.target.value } })}
        fullWidth
        color='secondary'
        sx={{
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "#000000",
        },
      }}
      />
      <TextField
        type='text'
        disabled
        label="Location (Longitude)"
        variant="outlined"
        name="location.lng"
        value={localData.location?.lng || ''}
        onChange={(e) => handleChange({ target: { name: 'location.lng', value: e.target.value } })}
        fullWidth
        color='secondary'
        sx={{
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "#000000",
        },
        }}
      />
      <Button type="submit" variant="contained" color="secondary">
        Submit
      </Button>
    </Box>
  );
};

export default Form;
