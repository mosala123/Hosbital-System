import React from 'react'
import { BiHome } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const TeamUs = () => {
  return (
     <div className='pb-5 pt-5 '  style={{backgroundColor:"",
            backgroundImage: "url('../../../public/images/anmation 3.png'), url('../../../public/images/recycle.png ')",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "50px 60px,    90% 60px        "

          }}
          >
            <div className='' style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                <h1 className='fs-1' style={{color:"#007bff"}}>Team Us </h1>
                <div  >
                    <Link to="/"  className='d-flex gap-2 fs-4 px-4 mt-3  align-items-center btn btn-primary ' >
                        <BiHome /> Home 
                           </Link>
                </div>
            </div>
    </div>
  )
}

export default TeamUs
