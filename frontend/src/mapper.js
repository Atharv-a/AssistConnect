export default function toDTO(data){
    return{
        ...data,
        location:{
            latitude: data.location.lat,
            longitude: data.location.lng
        }
    }
}

export function fromDTO(data){
    return{
        ...data,
        location:{
            lat:data.location.latitude,
            lng:data.location.longitude
        }
    }
}