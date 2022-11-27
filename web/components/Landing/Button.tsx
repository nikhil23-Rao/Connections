interface IProps {
  name: string;
  bgColor: string;
}

export const Button = ({ name, bgColor }: IProps) => {
  return (
    <>
      <button className="cybr-btn" style={{ backgroundColor: bgColor }}>
        {name}
        <span aria-hidden className="cybr-btn__glitch">
          {name}
        </span>
        <span aria-hidden className="cybr-btn__tag">
          BETA
        </span>
      </button>
    </>
  );
};
