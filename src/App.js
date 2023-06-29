import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import BookDesc from "./components/BookDesc";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Profile />} />
        <Route path="/books/:id" element={<BookDesc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
