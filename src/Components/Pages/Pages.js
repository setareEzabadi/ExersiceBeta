import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}>
        {/* <Route path="/teacher" element={<UserCounter />} /> */}
      </Route>
    </Routes>
  );
};

export default Pages;
