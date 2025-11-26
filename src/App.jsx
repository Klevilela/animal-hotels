import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import TutorPage from "./pages/Tutorpage";
import AnimalPage from "./pages/AnimalPage"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/registro" element={<Register />} />

        <Route path="/tutores" element={<TutorPage />} />

        <Route path="/animais" element={<AnimalPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
