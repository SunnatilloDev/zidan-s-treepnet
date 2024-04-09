import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../page/Home";
import Trend from "../page/Trend";
import Profile from "../page/Profile";
import Messages from "../page/Messages";
import Notifications from "../page/Notifications";

const Routers = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/trend" element={<Trend />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/Notifications" element={<Notifications />} />
      </Routes>
    </Layout>
  );
};

export default Routers;
