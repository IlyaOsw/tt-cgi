import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { FlightSelection } from "../pages/FlightSelection/FlightSelection";
import { Loader } from "../components/Loader/Loader";
import { FlightProvider } from "../context/FlightContext";

const TicketSelection = React.lazy(
  () => import("../pages/TicketSelection/TicketSelection")
);

export const Routing: React.FC = () => {
  return (
    <FlightProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<FlightSelection />} />
          <Route path="/ticket/:id" element={<TicketSelection />} />
        </Routes>
      </Suspense>
    </FlightProvider>
  );
};
