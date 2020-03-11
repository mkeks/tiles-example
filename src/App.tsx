import React from "react";
import { ICustomer } from "./Components/Customer";

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
              "https://pbs.twimg.com/profile_images/442803888798720000/J9vCKjHf_400x400.png",
            name: "shrek"
          },
          {
            id: genId(),
            title: "Senior developer",
            isEmpty: false,
            image:
              "https://images-na.ssl-images-amazon.com/images/I/51-2knqQUtL._AC_UX385_.jpg",
            name: "dunkey"
          },
          {
            id: genId(),
            title: "Middle developer",
            isEmpty: false,
            image:
              "https://pbs.twimg.com/media/EDYs8c3XUAAIUlU?format=jpg&name=900x900",
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
  return <div className="flexbox"></div>;
}

export default App;

//generate id = Math.random().toString(36).substr(2, 9)
