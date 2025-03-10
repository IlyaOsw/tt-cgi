import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

import { IFlight } from "../types/flight";

interface IFlightContext {
  data: IFlight[];
  loading: boolean;
}

interface FlightProvider {
  children: React.ReactNode;
}

const FlightContext = createContext<IFlightContext | undefined>(undefined);

export const FlightProvider: React.FC<FlightProvider> = ({ children }) => {
  const [data, setData] = useState<IFlight[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFlights = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/flights");
      setData(response.data);
    } catch (error) {
      console.error("Error while flights fetching: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <FlightContext.Provider value={{ data, loading }}>
      {children}
    </FlightContext.Provider>
  );
};

export const useFlightContext = (): IFlightContext => {
  const context = useContext(FlightContext);
  if (!context) {
    throw new Error("Error in provider");
  }
  return context;
};
