import "./App.css";
// import NavBar from './NavBar';
import Header from "./Header";
// import Socials from './Socials';
import Hero from "./Hero";
import VideoSection from "./VideoSection";
import Music from "./Music";
import Merch from "./Merch";
import Shows from "./Shows";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Render the Navbar on all pages */}
      <Header />
      <div className="main-content">
        {" "}
        {/* Wrap all components in this div */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <VideoSection />
                <Merch />
                <Music />
                <Shows />
              </>
            }
          />
          <Route path="/music" element={<Music />} />

          <Route path="./Music"></Route>
          <Route path="/merch" element={<Merch />} />
          <Route path="/shows" element={<Shows />} />
        </Routes>
      </div>

      {/* Define routes for different pages */}
    </Router>
  );
}

export default App;
