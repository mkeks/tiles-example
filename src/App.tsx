import React from "react";
import { ICustomer, Customer } from "./Components/Customer";

const genId = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);
const fakeDataFromDatabase: ICustomer[] = [
  {
    id: genId(),
    name: "Google",
    opps: [
      {
        id: genId(),
        title: "SpyNet",
        due: new Date(2020, 1, 12),
        positions: [
          {
            id: genId(),
            title: "Junior developer",
            isEmpty: false,
            image:
              "https://cdn.theatlantic.com/thumbor/rw3VIckWO6T6y_xYc-Q12U0tNAQ=/68x29:1211x672/720x405/media/img/upload/wire/2014/05/19/shrek1/original.jpg",
            name: "shrek"
          },
          {
            id: genId(),
            title: "Senior developer",
            isEmpty: false,
            image:
              "https://i.pinimg.com/600x315/2c/c0/c9/2cc0c9c19f0ee720f8aee7d8185e55e1.jpg",
            name: "dunkey"
          },
          {
            id: genId(),
            title: "Middle developer",
            isEmpty: false,
            image: "https://memepedia.ru/wp-content/uploads/2018/04/e.jpg",
            name: "farquaad"
          },
          {
            id: genId(),
            title: "Android developer",
            isEmpty: true
          },
          {
            id: genId(),
            title: "Homosexual developer",
            isEmpty: true
          }
        ]
      }
    ]
  },
  {
    id: genId(),
    name: "Yandex",
    opps: [
      {
        id: genId(),
        title: "Cheburashka",
        due: new Date(2020, 1, 12),
        positions: [
          {
            id: genId(),
            title: "Junior developer",
            isEmpty: false,
            image:
              "https://cdn.theatlantic.com/thumbor/rw3VIckWO6T6y_xYc-Q12U0tNAQ=/68x29:1211x672/720x405/media/img/upload/wire/2014/05/19/shrek1/original.jpg",
            name: "shrek"
          },
          {
            id: genId(),
            title: "Senior developer",
            isEmpty: false,
            image:
              "https://i.pinimg.com/600x315/2c/c0/c9/2cc0c9c19f0ee720f8aee7d8185e55e1.jpg",
            name: "dunkey"
          },
          {
            id: genId(),
            title: "Middle developer",
            isEmpty: false,
            image: "https://memepedia.ru/wp-content/uploads/2018/04/e.jpg",
            name: "farquaad"
          },
          {
            id: genId(),
            title: "Android developer",
            isEmpty: true
          },
          {
            id: genId(),
            title: "Homosexual developer",
            isEmpty: true
          }
        ]
      }
    ]
  }
];

function App() {
  return (
    <div className="grid">
      {fakeDataFromDatabase.map(customer => {
        return <Customer {...customer} key={customer.id} />;
      })}
    </div>
  );
}

export default App;

//generate id = Math.random().toString(36).substr(2, 9)
