import React from "react";

type Props = ICandidate;

export const Candidate = (props: Props) => {
  return <div>{props.name}</div>;
};

export interface ICandidate {
  id: string;
  name: string;
  avatar: string;
}
