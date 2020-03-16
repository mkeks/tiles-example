import { ICandidate } from "./Candidate";
import { ICustomer } from "./Customer";
import { IOpportunity } from "./Opportunity";
import { IPosition } from "./Position";

const generateFakeData = (): {
  candidates: ICandidate[];
  customers: ICustomer[];
} => {
  const firstNames = [
    "Maria",
    "John",
    "Barry",
    "Denis",
    "Sergey",
    "Dave",
    "Sarah",
    "Jeff",
    "Arnold",
    "Alex",
    "Steve",
    "Ilya",
    "Bill",
    "Peter",
    "Belle",
    "Felix"
  ];
  const lastNames = [
    "Fedun",
    "Smith",
    "Eddington",
    "Petrov",
    "Bulavin",
    "Johnson",
    "Parker",
    "McNugget",
    "Gates",
    "Bezos",
    "Peterson",
    "Stark",
    "Kjelberg",
    "Jefferson"
  ];
  const customers = [
    "IntApp",
    "Google",
    "Microsoft",
    "F5",
    "Boston Dynamics",
    "Intel",
    "Reddit"
  ];
  const opportunities = [
    "Web-app new functionality",
    "Global platform for webinars",
    "Redesign system design",
    "Unit/UI/E2E tests",
    "Clear the tech due",
    "Frontend features development",
    "Database redesign"
  ];
  const positions = [
    "Senior Android Developer",
    "Senior Frontend Developer (React, Angular)",
    "iOS Mobile SDE",
    "Q&A Engineer",
    "Data Scientist",
    "System Analyst",
    "Senior Backend Developer (NodeJS)"
  ];

  let _candidates: ICandidate[] = [];
  let _customers: ICustomer[] = generateCustomers();
  let rnd = randomNumber(4, 7);
  for (let i = 0; i < rnd; i++) {
    generateCandidate();
  }
  return { candidates: _candidates, customers: _customers };
  function getAvatar(name: string) {
    return "https://api.adorable.io/avatars/50/" + name + "@adorable.png";
  }
  function generateCustomers(): ICustomer[] {
    let result: ICustomer[] = [];
    for (let customer of customers) {
      result.push({ id: genId(), name: customer, opps: generateOpps() });
    }
    return result;
  }
  function generateOpps(): IOpportunity[] {
    let result: IOpportunity[] = [];
    for (let opportunity of getRandom(opportunities, randomNumber(1, 4))) {
      result.push({
        id: genId(),
        title: opportunity,
        due: randomDue(),
        positions: generatePositions()
      });
    }
    return result;
  }
  function generatePositions(): IPosition[] {
    let result: IPosition[] = [];
    for (let position of getRandom(positions, randomNumber(3, 6))) {
      let candidate = Math.random() < 0.6 ? generateCandidate() : undefined;
      result.push({ id: genId(), title: position, candidate });
    }
    return result;
  }
  function generateCandidate(): ICandidate {
    const candidateName =
      firstNames[randomNumber(0, firstNames.length - 1)] +
      " " +
      lastNames[randomNumber(0, lastNames.length - 1)];
    const candidate: ICandidate = {
      id: genId(),
      name: candidateName,
      avatar: getAvatar(encodeURI(candidateName))
    };
    _candidates.push(candidate);
    return candidate;
  }
  function getRandom(arr: Array<string>, n: number): string[] {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
  function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function randomDue(): Date {
    return new Date(2020, randomNumber(1, 12), randomNumber(1, 28));
  }
  function genId(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
};

const data = generateFakeData();
export const fakeData = data.customers;
export const fakeCandidates = data.candidates;
/* export const fakeData: ICustomer[] = [
  {
    id: genId(),
    name: "Google",
    opps: [
      {
        id: genId(),
        title: "SkyNet",
        due: new Date(2020, 1, 12),
        positions: [
          {
            id: genId(),
            title: "Junior developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MjQ5OTc4ODk1/chuck-norris-15720761-1-402.jpg",
              name: "Chuck Norris"
            }
          },
          {
            id: genId(),
            title: "Senior developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg",
              name: "Arnold Schwarzenegger"
            }
          },
          {
            id: genId(),
            title: "Middle developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNjkyNzY5Mjk0/sylvester-stallone-9491745-1-402.jpg",
              name: "Sylvester Stallone"
            }
          },
          {
            id: genId(),
            title: "Android developer"
          },
          {
            id: genId(),
            title: "Senior Android Developer"
          }
        ]
      },
      {
        id: genId(),
        title: "Test1",
        due: new Date(2020, 1, 12),
        positions: [
          {
            id: genId(),
            title: "Junior developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MjQ5OTc4ODk1/chuck-norris-15720761-1-402.jpg",
              name: "Chuck Norris"
            }
          },
          {
            id: genId(),
            title: "Senior developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg",
              name: "Arnold Schwarzenegger"
            }
          },
          {
            id: genId(),
            title: "Middle developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNjkyNzY5Mjk0/sylvester-stallone-9491745-1-402.jpg",
              name: "Sylvester Stallone"
            }
          },
          {
            id: genId(),
            title: "Android developer"
          },
          {
            id: genId(),
            title: "Senior Android Developer"
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
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MjQ5OTc4ODk1/chuck-norris-15720761-1-402.jpg",
              name: "Chuck Norris"
            }
          },
          {
            id: genId(),
            title: "Senior developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg",
              name: "Arnold Schwarzenegger"
            }
          },
          {
            id: genId(),
            title: "Middle developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNjkyNzY5Mjk0/sylvester-stallone-9491745-1-402.jpg",
              name: "Sylvester Stallone"
            }
          },
          {
            id: genId(),
            title: "Android developer"
          },
          {
            id: genId(),
            title: "Senior Android Developer"
          }
        ]
      }
    ]
  },
  {
    id: genId(),
    name: "IntApp",
    opps: [
      {
        id: genId(),
        title: "Test2",
        due: new Date(2020, 1, 12),
        positions: [
          {
            id: genId(),
            title: "Junior developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MjQ5OTc4ODk1/chuck-norris-15720761-1-402.jpg",
              name: "Chuck Norris"
            }
          },
          {
            id: genId(),
            title: "Senior developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg",
              name: "Arnold Schwarzenegger"
            }
          },
          {
            id: genId(),
            title: "Middle developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNjkyNzY5Mjk0/sylvester-stallone-9491745-1-402.jpg",
              name: "Sylvester Stallone"
            }
          },
          {
            id: genId(),
            title: "Android developer"
          },
          {
            id: genId(),
            title: "Senior Android Developer"
          }
        ]
      },
      {
        id: genId(),
        title: "Test3",
        due: new Date(2020, 1, 12),
        positions: [
          {
            id: genId(),
            title: "Junior developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MjQ5OTc4ODk1/chuck-norris-15720761-1-402.jpg",
              name: "Chuck Norris"
            }
          },
          {
            id: genId(),
            title: "Senior developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg",
              name: "Arnold Schwarzenegger"
            }
          },
          {
            id: genId(),
            title: "Middle developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNjkyNzY5Mjk0/sylvester-stallone-9491745-1-402.jpg",
              name: "Sylvester Stallone"
            }
          },
          {
            id: genId(),
            title: "Android developer"
          },
          {
            id: genId(),
            title: "Senior Android Developer"
          }
        ]
      }
    ]
  },
  {
    id: genId(),
    name: "Reddit",
    opps: [
      {
        id: genId(),
        title: "Test4",
        due: new Date(2020, 1, 12),
        positions: [
          {
            id: genId(),
            title: "Junior developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MjQ5OTc4ODk1/chuck-norris-15720761-1-402.jpg",
              name: "Chuck Norris"
            }
          },
          {
            id: genId(),
            title: "Senior developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg",
              name: "Arnold Schwarzenegger"
            }
          },
          {
            id: genId(),
            title: "Middle developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNjkyNzY5Mjk0/sylvester-stallone-9491745-1-402.jpg",
              name: "Sylvester Stallone"
            }
          },
          {
            id: genId(),
            title: "Android developer"
          },
          {
            id: genId(),
            title: "Senior Android Developer"
          }
        ]
      },
      {
        id: genId(),
        title: "Test5",
        due: new Date(2020, 1, 12),
        positions: [
          {
            id: genId(),
            title: "Junior developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MjQ5OTc4ODk1/chuck-norris-15720761-1-402.jpg",
              name: "Chuck Norris"
            }
          },
          {
            id: genId(),
            title: "Senior developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg",
              name: "Arnold Schwarzenegger"
            }
          },
          {
            id: genId(),
            title: "Middle developer",
            candidate: {
              id: genId(),
              avatar:
                "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNjkyNzY5Mjk0/sylvester-stallone-9491745-1-402.jpg",
              name: "Sylvester Stallone"
            }
          },
          {
            id: genId(),
            title: "Android developer"
          },
          {
            id: genId(),
            title: "Senior Android Developer"
          }
        ]
      }
    ]
  }
];

export const fakeCandidates: ICandidate[] = [
  {
    id: genId(),
    name: "Jason Statham",
    avatar:
      "https://www.biography.com/.image/t_share/MTUzMzQzOTkxMDAwMDgxNzA2/jason-statham-attends-the-press-conference-of-director-f-gary-grays-film-the-fate-of-the-furious-on-march-23-2017-in-beijing-china-photo-by-vcg_vcg-via-getty-images-square.jpg"
  },
  {
    id: genId(),
    name: "Dwayne Johnson",
    avatar:
      "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MjM5ODg2MzUx/dwayne-johnson-11818916-1-402.jpg"
  }
]; */
