import React from "react";
import image3 from "../../../public/images/doctor.7c2bc96d67d3eba1d64a.png";
import image4 from "../../../public/images/about11.png";
import image2 from "../../../public/images/pic-3.fa689b1037dbf69567a3.jpg";
import image1 from "../../../public/images/pic-1.ad1ed7ee8284087fe9ee.jpg";
import imageAboutAnmation1 from "../../../public/images/aboutanmation.png";
import imageAboutAnmation2 from "../../../public/images/about 2 anmation.png"; // تعديل الاسم
import imageAboutAnmation3 from "../../../public/images/aboutanmation.png";

import { FaSyringe, FaStethoscope, FaChevronRight } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { MdMedicalServices } from "react-icons/md";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import "./AboutUs.css"
 

const AboutUs = () => {
  return (
    <div>
      <div className="AboutPage py-5 ">
      <img src={imageAboutAnmation2} alt="" className="imageAboutAnmation2" />
      <div className="container pt-4">
        <div className="row align-items-center imagefour">
          <img src={imageAboutAnmation3} alt="" className="imageAboutAnmation3" style={{ width: "100px" }} />

          <div className="col-lg-6 text-center">
            <div className="row p-3">
              <div className="col-6">
                <img className="img-fluid mb-3 shadow image1" src={image1} alt="Doctor" />
                <img className="img-fluid shadow image2" src={image2} alt="About" />
              </div>
              <div className="col-6">
                <img className="img-fluid mb-3 shadow image3" src={image3} alt="Doctor" />
                <img className="img-fluid shadow image4" src={image4} alt="About" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 p-3">
            <div className="AboutAnmation">
              <p className="text-warning fw-bold fs-2">About Us</p>
              <img src={imageAboutAnmation1} alt="" className="imageAboutAnmation1" />
            </div>

            <h2 className="fw-bold fs-1" style={{ zIndex: "2" }}>The Great Place Of Medical Hospital Center</h2>
            <p className="text-muted mt-3 mb-3">
              We provide the special tips and advice’s of health care treatment and high-level
              technology involved in our hospital.
            </p>

            <div className="row mt-4">
              <div className="col-md-6 col-sm-6">
                <div className="d-flex align-items-center gap-2 p-3 mb-3 border border-danger rounded">
                  <GiMedicines className="fs-3  bg-danger iconsabout" />
                  <p className="mb-0 ">Emergency Help</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="d-flex align-items-center gap-2 p-3 mb-3 border border-warning rounded">
                  <MdMedicalServices className="fs-3 bg-warning  iconsabout" />
                  <p className="mb-0">Qualified Doctors</p>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="d-flex align-items-center gap-2 p-3 mb-3 border border-info rounded">
                  <FaStethoscope className="fs-3 bg-info  iconsabout" />
                  <p className="mb-0">Best Professionals</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="d-flex align-items-center gap-2 p-3 border border-primary rounded">
                  <FaSyringe className="fs-3  bg-primary iconsabout" />
                  <p className="mb-0">Medical Treatment</p>
                </div>
              </div>
            </div>

            <button className="btn btn-primary mt-4 fs-5">Read More</button>
          </div>
        </div>
      </div>

      <div className=" working container py-5 mt-5 " style={{ padding: "100px  10px  " }}>
        <h3 className="text-center text-warning">Working Process</h3>
        <h1 className="text-center text-primary fw-bold fs-1">How We Work?</h1>

        <div className="container ">
          <div className="row mt-4">
            {/* الكارد الأول */}
            <div className="  workingcard  col-lg-4 col-md-6 mb-3 mt-5">
              <div className="card px-4 py-5 card1">
                <h1 className="    d-flex gap-0">
                  <RiNumber1 className="number1" style={{ fontSize: "43px", zIndex: "2" }} />
                </h1>
                <h4 className="mt-2">Make Appointment</h4>
                <p className="mt-3 mb-4">
                  It is a long established fact that a reader will be distracted by the readable content of.
                </p>
                <button
                  className="btn btn-primary d-flex align-items-center justify-content-center"
                  style={{
                    width: "fit-content",
                    padding: " 10px 20px",
                    gap: "8px"
                  }}
                >
                  View More
                  <span className="bg-white  p-2 d-flex align-items-center justify-content-center" style={{ borderRadius: "6px" }}>
                    <FaChevronRight className="text-dark" size={18} />
                  </span>
                </button>
              </div>
            </div>

            {/* الكارد الأوسط */}
            <div className="col-lg-4 col-md-6 mb-3 mt-4">
              <div className="  cardwork  px-4 py-5 card2"  >
                <h1 className="   text-center  " >
                  <RiNumber2 className="number2  " style={{ fontSize: "43px", }} />
                </h1>
                <h4 className="mt-2 ">Make Appointment</h4>
                <p className="mt-3 mb-4 ">
                  It is a long established fact that a reader will be distracted by the readable content of.
                </p>
                <button
                  className="btn btn-primary d-flex align-items-center justify-content-center"
                  style={{
                    width: "fit-content",
                    padding: " 10px 20px",
                    gap: "8px"
                  }}
                >
                  View More
                  <span className="bg-white  p-2 d-flex align-items-center justify-content-center" style={{ borderRadius: "6px" }}>
                    <FaChevronRight className="text-dark" size={18} />
                  </span>
                </button>

              </div>
            </div>

            {/* الكارد الثالث */}
            <div className="col-lg-4 col-md-6 mb-3 mt-5">
              <div className="card px-4 py-5 card1">
                <h1 className="  d-flex gap-0">
                  <RiNumber3 className="number1" style={{ fontSize: "43px", zIndex: "2" }} />
                </h1>
                <h4 className="mt-2">Make Appointment</h4>
                <p className="mt-3 mb-4">
                  It is a long established fact that a reader will be distracted by the readable content of.
                </p>
                <button
                  className="btn btn-primary d-flex align-items-center justify-content-center"
                  style={{
                    width: "fit-content",
                    padding: " 10px 20px",
                    gap: "8px"
                  }}
                >
                  View More
                  <span className="bg-white  p-2 d-flex align-items-center justify-content-center" style={{ borderRadius: "6px" }}>
                    <FaChevronRight className="text-dark" size={18} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUs
