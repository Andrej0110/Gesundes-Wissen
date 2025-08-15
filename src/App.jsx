import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import EntgiftenAusleiten from "./components/EntgiftenAusleiten.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/entgiften" element={<EntgiftenAusleiten />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
