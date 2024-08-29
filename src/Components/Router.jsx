import { Routes, Route } from "react-router-dom";
import Red from "../Pages/Red";
import Blue from "../Pages/Blue";
import Home from "../Pages/Home";


export default function Router() {
  return (

<div id="main-section">
          <Routes>
              <Route path="/blue" element={<Blue/>}> </Route>
              <Route path="/red" element={<Red/>}> </Route>
              <Route path="/" element={<Home/>}> </Route>
          </Routes>
      </div>

  )
}
