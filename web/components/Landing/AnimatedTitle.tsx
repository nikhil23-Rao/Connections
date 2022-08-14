export const AnimatedTitle = () => {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "-16%", marginBottom: "-29%" }}
      >
        <svg viewBox="0 0 600 300">
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
    </>
  );
};
