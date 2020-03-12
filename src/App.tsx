import React, { useState } from "react";
import { ICustomer, Customer } from "./Components/Customer";
import { fakeData } from "./Components/FakeDatabase";
import { IOpportunity } from "./Components/Opportunity";
import { IPosition } from "./Components/Position";
import { ICandidate } from "./Components/Candidate";

function App() {
  const [customers, setCustomers] = useState<ICustomer[]>(fakeData);

  const moveCandidate = (
    sourcePositionId: string,
    targetPositionId: string
  ): void => {
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
    const sourceCustomerIndex = customers.indexOf(source.customer);
    const targetCustomerIndex = customers.indexOf(target.customer);
    const candidate = source.position.candidate as ICandidate;
    source.position.candidate = undefined;
    target.position.candidate = candidate;
    setCustomers({
      ...customers,
      [sourceCustomerIndex]: source.customer,
      [targetCustomerIndex]: target.customer
    });
  };
  return (
    <div className="grid">
      {customers.map(customer => {
        return <Customer {...customer} key={customer.id} />;
      })}
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

export default App;
