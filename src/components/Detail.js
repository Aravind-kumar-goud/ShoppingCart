import React from 'react'
import { useLocation } from 'react-router-dom'

function Detail() {

  const location = useLocation()

  return (
    <>

      {location.state.map((e) => {
        return (<>
          <div className='container ' key={e.phoneNumber} style={{ backgroundColor: "whitesmoke" ,textAlign: "start",
          fontSize: "larger", fontWeight: 300 ,marginTop:"15px" ,heigth:"300px",width:"400px"}}>
          <div className='row'>
            <p>Name: {e.firstname}</p>
            <p>Email: {e.email}</p>
            <p>phoneNumber: {e.phoneNumber}</p>
          </div>
        </div>
        </>)
})
      }


    </>
  )
}

export default Detail