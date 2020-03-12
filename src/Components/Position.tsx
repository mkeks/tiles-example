import React from "react";
import { ICandidate } from "./Candidate";

export const Position = (props: IPosition) => {
  if (props.candidate) {
    return (
      <div className="position" key={props.id}>
        <div className="avatar">
          <img src={props.candidate.avatar} alt="Posiion avatar"></img>
        </div>
        <div className="name" style={{ textAlign: "left" }}>
          {props.candidate.name}
        </div>
        <div
          className="title"
          style={{ textAlign: "left", fontWeight: "bold" }}
        >
          {props.title}
        </div>
      </div>
    );
  } else {
    return (
      <div className="position" key={props.id}>
        <div className="avatar">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"
            }
            alt="Posiion avatar"
          ></img>
        </div>
        <div className="name" style={{ textAlign: "left" }}>
          Staffing
        </div>
        <div
          className="title"
          style={{ textAlign: "left", fontWeight: "bold" }}
        >
          {props.title}
        </div>
      </div>
    );
  }
};

export interface IPosition {
  id: string;
  title: string;
  candidate?: ICandidate;
}
