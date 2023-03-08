import Home from "./pages/Home";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import LayoutDashboard from "./layouts/LayoutDashboard";
function App() {
  return (
    <Routes>
      <Route element={<LayoutDashboard></LayoutDashboard>}>
        <Route path="/" element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
