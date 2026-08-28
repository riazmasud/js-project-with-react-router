import { Outlet } from "react-router-dom";
import PageIntro from "../components/PageIntro";

const ScrubShop = () => {
  return (
    <div className="scrub-shop">
      <h1>ScrubShop</h1>
      <PageIntro />
      <Outlet />
    </div>
  );
};

export default ScrubShop;
