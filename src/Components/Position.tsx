import React from "react";

export const Position = (props: IPosition) => {
  return <div></div>;
};

export interface IPosition {
  id: string;
  title: string;
  isEmpty: boolean;
  image?: string;
  name?: string;
}
