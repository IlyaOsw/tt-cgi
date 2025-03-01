import { FlightCard } from "./components/FlightCard/FlightCard";
import { TitleCGI } from "./components/TitleCGI/TitleCGI";

export const App: React.FC = () => {
  return (
    <>
      <TitleCGI />
      <FlightCard />
    </>
  );
};
