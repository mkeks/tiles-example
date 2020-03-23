import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { ICandidate, Candidate } from "./Candidate";
import { PopUp } from "./PopUp";
import { IGlobalProps } from "../App";

type Props = IPosition & IGlobalProps;

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
      props.moveCandidate(item.id, props.id);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });

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
              props.setPopUp(
                <PopUp
                  {...{
                    location: { x: event.pageX, y: event.pageY },
                    onClose: () => {
                      props.setPopUp(null);
                    }
                  }}
                >
                  <div
                    style={{
                      textAlign: "left",
                      display: "grid",
                      fontSize: "small"
                    }}
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
                          fontWeight: "bold",
                          textAlign: "center"
                        }}
                        onClick={event => {
                          props.setPopUp(null);
                          event.stopPropagation();
                          props.moveCandidate(props.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </PopUp>
              );
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
                  props.setPopUp(
                    <PopUp
                      {...{
                        location: { x: event.pageX, y: event.pageY },
                        onClose: () => {
                          props.setPopUp(null);
                        }
                      }}
                    >
                      <div style={{ display: "grid" }}>
                        {props.candidates.map(candidate => {
                          return (
                            <Candidate
                              {...{
                                onCandidateSelect: (candidateId: string) => {
                                  props.moveCandidate(candidateId, props.id);
                                  props.setPopUp(null);
                                },
                                ...candidate
                              }}
                              key={candidate.id}
                            />
                          );
                        })}
                      </div>
                    </PopUp>
                  );
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
          props.moveCandidate(props.id);
        }}
      >
        X
      </button>
      <div style={{ textAlign: "left" }}>
        {props.candidate?.name || "Staffing"}
      </div>
      <div style={{ textAlign: "left", fontWeight: "bold" }}>{props.title}</div>
    </div>
  );
};

export interface IPosition {
  id: string;
  title: string;
  candidate?: ICandidate;
}
