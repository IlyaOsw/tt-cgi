import { IFlight } from "./types/flight";

const generateSeats = (
  rows: number,
  seatsPerRow: string[],
  isAvailable: number = 0.3
) => {
  const seats = [];
  for (let row = 1; row <= rows; row++) {
    for (const seat of seatsPerRow) {
      seats.push({
        id: `${row}${seat}`,
        isAvailable: Math.random() < isAvailable,
        nearWindow: seat === "A" || seat === "F",
        extraLegroom: row === 1 || row === rows,
        // nearExit: row === 1 || row === Math.floor(rows / 2),
        nearExit: row === 1 || row === rows,
      });
    }
  }
  return seats;
};

export const mockData: IFlight[] = [
  {
    id: 1,
    departureLocation: "Tallinn",
    departureDateTime: "2025-03-02T13:00",
    arrivalLocation: "Stockholm",
    arrivalDateTime: "2025-03-02T14:30",
    price: 100,
    duration: 90,
    seats: generateSeats(6, ["A", "B", "C", "D", "E", "F"]),
  },
  {
    id: 2,
    departureLocation: "Tallinn",
    departureDateTime: "2025-03-03T09:00",
    arrivalLocation: "Helsinki",
    arrivalDateTime: "2025-03-03T09:40",
    price: 70,
    duration: 40,
    seats: generateSeats(6, ["A", "B", "C", "D", "E", "F"]),
  },
  {
    id: 3,
    departureLocation: "Tallinn",
    departureDateTime: "2025-03-04T15:30",
    arrivalLocation: "London",
    arrivalDateTime: "2025-03-04T18:15",
    price: 250,
    duration: 165,
    seats: generateSeats(6, ["A", "B", "C", "D", "E", "F"]),
  },
  {
    id: 4,
    departureLocation: "Tallinn",
    departureDateTime: "2025-03-05T07:00",
    arrivalLocation: "Berlin",
    arrivalDateTime: "2025-03-05T08:45",
    price: 180,
    duration: 105,
    seats: generateSeats(6, ["A", "B", "C", "D", "E", "F"]),
  },
  {
    id: 5,
    departureLocation: "Tallinn",
    departureDateTime: "2025-03-06T18:00",
    arrivalLocation: "Paris",
    arrivalDateTime: "2025-03-06T20:30",
    price: 300,
    duration: 150,
    seats: generateSeats(6, ["A", "B", "C", "D", "E", "F"]),
  },
];
