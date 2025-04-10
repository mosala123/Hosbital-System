import React from 'react'
import "./Homepages.css"
import imageshomepage from '../../../public/images/doctor.7c2bc96d67d3eba1d64a.png';
import images1 from '../../../public/images/download.png';
import images2 from '../../../public/images/anmation.png';

const Homepages = () => {
    return (
        <div className="homepage pb-5" >
            <div className='container'>
                <img className='images1' src={images1} alt="background animation" />
                <img className='images2' src={images2} alt="background animation" />

                <div className="container row d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div className="col-lg-6 col-md-12 col-sm-12   text-lg-start py-md-5 py-sm-5">
                        <p className='text-dark fw-bold fs-2 '>We Provide All Health Care Solution</p>
                        <h2 className='text-primary fw-bold fs-1'>Protect Your Health And Take Care Of Your Health</h2>
                        <button className='btn btn-primary mt-3 px-4 py-2 fs-5'>Read More</button>
                    </div>
                    <div className="homepage-image col-lg-6 col-md-12 col-sm-12 text-center">
                        <img src={imageshomepage} alt="Doctor" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepages;
