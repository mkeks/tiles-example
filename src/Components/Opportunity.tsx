import React from "react";
import { IPosition, Position } from "./Position";

export const Opportunity = (props: IOpportunity) => {
  return (
    <div className="opportunity" key={props.id}>
      <div
        className="title"
        style={{ fontWeight: "bold", float: "left", marginBottom: "10px" }}
      >
        {props.title}
      </div>
      <div className="dueDate" style={{ fontWeight: "bold" }}>
        Due date: {props.due.toDateString()}
      </div>
      <div className="positions">
        {props.positions.map(position => {
          return <Position {...position} key={position.id} />;
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
