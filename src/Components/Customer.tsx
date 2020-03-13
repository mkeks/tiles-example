import React, { useState } from "react";
import { IOpportunity, Opportunity } from "./Opportunity";

type Props = ICustomer & { callback: Function };

export const Customer = (props: Props) => {
  const [ref, setRef] = useState<HTMLDivElement>();
  const gridSize = () => {
    if (ref?.parentElement?.parentElement) {
      const grid = ref!.parentElement!.parentElement;
      const title = ref!.firstChild as HTMLElement;
      const rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
      );
      const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      );
      const rowSpan = Math.ceil(
        (ref.clientHeight + rowGap + title.clientHeight / 2) /
          (rowHeight + rowGap)
      );
      return "span " + rowSpan;
    }
    return 0;
  };
  return (
    <div className="customer" style={{ gridRowEnd: gridSize() }}>
      <div
        className="content"
        ref={ref => {
          if (ref) {
            setRef(ref);
          }
        }}
      >
        <h1>{props.name}</h1>
        {props.opps.map(opp => {
          return (
            <Opportunity
              {...{ callback: props.callback, ...opp }}
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
