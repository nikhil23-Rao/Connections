import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AnimatedTitle } from "../components/Landing/AnimatedTitle";
import { Button } from "../components/Landing/Button";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <AnimatedTitle />
    </>
  );
};

export default Home;
