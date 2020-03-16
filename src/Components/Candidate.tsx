import React from "react";

type Props = ICandidate & { onCandidateSelect: Function };

export const Candidate = (props: Props) => {
  return (
    <div
      className="candidate"
      onClick={() => props.onCandidateSelect(props.id)}
    >
      <div className="avatar">
        <img src={props.avatar} alt="Avatar"></img>
      </div>
      {props.name}
    </div>
  );
};

export interface ICandidate {
  id: string;
  name: string;
  avatar: string;
}
