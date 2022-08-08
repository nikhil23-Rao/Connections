import type { NextPage } from "next";
import { AnimatedTitle } from "../components/Landing/AnimatedTitle";
import { Button } from "../components/Landing/Button";

const Home: NextPage = () => {
  return (
    <>
      <AnimatedTitle />
      <Button />
    </>
  );
};

export default Home;
