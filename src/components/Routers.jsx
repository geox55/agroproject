import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PlanPage from "../pages/PlanPage/PlanPage";

function Routers() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/plan"} element={<PlanPage />} />
    </Routes>
  );
}

export default Routers;
