import { ICandidate } from "./Candidate";
import { ICustomer } from "./Customer";

const genId = (): string =>
  Math.random()
    .toString(36)
    .substr(2, 9);

export const fakeData: ICustomer[] = [
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
];
