import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Collections from "./pages/Collections";
import MusicVideos from "./pages/MusicVideos";
import Radio from "./pages/Radio";
import Profile from "./pages/Profile";
import Album from "./pages/Album";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route path="" exact element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="musicvideos" element={<MusicVideos />} />
          <Route path="radio" element={<Radio />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/album" element={<Album />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
