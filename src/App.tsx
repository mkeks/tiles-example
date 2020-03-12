import React, { useState } from "react";
import { ICustomer, Customer } from "./Components/Customer";
import { fakeData } from "./Components/FakeDatabase";

function App() {
  const [customers, setCustomers] = useState<ICustomer[]>(fakeData);
  return (
    <div className="grid">
      {customers.map(customer => {
        return <Customer {...customer} key={customer.id} />;
      })}
    </div>
  );
}

export default App;
