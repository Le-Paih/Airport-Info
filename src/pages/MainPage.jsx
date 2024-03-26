import { useEffect } from "react";

import Intro from "../components/Intro";
import Interactive from "./Interactive";
import Title from "../components/Title";
import SearchTitle from "../components/SearchTitle";
import Footer from "../components/Footer";

function MainPage() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <div className="dark:bg-dGrey mx-auto mt-[3.9rem] min-h-screen w-screen overflow-x-hidden transition duration-300 md:mt-[4.64rem]">
      <Title />
      <Intro />
      <SearchTitle />
      <Interactive />
      <Footer />
    </div>
  );
}

export default MainPage;
