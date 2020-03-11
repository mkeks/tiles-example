import React from "react";
import { IPosition } from "./Position";

export const Opportunity = (props: IOpportunity) => {
  return <div></div>;
};

export interface IOpportunity {
  id: string;
  title: string;
  due: Date;
  positions: IPosition[];
}
