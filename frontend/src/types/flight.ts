import { ISeat } from "./seat";

export interface IFlight {
  id: number;
  departureLocation: string;
  departureDatetime: string;
  arrivalLocation: string;
  arrivalDatetime: string;
  price: number;
  duration: number;
  seats: ISeat[];
}
