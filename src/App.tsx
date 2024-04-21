import "./styles/reset.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import ChildArena from "./pages/ChildArena/ChildArena";
import Food from "./pages/Food/Food";
import Poster from "./pages/Poster/Poster";
import Shop from "./pages/Shop/Shop";
import { CafeChildArena } from "./pages/CafeChildArena/CafeChildArena";
import { Basket } from "./pages/Basket/Basket";
import { NotFound } from "./pages/NotFound";
import { Posters } from "./pages/Posters/Posters";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Poster/:id" element={<Poster />} />
                    <Route path="/Shop" element={<Shop />} />

                    <Route path="/Basket" element={<Basket />} />

                    <Route path="/ChidrenArena" element={<ChildArena />} />
                    <Route path="/Cafe" element={<CafeChildArena />} />
                    <Route path="/Cafe/:id" element={<Posters />} />

                    <Route path="/Food" element={<Food />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}
