import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/reset.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import ChildArena from "./pages/ChildArena/ChildArena";
import Food from "./pages/Food/Food";
import Poster from "./pages/Poster/Poster";
import Ticket from "./pages/Ticket/Ticket";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ChidrenArena" element={<ChildArena />} />
                    <Route path="/Food" element={<Food />} />

                    <Route path="/Poster/:id" element={<Poster />} />

                    <Route path="/Ticket" element={<Ticket />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}
