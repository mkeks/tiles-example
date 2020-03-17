import React from "react";
import { IPosition, Position } from "./Position";
import { ICandidate } from "./Candidate";

type Props = IOpportunity & { callback: Function; dropDownData: ICandidate[] };

export const Opportunity = (props: Props) => {
  return (
    <div className="opportunity">
      <div
        style={{
          fontWeight: "bold",
          fontSize: "large",
          flex: "1 1"
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          fontWeight: "bold",
          flex: "1 1",
          marginBottom: "10px"
        }}
      >
        {props.due.toISOString().substring(0, 10)}
      </div>
      <div
        style={{
          fontWeight: "bold",
          flex: "1 1",
          marginBottom: "10px"
        }}
      >
        {props.positions[0].title}
      </div>
      <div className="positions" style={{ flex: "5 5" }}>
        {props.positions.map(position => {
          return (
            <Position
              {...{
                dropDownData: props.dropDownData,
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
