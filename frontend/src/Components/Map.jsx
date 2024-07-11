// import { Container } from '@mui/material'
import React from 'react'
import { useState,useEffect} from "react";
import { MapContainer, TileLayer,Marker} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function Map({setFormData}) {
    const  [position,setPosition] = useState(null)
    useEffect(() => {

          const center = {
            lat: 26.8466937,
            lng: 80.94616,
        }
 
        if(position == null){
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              setPosition({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
              })
            },
            (error) => {
              console.error("Error getting geolocation:", error)
              setPosition(center)
            }
          )
          setFormData((pre)=>({...pre,location:position}))
      }
    }, [setFormData,position])

    const customIcon = new L.Icon({
        iconUrl: require("../images/placeholder.png"),
        iconSize:[38,38]

    })
    function handleDrag(e){
        const newPositon = e.target.getLatLng();
        setPosition(newPositon)
        setFormData((predata)=>({
            ...predata,
            location:newPositon
        }))
    }

  return (
    position ?
     <MapContainer style={{flexGrow:"1"}} center={[position.lat,position.lng]} zoom={14}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker 
     position={position}
     draggable={true}
     icon={customIcon}
     eventHandlers={{dragend: handleDrag}}
     />
    </MapContainer> 
    : 
    <h3>map is loading...</h3>
  )
}

export default Map
