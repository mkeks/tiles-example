import React, { useEffect, useRef } from "react";
import { ICandidate, Candidate } from "./Candidate";

type Props = {
  dropDownData: ICandidate[];
  location: { x: number; y: number };
  closeDropDown: Function;
  setCandidatePosition: Function;
};

export const DropDown = (props: Props) => {
  function useOutsideAlerter(ref: any) {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.closeDropDown();
      }
    }

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div
      className="dropDown"
      style={{
        position: "absolute",
        top: props.location.y,
        left: props.location.x
      }}
      ref={wrapperRef}
    >
      {props.dropDownData.map(candidate => {
        return (
          <Candidate
            {...{
              onCandidateSelect: (candidateId: string) => {
                props.setCandidatePosition(candidateId);
                props.closeDropDown(null);
              },
              ...candidate
            }}
            key={candidate.id}
          />
        );
      })}
    </div>
  );
};
