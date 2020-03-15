import React from "react";
import { IPosition, Position } from "./Position";

type Props = IOpportunity & { callback: Function; displayDropdown: Function };

export const Opportunity = (props: Props) => {
  return (
    <div className="opportunity">
      <div
        className="title"
        style={{
          fontWeight: "bold",
          float: "left",
          marginBottom: "10px"
        }}
      >
        {props.title}
      </div>
      <div className="dueDate" style={{ fontWeight: "bold" }}>
        Due date: {props.due.toDateString()}
      </div>
      <div className="positions">
        {props.positions.map(position => {
          return (
            <Position
              {...{
                displayDropdown: props.displayDropdown,
                callback: props.callback,
                ...position
              }}
              key={position.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export interface IOpportunity {
  id: string;
  title: string;
  due: Date;
  positions: IPosition[];
}
