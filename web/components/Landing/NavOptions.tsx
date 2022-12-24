interface IProps {
  pfpImg: string;
}

export const NavOptions = ({ pfpImg }: IProps) => {
  return (
    <div style={{ position: "absolute", top: 20, right: 50, zIndex: 20000000 }}>
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
  );
};
