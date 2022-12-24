export const PlayGame = () => {
  return (
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
        <p style={{ color: "#fff" }}>A game built by Nikhil Rao & Vinay Rao</p>
      </div>
    </main>
  );
};
