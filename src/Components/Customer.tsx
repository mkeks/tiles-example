import React, { useState } from "react";
import { IOpportunity, Opportunity } from "./Opportunity";
import { ICandidate } from "./Candidate";

type Props = ICustomer & { callback: Function; dropDownData: ICandidate[] };

export const Customer = (props: Props) => {
  const [isCollapsed, collapse] = useState<boolean>(false);
  return (
    <div className="customer">
      <div className="header" style={{ display: "flex" }}>
        <div
          className="collapse"
          onClick={event => {
            collapse(!isCollapsed);
          }}
        >
          {isCollapsed ? "▼" : "▲"}
        </div>
        <div
          className="title"
          style={{
            textAlign: "left",
            marginLeft: "10px",
            fontSize: "xx-large",
            fontWeight: "bold"
          }}
        >
          {props.name}
        </div>
      </div>
      <div className="content" style={{ display: isCollapsed ? "none" : "" }}>
        {props.opps.map(opp => {
          return separateByPositionName(opp).map(sortedOpp => {
            return (
              <Opportunity
                {...{
                  dropDownData: props.dropDownData,
                  callback: props.callback,
                  ...sortedOpp
                }}
                key={sortedOpp.id}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

const separateByPositionName = (opp: IOpportunity): IOpportunity[] => {
  let dict = new Map<string, IOpportunity>();
  for (let pos of opp.positions) {
    if (dict.has(pos.title)) {
      let temp = dict.get(pos.title)!;
      temp.positions.push(pos);
      dict.set(pos.title, temp);
    } else {
      dict.set(pos.title, {
        id: opp.id,
        title: opp.title,
        due: opp.due,
        positions: [pos]
      });
    }
  }
  return Array.from(dict.values());
};

export interface ICustomer {
  id: string;
  name: string;
  opps: IOpportunity[];
}
