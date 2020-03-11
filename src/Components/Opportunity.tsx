import React from "react";
import { IPosition, Position } from "./Position";

export const Opportunity = (props: IOpportunity) => {
  return (
    <div className="opportunity" key={props.id}>
      <div className="title">{props.title}</div>
      <div className="dueDate">{props.due.toDateString()}</div>
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
