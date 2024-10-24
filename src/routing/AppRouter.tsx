import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ListView from "../views/ListView";
import Landingpage from "../views/Landingpage";
import MapView from "../views/MapView";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/list" element={<ListView/>} />
        <Route path="/map" element={<MapView/>}/>
      </Routes>
    </Router>
  )
}