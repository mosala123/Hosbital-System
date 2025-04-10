import React, { useEffect, useState } from 'react';

const ChatAi = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/persons?_quantity=10&_gender=male')
      .then(res => res.json())
      .then(data => setDoctors(data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">قائمة الأطباء</h1>
      <div className="row">
        {doctors.map((doctor, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 shadow-sm">
              <img src={doctor.image} className="card-img-top" alt={doctor.firstname} />
              <div className="card-body">
                <h5 className="card-title">{doctor.firstname} {doctor.lastname}</h5>
                <p className="card-text">
                  العمر: {doctor.birthday.split('-')[0]}<br />
                  البريد: {doctor.email}<br />
                  الهاتف: {doctor.phone}
                </p>
                <button className="btn btn-primary">احجز موعد</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatAi;
