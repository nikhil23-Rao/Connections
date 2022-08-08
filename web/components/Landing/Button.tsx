import React from "react";

interface IProps {
  style: React.CSSProperties;
}

export const Button = ({ style }: IProps) => {
  return <a className="btn btn-1">Hover me</a>;
};
