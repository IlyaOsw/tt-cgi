package com.cgi.flights.service;

import com.cgi.flights.model.Flight;
import com.cgi.flights.repository.FlightRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FlightService {

    private final FlightRepository flightRepository;

    public FlightService(FlightRepository flightRepository) {
        this.flightRepository = flightRepository;
    }

    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

}
