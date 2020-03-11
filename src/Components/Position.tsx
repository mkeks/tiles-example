import React from "react";

export const Position = (props: IPosition) => {
  if (props.isEmpty) {
    return <div>Empty</div>;
  } else {
    return (
      <div className="position" key={props.id}>
        <div className="avatar">
          <img src={props.image}></img>
        </div>
        <div className="title">{props.title}</div>
      </div>
    );
  }
};

export interface IPosition {
  id: string;
  title: string;
  isEmpty: boolean;
  image?: string;
  name?: string;
}
