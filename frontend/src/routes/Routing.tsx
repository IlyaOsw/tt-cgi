import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { FlightSelection } from "../pages/FlightSelection/FlightSelection";
import { Loader } from "../components/Loader/Loader";

const TicketSelection = React.lazy(
  () => import("../pages/TicketSelection/TicketSelection")
);

export const Routing: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<FlightSelection />} />
        <Route path="/ticket/:id" element={<TicketSelection />} />
      </Routes>
    </Suspense>
  );
};
