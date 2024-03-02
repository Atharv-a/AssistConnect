import toast from "react-hot-toast";

export default function errorMessage(message,id=null){
    toast(message,{
        id:id,
        style:{
            fontFamily:"Arial sans-serif",
            backgroundColor:"#F00",
            color:"#FFF",
        },
        duration:5000,
    })
}

export function cautionLen(subject,len,id=null){
    const message = subject+" length has exceeded "+len;
    toast(message,{
        id:id,
        style:{
            fontFamily:"Arial sans-serif",
        },
        duration:5000,
    })
}