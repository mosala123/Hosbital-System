import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./component/aboutus/AboutUs";
import ChatAi from "./component/chatdoc/ChatAi";
import Doctors from "./component/doctoers/Doctors";
import Footer from "./component/footer/Footer";
import Homepages from "./component/homepages/Homepages";
import LatestNews from "./component/last news/LastNews";
import Navbar from "./component/navbar/Navbar";
import AboutUsAll from "./component/aboutus/AboutUsAll";
import TeamUs from "./component/aboutus/TeamUs";
import Question from "./component/aboutus/Question";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/AboutUsAll" element={<AboutUsAll />} />
        <Route path="/TeamUs" element={<TeamUs />} />
        <Route path="/Question" element={<Question />} />
      </Routes>

      <Homepages />
      <AboutUs />
      <Doctors />
      <LatestNews />
      <Footer />
    </>
  );
}

export default App;
