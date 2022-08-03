import LandingPage from "./Routes/LandingPage";
import TrainingPage from "./Routes/TrainingPage";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/training" element={<TrainingPage />} />
      </Routes>
    </>
  );
}

export default App;



