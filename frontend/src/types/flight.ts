import { ISeat } from "./seat";

export interface IFlight {
  id: number;
  departureLocation: string;
  departureDateTime: string;
  arrivalLocation: string;
  arrivalDateTime: string;
  price: number;
  duration: number;
  seats: ISeat[];
}
