import React, { useState, useEffect, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ICandidate } from "./Candidate";

type Props = IPosition & { callback: Function };

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
      console.log(`moving ${item.id} to ${props.id}`);
      props.callback(item.id, props.id);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });

  const [renderDropdown, setRenderDropdown] = useState<boolean>(false);

  if (props.candidate) {
    return (
      <div
        className="position"
        ref={drag}
        style={{ opacity: isDragging ? 0 : 1, cursor: "pointer" }}
      >
        <div className="avatar">
          <img src={props.candidate.avatar} alt="Posiion avatar"></img>
        </div>
        <button
          type="button"
          style={{ float: "right" }}
          onClick={() => props.callback(props.id)}
        >
          X
        </button>
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
        ref={drop}
        style={{ backgroundColor: canDrop && isOver ? "grey" : "" }}
      >
        <div className="avatar">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"
            }
            onClick={() => console.log(props.id)}
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

/*  function useOutsideAlerter(ref: any) {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("You clicked outside of me!");
      }
    }

    useEffect(() => {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef); */
