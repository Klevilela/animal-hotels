import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TutorPage from "./pages/Tutorpage";
import AnimalPage from "./pages/AnimalPage"; 
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/registro" element={<Register />} />
        <Route path="/tutores" element={<TutorPage />} />

        <Route path="/animais" element={<AnimalPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
