import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom"


import Navbar from "./component/Navbar";
import Footer from "./component/Footer.js";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Setting";

function App() {
  return (
    <Router>
 <Navbar />
 <div className="container main">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
      </div>
      <Footer/>
    </Router>
 
  );
}

export default App;
