package com.cgi.flights.controller;

import com.cgi.flights.model.Flight;
import com.cgi.flights.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FlightController {

    private final FlightService flightService;

    @Autowired
    public FlightController(FlightService flightService) {
        this.flightService = flightService;
    }

    @GetMapping("/flights")
    public List<Flight> getFlights() {
        return flightService.getAllFlights();
    }
}
