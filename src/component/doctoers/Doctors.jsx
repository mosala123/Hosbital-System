import React, { useEffect, useState } from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import imageDoctor from "../../../public/images/doctor.7c2bc96d67d3eba1d64a.png";
import doctoeranmation2 from "../../../public/images/recycle blue.png";
import doctoeranmation1 from "../../../public/images/anmation 3.png";
import "./Doctors.css";   
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const Doctors = () => {

  const [doctoer, setDoctoer] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setDoctoer(data.users)) // هنا تأكدنا نحط data.users
      .catch((err) => console.error(err));
  }, []); 

  if (doctoer.length === 0) {
    return (
       <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"50vh "}}>
        <div className="spinner-border "   role="status">
        <span className="sr-only"> </span>
      </div>
       </div>
    );
  } 
  return (
    <div>
      <div className="Doctors mt-4 px-3">  
        <img src={doctoeranmation1} alt=" " className="doctoeranmation1" />
        <div className="container mt-5 p-3 text-center mb-3">
          <h3 style={{ color: "#f17732" }}>Our Doctor</h3>
          <h1 className="fs-1 mb-5" style={{ color: "#1f2278" }}>Meet Best Doctors</h1>
          <div className="row justify-content-center">
            {/* Doctor 1 */}


            {doctoer.map((doc) => (
  <div className="col-lg-4 col-md-6 col-sm-12" key={doc.id}>
    <div className="card mb-4 p-3 text-center">
      <div className="cardimage">
        <img src={doc.image} alt="Doctor" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
      </div>

      <h5 className="card-title mt-3">
        Dr : <span style={{ color: "#f17732" }}>{doc.firstName} {doc.lastName} </span>{" "}
         
      </h5>

      <h6 className="card-subtitle mb-2" style={{ color: "#6c757d" }}>
        {doc.university}
      </h6>

     
        <div className="socialIcons d-flex justify-content-center gap-3 mt-2   ">
        <a className="text-light" target="_blank" href={`mailto:${doc.email}`}>
  <MdEmail />
</a>

          <Link className="text-light" to="#">
            Datils
          </Link>
        
        </div>
    </div>
  </div>
))}






            
 
          </div>
        </div>
        <img src={doctoeranmation2} alt=" " className="doctoeranmation2" />
      </div>
    </div>
  );
};

export default Doctors;
