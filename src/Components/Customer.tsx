import React from "react";
import { IOpportunity } from "./Opportunity";

export const Customer = () => {
  return <div></div>;
};

export interface ICustomer {
  id: string;
  name: string;
  opps: IOpportunity[];
}
