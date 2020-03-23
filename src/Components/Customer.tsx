import React, { useState } from "react";
import { IOpportunity, Opportunity } from "./Opportunity";
import { IGlobalProps } from "../App";

type Props = ICustomer & IGlobalProps;

export const Customer = (props: Props) => {
  const [ref, setRef] = useState<HTMLDivElement>();
  const calculateGridSize = (): string => {
    if (ref?.parentElement?.parentElement) {
      const grid = ref!.parentElement!.parentElement;
      const rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
      );
      const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      );
      const rowSpan = Math.ceil(
        (ref.clientHeight + rowGap) / (rowHeight + rowGap)
      );
      return "span " + rowSpan;
    }
    return "0";
  };
  return (
    <div className="customer" style={{ gridRowEnd: calculateGridSize() }}>
      <div ref={ref => setRef(ref!)}>
        <div
          style={{
            textAlign: "left",
            marginLeft: "10px",
            fontSize: "xx-large",
            fontWeight: "bold"
          }}
        >
          {props.name}
        </div>
        {props.opps.map(opp => {
          return (
            <Opportunity
              {...{
                ...(props as IGlobalProps),
                ...opp
              }}
              key={opp.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export interface ICustomer {
  id: string;
  name: string;
  opps: IOpportunity[];
}
