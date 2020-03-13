import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { ICandidate } from "./Components/Candidate";
import { Customer, ICustomer } from "./Components/Customer";
import { fakeData, fakeCandidates } from "./Components/FakeDatabase";
import { IOpportunity, Opportunity } from "./Components/Opportunity";
import { IPosition } from "./Components/Position";

function App() {
  const [customers, setCustomers] = useState<ICustomer[]>(fakeData);
  const [unemployed, setUnemployed] = useState<ICandidate[]>(
    getUnemployed(customers)
  );
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
      const candidate = source.position.candidate as ICandidate;
      source.position.candidate = undefined;
      let newCustomers = customers.slice();
      newCustomers[customers.indexOf(source.customer)] = source.customer;
      setCustomers(newCustomers);
      setUnemployed(getUnemployed(customers));
    }
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
