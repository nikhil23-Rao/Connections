export const Buttons = () => {
  return (
    <>
      <div
        className="buttons"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <button
          className="btn-hover color-1"
          style={{ width: "35%", height: 100, borderRadius: 5 }}
        >
          Play Daily Game
        </button>
        <button
          className="btn-hover color-2"
          style={{
            width: "35%",
            height: 100,
            borderRadius: 5,
          }}
        >
          Play Random Game
        </button>
        <button
          className="btn-hover color-3"
          style={{ width: "35%", height: 100, borderRadius: 5 }}
        >
          Play With Friends
        </button>
      </div>
    </>
  );
};
