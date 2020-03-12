import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { ICandidate } from "./Candidate";

export const Position = (props: IPosition & { callback: Function }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "position", id: props.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "position",
    drop: (item: any) => {
      console.log(`moving ${item.id} to ${props.id}`);
      props.callback(item.id, props.id);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });

  if (props.candidate) {
    return (
      <div
        className="position"
        key={props.id}
        ref={drag}
        style={{ opacity: isDragging ? 0 : 1, cursor: "pointer" }}
      >
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
      <div
        className="position"
        key={props.id}
        ref={drop}
        style={{ backgroundColor: canDrop && isOver ? "grey" : "" }}
      >
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
