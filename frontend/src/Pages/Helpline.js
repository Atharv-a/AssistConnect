
export default function Helpline(){
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
  ]

    return <>
            <h1 className='headline'> Helpline</h1>
            <div id="number-container">
                {helplineNumbers.map((ele)=>(
                  <div className="card" key={ele.id}>
                    <p><span style={{fontWeight:"bold"}}>{ele.name}</span></p>
                    <p>{ele.number}</p>
                  </div>
                ))}
            </div>
          </>
}