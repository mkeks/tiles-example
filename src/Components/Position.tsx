import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ICandidate, Candidate } from "./Candidate";
import { PopUp } from "./PopUp";

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

  const [addPopUpPos, setAddPopUpPos] = useState<{
    x: number;
    y: number;
  } | null>();

  const [infoPopUpPos, setInfoPopUpPos] = useState<{
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
      onClick={
        props.candidate
          ? event => {
              setInfoPopUpPos({ x: event.pageX, y: event.pageY });
            }
          : undefined
      }
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
                  setAddPopUpPos({ x: event.pageX, y: event.pageY });
                }
          }
          alt="Avatar"
        ></img>
      </div>
      <button
        type="button"
        style={{ float: "right", display: props.candidate ? "" : "none" }}
        onClick={event => {
          event.stopPropagation();
          props.callback(props.id);
        }}
      >
        X
      </button>
      <div className="name" style={{ textAlign: "left" }}>
        {props.candidate?.name || "Staffing"}
      </div>
      <div className="title" style={{ textAlign: "left", fontWeight: "bold" }}>
        {props.candidate ? props.candidate.techStack : ""}
      </div>
      {addPopUpPos ? (
        <PopUp
          {...{
            location: addPopUpPos,
            onClose: () => {
              setAddPopUpPos(null);
            }
          }}
        >
          <div style={{ display: "grid" }}>
            {props.dropDownData.map(candidate => {
              return (
                <Candidate
                  {...{
                    onCandidateSelect: (candidateId: string) => {
                      props.callback(candidateId, props.id);
                      setAddPopUpPos(null);
                    },
                    ...candidate
                  }}
                  key={candidate.id}
                />
              );
            })}
          </div>
        </PopUp>
      ) : null}
      {infoPopUpPos ? (
        <PopUp
          {...{
            location: infoPopUpPos,
            onClose: () => {
              setInfoPopUpPos(null);
            }
          }}
        >
          <div
            style={{ textAlign: "left", display: "grid", fontSize: "small" }}
          >
            <div style={{ display: "flex", marginBottom: 10 }}>
              <div className="avatar">
                <img src={props.candidate!.avatar} alt="Avatar"></img>
              </div>
              <div
                style={{
                  fontSize: "large",
                  textAlign: "center",
                  fontWeight: "bold"
                }}
              >
                {props.candidate!.name}
              </div>
            </div>
            <div>{"Seniority: " + props.candidate!.seniority}</div>
            <div>{"Tech stack: " + props.candidate!.techStack}</div>
            <div>{"Status: on bench"}</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <button
                style={{
                  background: "#d42626",
                  color: "white",
                  width: 100,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
                onClick={event => {
                  setInfoPopUpPos(null);
                  event.stopPropagation();
                  props.callback(props.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </PopUp>
      ) : null}
    </div>
  );
};

export interface IPosition {
  id: string;
  title: string;
  candidate?: ICandidate;
}
