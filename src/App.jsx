import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index.jsx";
import Signup from "./pages/Signup/index.jsx";
import useRouteElement from "./useRouteElement.jsx";

import "./App.css";

function App() {
  const routeElement = useRouteElement();

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {routeElement}
    </div>
  );
}

export default App;
