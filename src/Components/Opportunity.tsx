import React from "react";
import { IPosition, Position } from "./Position";
import { IGlobalProps } from "../App";

type Props = IOpportunity & IGlobalProps;

export const Opportunity = (props: Props) => {
  return (
    <div className="opportunity">
      <div
        style={{
          fontWeight: "bold",
          float: "left",
          marginBottom: "10px",
          fontSize: "x-large"
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          fontWeight: "bold",
          float: "right",
          marginBottom: "10px"
        }}
      >
        Due: {props.due.toISOString().substring(0, 10)}
      </div>
      <div className="positions">
        {props.positions.map(position => {
          return (
            <Position
              {...{
                ...(props as IGlobalProps),
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
