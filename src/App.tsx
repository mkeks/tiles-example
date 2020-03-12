import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { ICandidate } from "./Components/Candidate";
import { Customer, ICustomer } from "./Components/Customer";
import { fakeData } from "./Components/FakeDatabase";
import { IOpportunity } from "./Components/Opportunity";
import { IPosition } from "./Components/Position";

function App() {
  const [customers, setCustomers] = useState<ICustomer[]>(fakeData);

  const moveCandidate = (
    sourcePositionId: string,
    targetPositionId: string
  ): void => {
    debugger;
    const source = getPositionFamily(sourcePositionId, customers);
    const target = getPositionFamily(targetPositionId, customers);
    if (!source || !target) {
      console.log(
        "Could not find a position with this id: " + source
          ? targetPositionId
          : sourcePositionId
      );
      return;
    }
    const candidate = source.position.candidate as ICandidate;
    source.position.candidate = undefined;
    target.position.candidate = candidate;
    let newCustomers = customers.slice();
    newCustomers[customers.indexOf(source.customer)] = source.customer;
    newCustomers[customers.indexOf(target.customer)] = target.customer;
    setCustomers(newCustomers);
  };
  return (
    <DndProvider backend={Backend}>
      <div className="grid">
        {customers.map(customer => {
          return (
            <Customer
              {...{ callback: moveCandidate, ...customer }}
              key={customer.id}
            />
          );
        })}
      </div>
    </DndProvider>
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

export default App;
