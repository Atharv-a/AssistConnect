import { useState } from 'react';

export default function Docs(){
    const disasters = [
        { id: 0, name: 'FirstAid' },
        { id: 1, name: 'Earthquake' },
        { id: 2, name: 'Flood' },
        { id: 3, name: 'Cyclone' },
        { id: 4, name: 'Coronavirus' },
        { id: 5, name: 'Tsunami' },
        { id: 6, name: 'Landslide' },
        { id: 7, name: 'Avalanche' },
      ]

    const initailvalue=Array(disasters.length).fill(0)
    const [toggle,setToggle] = useState(initailvalue)
    
    function handleClick(id){
             setToggle((prelist)=>{
                let newlist=[...prelist]
                newlist[id]=!newlist[id]
                return newlist
             })
    }

    return ( 
    <>
        <h1 className="headline">HelpDocs</h1>
        {disasters.map((elem)=>(
            <div className='pdfcard' key={elem.id}  onClick={()=>handleClick(elem.id)}>
                <h3 >{elem.name}</h3>
                {toggle[elem.id]? <hr/>:null}
                {   
                    toggle[elem.id]
                    ?  
                        <iframe title="PDF Viewer" 
                                src={require(`../pdf/${elem.name.toLowerCase()}.pdf`)} 
                                width="100%" 
                                height="600px">
                        </iframe>
                    : null
                }
            </div>
        ))}
    </>
    )
}




