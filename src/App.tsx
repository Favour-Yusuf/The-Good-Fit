// src/App.tsx (or your page)
import Hero from "./components/Hero";
import Timetable from "./components/Timetable";


function App() {
  return (
    <>
      <Hero
        bgImageUrl="https://res.cloudinary.com/dcuad6p9z/image/upload/v1754426141/hero-fit_x3emdt.jpg"
        logoUrl="https://res.cloudinary.com/dcuad6p9z/image/upload/v1754426028/Thegoodfit-logo_a5zvnk.jpg"
        whatsappNumber="2348012345678"
        gymName="The Good Fit"
      />
      {/* ...other sections... */}
      <section id="timetable" className="min-h-[60vh] bg-black text-white">
        <Timetable whatsappNumber="2349029903813" gymName="The Good Fit" />
        {/* timetable goes here */}
      </section>
    </>
  );
}

export default App;
