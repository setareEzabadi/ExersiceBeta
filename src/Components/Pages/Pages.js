import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Wallet from "../Wallet.jsx/Wallet";

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}>
        <Route path="/Wallet" element={<Wallet />} />
      </Route>
    </Routes>
  );
};

export default Pages;
