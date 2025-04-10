import React, { useEffect, useState } from "react";
import imagescart from "../../../public/images/pic-3.fa689b1037dbf69567a3.jpg";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const LatestNews = () => {


 const [news, setnewd] = useState([]);

 useEffect(() => {
  fetch("https://newsapi.org/v2/everything?q=health%20OR%20صحة&language=ar&sortBy=publishedAt&apiKey=d448329812b944a59b7061f6b8508e00")
    .then((res) => res.json())
    .then((data) => setnewd(data.articles))
    .catch((err) => console.error(err));
}, []);

  if (news.length === 0) {
    return (
       <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"50vh "}}>
        <div className="spinner-border "   role="status">
        <span className="sr-only"> </span>
      </div>
       </div>
    );
  } 





  return (
    <div className="LatestNews py-5 bg-light pb-5">
      <div className="container">
        <div className="text-center">
          <h3  style={{color:"#f17732"}}>Latest News</h3>
          <h1>Our Latest News</h1>
        </div>
        <div className="row mt-4 mb-3 px-3"
        style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          {/* Card 1 */}
        {news.map((lastnews)=>(
             <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={lastnews.id}>
             <div className=" text-center card shadow-sm border-1 p-0"   style={{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"20px"}}>
               <img
                 src={lastnews.urlToImage}
                 className="card-img-top"
                 alt="Doctor"
                 style={{ height: "250px", padding: "0",borderRadius:"20px 20px 0 0" }}
               />
               <div className="d-flex gap-5 align-items-center  p-3">
                 <div className="gap-3 d-flex" style={{ alignItems: "center" }}>
                   
<p className="mb-0 fw-bold" style={{whiteSpace:"nowrap"}}  >
Source : 
   <span style={{ color: "#f17732" }} > {lastnews?.source?.name || ""}</span>
</p>

                 </div>
                 <p   style={{color:"#f17732"}} className="mb-0   fw-bold d-flex align-items-center gap-2">
                   {lastnews.publishedAt}
                 </p>
               </div>
               <div className="card-body mt-0 pt-0">
                 <h5 className="card-title">{lastnews.title}</h5>
                 <p className="card-text">
                   {lastnews.description.slice(0,130)}...
                 </p>
                 <div className="d-flex align-items-center justify-content-center">
                   <button className="btn btn-outline-primary d-flex align-items-center gap-2">
                     Read More
                     <span
                       className="bg-primary text-light"
                       style={{
                         padding: "5px",
                         borderRadius: "7px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "center",
                       }}
                     >
                       <FaAngleRight />
                     </span>
                   </button>
                 </div>
               </div>
             </div>
           </div>
        ))}
           
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
