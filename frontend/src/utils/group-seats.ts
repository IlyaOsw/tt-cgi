import { ISeat } from "../types/seat";

// AI help
export const groupSeatsByRow = (seats: ISeat[]) => {
  const grouped: { [key: string]: ISeat[] } = {};
  seats.forEach((seat) => {
    const rowNumber = seat.seatId.slice(0, seat.seatId.length - 1);
    if (!grouped[rowNumber]) {
      grouped[rowNumber] = [];
    }
    grouped[rowNumber].push(seat);
  });
  return grouped;
};
