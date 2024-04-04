import { useEffect } from "react";

import Intro from "../components/Intro";
import Interactive from "./Interactive";
import Title from "../components/Title";
import SearchTitle from "../components/SearchTitle";

function MainPage() {
  useEffect(() => {
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <div className="mx-auto h-auto min-h-screen w-screen overflow-x-hidden transition duration-300 dark:bg-dGrey ">
      <Title />
      <Intro />
      <SearchTitle />
      <Interactive />
    </div>
  );
}

export default MainPage;

// mt-[3.9rem]
// md:mt-[4.64rem]
