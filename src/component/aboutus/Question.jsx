import React, { useState } from 'react'
import { BiHome } from 'react-icons/bi'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Question = () => {
  const [openCards, setOpenCards] = useState({})

  const toggleCard = (index) => {
    setOpenCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div
      className="pb-5 pt-5 pt-5 "
      style={{
        backgroundColor: "#f8f9fa",
        backgroundImage: "url('../../../public/images/anmation.png'), url('../../../public/images/recycle blue.png')",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "50px 60px, 90% 60px",
      }}
    >
      <div
        className="text-center mb-5 mt-5"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
      >
        <h1 className="fs-1 fw-bold" style={{ color: "#565acf" }}>
          FAQ's
        </h1>
        <Link to="/" className="d-flex align-items-center gap-2 btn btn fs-4 px-4 btn-primary mt-3">
          <BiHome />
          Home
        </Link>
      </div>

      <div className="container mt-5">
        <div className="row gy-4">
          
          {/* Card 1 */}
          <div className="col-lg-6 col-md-6">
            <div
              className="p-4"
              style={{
                backgroundColor: openCards[1] ? "#f17732" : "#fff",
                borderRadius: "15px",
                transition: "0.9s ease",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <h4 style={{ color: "#565acf" }}>How Doctor Can Ease Your Pain?</h4>
                <div onClick={() => toggleCard(1)} style={{ cursor: "pointer", fontSize: "20px" }}>
                  {openCards[1] ? <FaMinus   className='text-light' /> : <FaPlus  style={{color:"#565acf"}} />}
                </div>
              </div>
              {openCards[1] && (
                <p className="mt-3" style={{ color: "#fff" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                </p>
              )}
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-6 col-md-6">
            <div
              className="p-4"
              style={{
                backgroundColor: openCards[2] ? "#f17732" : "#fff",
                borderRadius: "15px",
                transition: "0.5s ease",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <h4 style={{ color: "#565acf" }}>What are the benefits of consulting?</h4>
                <div onClick={() => toggleCard(2)} style={{ cursor: "pointer", fontSize: "20px" }}>
                  {openCards[2] ? <FaMinus   className='text-light' />  : <FaPlus style={{color:"#565acf"}}  />}
                </div>
              </div>
              {openCards[2] && (
                <p className="mt-3" style={{ color: "#fff" }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              )}
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div
              className="p-4"
              style={{
                backgroundColor: openCards[2] ? "#f17732" : "#fff",
                borderRadius: "15px",
                transition: "0.5s ease",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <h4 style={{ color: "#565acf" }}>What are the benefits of consulting?</h4>
                <div onClick={() => toggleCard(2)} style={{ cursor: "pointer", fontSize: "20px" }}>
                  {openCards[2] ? <FaMinus   className='text-light' />  : <FaPlus style={{color:"#565acf"}}  />}
                </div>
              </div>
              {openCards[2] && (
                <p className="mt-3" style={{ color: "#fff" }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              )}
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div
              className="p-4"
              style={{
                backgroundColor: openCards[2] ? "#f17732" : "#fff",
                borderRadius: "15px",
                transition: "0.5s ease",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <h4 style={{ color: "#565acf" }}>What are the benefits of consulting?</h4>
                <div onClick={() => toggleCard(2)} style={{ cursor: "pointer", fontSize: "20px" }}>
                  {openCards[2] ? <FaMinus   className='text-light' />  : <FaPlus style={{color:"#565acf"}}  />}
                </div>
              </div>
              {openCards[2] && (
                <p className="mt-3" style={{ color: "#fff" }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div
              className="p-4"
              style={{
                backgroundColor: openCards[2] ? "#f17732" : "#fff",
                borderRadius: "15px",
                transition: "0.5s ease",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <h4 style={{ color: "#565acf" }}>What are the benefits of consulting?</h4>
                <div onClick={() => toggleCard(2)} style={{ cursor: "pointer", fontSize: "20px" }}>
                  {openCards[2] ? <FaMinus   className='text-light' />  : <FaPlus style={{color:"#565acf"}}  />}
                </div>
              </div>
              {openCards[2] && (
                <p className="mt-3" style={{ color: "#fff" }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div
              className="p-4"
              style={{
                backgroundColor: openCards[2] ? "#f17732" : "#fff",
                borderRadius: "15px",
                transition: "0.5s ease",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <h4 style={{ color: "#565acf" }}>What are the benefits of consulting?</h4>
                <div onClick={() => toggleCard(2)} style={{ cursor: "pointer", fontSize: "20px" }}>
                  {openCards[2] ? <FaMinus   className='text-light' />  : <FaPlus style={{color:"#565acf"}}  />}
                </div>
              </div>
              {openCards[2] && (
                <p className="mt-3" style={{ color: "#fff" }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div
              className="p-4"
              style={{
                backgroundColor: openCards[2] ? "#f17732" : "#fff",
                borderRadius: "15px",
                transition: "0.5s ease",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <h4 style={{ color: "#565acf" }}>What are the benefits of consulting?</h4>
                <div onClick={() => toggleCard(2)} style={{ cursor: "pointer", fontSize: "20px" }}>
                  {openCards[2] ? <FaMinus   className='text-light' />  : <FaPlus style={{color:"#565acf"}}  />}
                </div>
              </div>
              {openCards[2] && (
                <p className="mt-3" style={{ color: "#fff" }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div
              className="p-4"
              style={{
                backgroundColor: openCards[2] ? "#f17732" : "#fff",
                borderRadius: "15px",
                transition: "0.5s ease",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <h4 style={{ color: "#565acf" }}>What are the benefits of consulting?</h4>
                <div onClick={() => toggleCard(2)} style={{ cursor: "pointer", fontSize: "20px" }}>
                  {openCards[2] ? <FaMinus   className='text-light' />  : <FaPlus style={{color:"#565acf"}}  />}
                </div>
              </div>
              {openCards[2] && (
                <p className="mt-3" style={{ color: "#fff" }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div
              className="p-4"
              style={{
                backgroundColor: openCards[2] ? "#f17732" : "#fff",
                borderRadius: "15px",
                transition: "0.5s ease",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <h4 style={{ color: "#565acf" }}>What are the benefits of consulting?</h4>
                <div onClick={() => toggleCard(2)} style={{ cursor: "pointer", fontSize: "20px" }}>
                  {openCards[2] ? <FaMinus   className='text-light' />  : <FaPlus style={{color:"#565acf"}}  />}
                </div>
              </div>
              {openCards[2] && (
                <p className="mt-3" style={{ color: "#fff" }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              )}
            </div>
          </div>
         
          <div className="col-lg-6 col-md-6">
            <div
              className="p-4"
              style={{
                backgroundColor: openCards[2] ? "#f17732" : "#fff",
                borderRadius: "15px",
                transition: "0.5s ease",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <h4 style={{ color: "#565acf" }}>What are the benefits of consulting?</h4>
                <div onClick={() => toggleCard(2)} style={{ cursor: "pointer", fontSize: "20px" }}>
                  {openCards[2] ? <FaMinus   className='text-light' />  : <FaPlus style={{color:"#565acf"}}  />}
                </div>
              </div>
              {openCards[2] && (
                <p className="mt-3" style={{ color: "#fff" }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question
