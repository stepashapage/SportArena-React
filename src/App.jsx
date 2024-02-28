import "./styles/reset.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import ChildArena from "./pages/ChildArena/ChildArena";
import Food from "./pages/Food/Food";
import Poster from "./pages/Poster/Poster";
import Shop from "./pages/Shop/Shop";

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

                    <Route path="/Shop" element={<Shop />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}
