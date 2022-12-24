import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { AnimatedTitle } from "../components/Landing/AnimatedTitle";
import { NavOptions } from "../components/Landing/NavOptions";
import { PlayGame } from "../components/Landing/PlayGame";
import { Slogan } from "../components/Landing/Slogan";
import { getPfpImg } from "../utils/getPfpImg";
import { useMousePath } from "../utils/mousePath";

const Home: NextPage = () => {
  const [pfpImg, setPfpImg] = useState<string>();
  useEffect(() => {
    getPfpImg(setPfpImg);
  }, []);
  useEffect(() => {
    useMousePath();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#111",
          height: "50vh",
          marginTop: -30,
          zoom: 1,
        }}
        className="center mainmenu"
      >
        <NavOptions pfpImg={pfpImg!} />
        <AnimatedTitle />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#111",
          height: "53.5vh",
        }}
        className="center"
      >
        <Slogan />
        <PlayGame />
      </div>
    </>
  );
};

export default Home;
