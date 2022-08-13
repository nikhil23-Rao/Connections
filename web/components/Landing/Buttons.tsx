export const Buttons = () => {
  return (
    <>
      <div
        className="buttons"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          className="btn-hover color-1"
          style={{ width: 300, height: 180, borderRadius: 5 }}
        >
          Daily Game
        </button>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            className="btn-hover color-2"
            style={{ width: 300, height: 100, borderRadius: 5 }}
          >
            Practice Game
          </button>
          <button
            className="btn-hover color-3"
            style={{ width: 300, height: 100, borderRadius: 5 }}
          >
            Play With Friends
          </button>
        </div>
      </div>
    </>
  );
};
