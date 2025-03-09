import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { IFlight } from "types/flight";

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

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/flights")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
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
