import { ISeat } from "./seat";
//FIX
export interface IFlight {
  id: number;
  departureLocation: string;
  departureDateTime: string;
  arrivalLocation: string;
  arrivalDateTime: string;
  price: number;
  duration: number;
  seats: any;
}
