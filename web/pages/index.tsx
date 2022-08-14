import type { NextPage } from "next";
import { AnimatedTitle } from "../components/Landing/AnimatedTitle";
import { Buttons } from "../components/Landing/Buttons";

const Home: NextPage = () => {
  return (
    <>
      <AnimatedTitle />
      <Buttons />
    </>
  );
};

export default Home;
