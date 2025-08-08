// src/App.tsx (or your page)
import Hero from "./components/Hero";
import Timetable from "./components/Timetable";
import Footer from "./components/Footer";
import PrivateTraining from "./components/PrivateTraining";


function App() {
  return (
    <>
      <Hero
        bgImageUrl="https://res.cloudinary.com/dcuad6p9z/image/upload/v1754426141/hero-fit_x3emdt.jpg"
        logoUrl="https://res.cloudinary.com/dcuad6p9z/image/upload/v1754637745/Thegoodfit-logo-removebg-preview_fhcoii.png"
        whatsappNumber="2348084609951"
        gymName="DeeGoodFit Studio"
      />
      {/* ...other sections... */}
      <section id="timetable" className="min-h-[60vh] bg-black text-white">
        <Timetable whatsappNumber="2348084609951" gymName="DeeGoodFit Studio" />
        {/* timetable goes here */}
      </section>
        <PrivateTraining whatsappNumber="2348084609951" backgroundImageUrl="https://res.cloudinary.com/dcuad6p9z/image/upload/v1754590973/pexels-pixabay-416717_sva4hu.jpg"/>
      <Footer/>
    </>
  );
}

export default App;
