import type { NextPage } from "next";
import Lottie from "react-lottie";
import * as animationData from "../constants/connectionanimationdata.json";
import { AnimatedTitle } from "../components/Landing/AnimatedTitle";
import { Button } from "../components/Landing/Button";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [pfpImg, setPfpImg] = useState<string>();
  useEffect(() => {
    if (localStorage.getItem("pfpImg")) {
      setPfpImg(localStorage.getItem("pfpImg")!);
    } else {
      let seed = Math.random();
      setPfpImg(seed.toString());
      localStorage.setItem("pfpImg", seed.toString());
    }
  }, []);
  useEffect(() => {
    window.addEventListener("mousemove", function (e) {
      var to_append = document.getElementsByClassName("loader-container")[0];
      var all = document.getElementsByClassName("loader-container");

      var parent_div = document.createElement("div");
      parent_div.className = "loader-container";
      var inner_div = document.createElement("div");
      inner_div.className = "loader";
      parent_div.appendChild(inner_div);
      var d = document.body.appendChild(parent_div);

      parent_div.style.left = e.clientX - 50 + "px";
      parent_div.style.top = e.clientY - 50 + "px";

      if (document.getElementsByClassName("loader-container").length > 50) {
        document.body.removeChild(to_append);
      }
    });
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
        <div
          style={{ position: "absolute", top: 20, right: 50, zIndex: 20000000 }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <i
              className="fa fa-cog fa-2x"
              style={{
                color: "#fff",
                position: "relative",
                top: 33,
                right: 60,
                cursor: "pointer",
              }}
            ></i>
            <i
              className="fa fa-question-circle fa-2x"
              style={{
                color: "#fff",
                position: "relative",
                top: 33,
                right: 30,
                cursor: "pointer",
              }}
            ></i>
            {pfpImg && (
              <img
                src={`https://avatars.dicebear.com/api/bottts/${pfpImg}.svg`}
                style={{
                  width: 100,
                  height: 100,
                  border: "5px solid white",
                  borderRadius: 30,
                  backgroundColor: "#003756",
                  cursor: "pointer",
                }}
                alt=""
              />
            )}
          </div>
        </div>
        <svg viewBox="0 0 900 300">
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="50%" dy=".35em">
              Connections
            </text>
          </symbol>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
          <use className="text" xlinkHref="#s-text"></use>
        </svg>
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
        <p
          style={{
            color: "#fff",
            fontWeight: "bold",
            bottom: 500,
            fontSize: 28,
            zIndex: 200000,
            position: "absolute",
          }}
        >
          A Game Of Speed & Knowledge.
        </p>
        <main style={{ width: 520, zoom: 1, zIndex: 2000, marginTop: -100 }}>
          <button style={{ height: 100 }}>
            <span>Daily Game</span>
          </button>
          <button style={{ height: 100 }}>Practice Match</button>
          <button style={{ height: 100 }}>Multiplayer</button>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <p style={{ color: "#fff" }}>
              A game built by Nikhil Rao & Vinay Rao
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
