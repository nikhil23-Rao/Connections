import type { NextPage } from "next";
import Lottie from "react-lottie";
import * as animationData from "../constants/connectionanimationdata.json";
import { AnimatedTitle } from "../components/Landing/AnimatedTitle";
import { Button } from "../components/Landing/Button";
import { useEffect } from "react";

const Home: NextPage = () => {
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
  }, [typeof window, typeof document]);

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
        <main style={{ width: 520, zoom: 1, marginTop: -200, zIndex: 2000 }}>
          <button style={{ height: 100 }}>
            <span>Daily Game</span>
          </button>
          <button style={{ height: 100 }}>Practice Match</button>
          <button style={{ height: 100 }}>Multiplayer</button>
        </main>
      </div>
    </>
  );
};

export default Home;
