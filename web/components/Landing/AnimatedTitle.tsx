export const AnimatedTitle = () => {
  return (
    <>
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
    </>
  );
};
