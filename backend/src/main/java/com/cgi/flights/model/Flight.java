package com.cgi.flights.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Table(name = "flights")
@Data
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "departure_location")
    private String departureLocation;

    @Column(name = "departure_datetime")
    private String departureDatetime;

    @Column(name = "arrival_location")
    private String arrivalLocation;

    @Column(name = "arrival_datetime")
    private String arrivalDatetime;

    @Column(name = "price")
    private Integer price;

    @Column(name = "duration")
    private Integer duration;

    @OneToMany(mappedBy = "flight", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Seat> seats;
}
