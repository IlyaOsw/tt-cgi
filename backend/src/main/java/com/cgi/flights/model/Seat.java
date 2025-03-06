package com.cgi.flights.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "seats")
@Data
public class Seat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "seat_id")
    private String seatId;

    @Column(name = "is_available")
    private Boolean isAvailable;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "flight_id")
    private Flight flight;
}
