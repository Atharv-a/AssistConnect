
import { Grid } from "@mui/material"
import Map from "../Components/Map"
import TabSwitch from "../Components/TabSwitch"
import { useEffect, useState } from "react";
import Form from "../Components/Form";
import Info from "../Components/Info";
import { fetchFormData } from "../api";
import { fromDTO } from "../mapper";

function Home({setLoggedIn}) {

  const [value, setValue] = useState('one');
  const [formData, setFormData] = useState({
    description: null,
    servicetype: null,
    location: null
  })
 
  useEffect(()=>{
    async function fetchData(){
      const data = await fetchFormData();
      if(Boolean(data) === true ){
        setFormData(fromDTO(data))
      }
    }
    fetchData()
  },[])

  return (
    <Grid container  >
      <Grid 
        item xs={12} 
        md={7}
        sx={{
          height:{
            xs:'45vh',
            md:'90vh'
          },
          padding:"0.5rem 0.5rem 0rem 0.5rem",
          display:'flex'
        }}
        >
        <Map setFormData={setFormData}/>
      </Grid>
      <Grid 
        item xs={12} 
        md={5}
        sx={{
          height:{
            xs:'45vh',
            md:'90vh'
          },
          padding:"0.5rem 0.5rem 0.5rem 0.5rem"
        }}
      >
        <TabSwitch 
          value={value}
          setValue={setValue}
        />
        {
          value === 'one'?<Form 
                            formData={formData}
                            setFormData={setFormData}
                            setLoggedIn={setLoggedIn}
                            setValue={setValue}
                          />
                          :
                          <Info formData={formData}/>
        }
      </Grid>
    </Grid>
  )
}

export default Home
