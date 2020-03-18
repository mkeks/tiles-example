import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { ICandidate } from "./Components/Candidate";
import { Customer, ICustomer } from "./Components/Customer";
import { fakeData, fakeCandidates } from "./Components/FakeDatabase";
import { IOpportunity } from "./Components/Opportunity";
import { IPosition } from "./Components/Position";
import { PopUp } from "./Components/PopUp";

function App() {
  const [customers, setCustomers] = useState<ICustomer[]>(fakeData);
  const [unemployed, setUnemployed] = useState<ICandidate[]>(
    getUnemployed(customers)
  );
  const [displayAddPos, setDisplayAddPos] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const moveCandidate = (sourceId: string, targetId?: string): void => {
    if (targetId) {
      const source = getPositionFamily(sourceId, customers);
      const target = getPositionFamily(targetId, customers);
      if (!target) {
        console.log("Could not find a position with this id: " + targetId);
        return;
      }
      if (!source) {
        const sourceCandidate = unemployed.find(c => c.id === sourceId);
        target.position.candidate = sourceCandidate;
        let newCustomers = customers.slice();
        newCustomers[customers.indexOf(target.customer)] = target.customer;
        setCustomers(newCustomers);
        setUnemployed(getUnemployed(customers));
      } else {
        const candidate = source.position.candidate as ICandidate;
        source.position.candidate = undefined;
        target.position.candidate = candidate;
        let newCustomers = customers.slice();
        newCustomers[customers.indexOf(source.customer)] = source.customer;
        newCustomers[customers.indexOf(target.customer)] = target.customer;
        setCustomers(newCustomers);
      }
    } else {
      const source = getPositionFamily(sourceId, customers);
      if (!source) {
        console.log("Could not find a position with this id: " + sourceId);
        return;
      }
      source.position.candidate = undefined;
      let newCustomers = customers.slice();
      newCustomers[customers.indexOf(source.customer)] = source.customer;
      setCustomers(newCustomers);
      setUnemployed(getUnemployed(customers));
    }
  };
  return (
    <div>
      <button
        style={{
          background: "green",
          color: "white",
          width: 100,
          height: 30,
          fontWeight: "bold",
          textAlign: "center",
          border: "none",
          borderRadius: "15px",
          margin: "0px 0px 10px 20px"
        }}
        onClick={event => {
          console.log(setDisplayAddPos({ x: event.pageX, y: event.pageY }));
        }}
      >
        Add
      </button>
      {displayAddPos ? (
        <PopUp
          {...{
            location: displayAddPos,
            onClose: () => {
              setDisplayAddPos(null);
            },
            style: { width: "100", background: "#e3e3e3" }
          }}
        >
          <div className="add" style={{ textAlign: "center" }}>
            <div>Opportunity</div>
            <div>Position</div>
            <div>Candidate</div>
            <div>Customer</div>
          </div>
        </PopUp>
      ) : null}
      <DndProvider backend={Backend}>
        <div className="grid">
          {customers.map(customer => {
            return (
              <Customer
                {...{
                  dropDownData: unemployed,
                  callback: moveCandidate,
                  ...customer
                }}
                key={customer.id}
              />
            );
          })}
        </div>
      </DndProvider>
    </div>
  );
}

const getPositionFamily = (
  id: string,
  allCustomers: ICustomer[]
): {
  customer: ICustomer;
  opportunity: IOpportunity;
  position: IPosition;
} | null => {
  for (let _customer of allCustomers)
    for (let _opportunity of _customer.opps)
      for (let _position of _opportunity.positions)
        if (_position.id === id) {
          return {
            customer: _customer,
            opportunity: _opportunity,
            position: _position
          };
        }
  return null;
};
const getUnemployed = (allCustomers: ICustomer[]): ICandidate[] => {
  const candidates = fakeCandidates;
  let emploeyd: ICandidate[] = [];
  for (let _customer of allCustomers)
    for (let _opportunity of _customer.opps)
      for (let _position of _opportunity.positions)
        if (_position.candidate) emploeyd.push(_position.candidate);
  return candidates.filter(x => !emploeyd.includes(x));
};
export default App;
