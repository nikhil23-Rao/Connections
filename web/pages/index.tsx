import type { NextPage } from "next";
import { AnimatedTitle } from "../components/Landing/AnimatedTitle";
import { Button } from "../components/Landing/Button";

const Home: NextPage = () => {
  return (
    <>
      <div style={{ marginTop: -200 }}>
        <AnimatedTitle />
        <div style={{ marginLeft: "22%", marginTop: -350 }}>
          <Button style={{ width: "50%" }} />
        </div>
      </div>
    </>
  );
};

export default Home;
