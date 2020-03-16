import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ICandidate } from "./Candidate";
import { DropDown } from "./DropDown";

type Props = IPosition & { callback: Function; dropDownData: ICandidate[] };

export const Position = (props: Props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "position", id: props.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "position",
    drop: (item: any) => {
      props.callback(item.id, props.id);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });

  const [displayDropDownAt, setDisplayDropDownAt] = useState<{
    x: number;
    y: number;
  } | null>();

  return (
    <div
      key="position"
      className="position"
      ref={props.candidate ? drag : drop}
      style={{
        opacity: isDragging ? 0 : 1,
        cursor: "pointer",
        backgroundColor: canDrop && isOver ? "grey" : ""
      }}
    >
      <div className="avatar">
        <img
          src={
            props.candidate?.avatar ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"
          }
          onClick={
            props.candidate
              ? undefined
              : event => {
                  setDisplayDropDownAt({ x: event.pageX, y: event.pageY });
                }
          }
          alt="Avatar"
        ></img>
      </div>
      <button
        type="button"
        style={{ float: "right", display: props.candidate ? "" : "none" }}
        onClick={() => props.callback(props.id)}
      >
        X
      </button>
      <div className="name" style={{ textAlign: "left" }}>
        {props.candidate?.name || "Staffing"}
      </div>
      <div className="title" style={{ textAlign: "left", fontWeight: "bold" }}>
        {props.title}
      </div>
      {displayDropDownAt ? (
        <DropDown
          {...{
            dropDownData: props.dropDownData,
            location: displayDropDownAt,
            parentId: props.id,
            closeDropDown: () => {
              setDisplayDropDownAt(null);
            },
            setCandidatePosition: (candidateId: string) => {
              props.callback(candidateId, props.id);
            }
          }}
        />
      ) : null}
    </div>
  );
};

export interface IPosition {
  id: string;
  title: string;
  candidate?: ICandidate;
}
