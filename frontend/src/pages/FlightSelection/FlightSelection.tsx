import { FlightCard } from "./FlightCard/FlightCard";
import { Filter } from "./Filter/Filter";
import { IFlight } from "../../types/flight";

const FlightSelection: React.FC = () => {
  return (
    <>
      <Filter />
      {mockData.map((flight) => (
        <FlightCard flight={flight} key={flight.id} />
      ))}
    </>
  );
};

export default FlightSelection;

const mockData: IFlight[] = [
  {
    id: 1,
    departureLocation: "Tallinn",
    departureTime: "13:00",
    departureDate: "02.03.2025",
    arrivalLocation: "Stockholm",
    arrivalTime: "13:30",
    arrivalDate: "02.03.2025",
    price: 100,
    duration: "1:30",
  },
  {
    id: 2,
    departureLocation: "Tallinn",
    departureTime: "09:00",
    departureDate: "03.03.2025",
    arrivalLocation: "Helsinki",
    arrivalTime: "09:40",
    arrivalDate: "03.03.2025",
    price: 70,
    duration: "0:40",
  },
  {
    id: 3,
    departureLocation: "Tallinn",
    departureTime: "15:30",
    departureDate: "04.03.2025",
    arrivalLocation: "London",
    arrivalTime: "17:00",
    arrivalDate: "04.03.2025",
    price: 250,
    duration: "2:45",
  },
  {
    id: 4,
    departureLocation: "Tallinn",
    departureTime: "07:00",
    departureDate: "05.03.2025",
    arrivalLocation: "Berlin",
    arrivalTime: "08:30",
    arrivalDate: "05.03.2025",
    price: 180,
    duration: "1:45",
  },
  {
    id: 5,
    departureLocation: "Tallinn",
    departureTime: "18:00",
    departureDate: "06.03.2025",
    arrivalLocation: "Paris",
    arrivalTime: "20:30",
    arrivalDate: "06.03.2025",
    price: 300,
    duration: "2:30",
  },
];
