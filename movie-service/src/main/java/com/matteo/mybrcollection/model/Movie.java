package com.matteo.mybrcollection.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @NotNull
    private String name;
    @NotNull
    private Integer year;
    @NotNull
    private Integer length;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "director_id")
    private Director director;


    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getYear() {
        return year;
    }

    public void setLength(Integer length) {
        this.length = length;
    }

    public Integer getLength() {
        return length;
    }

    public void setDirector(Director director) {
        this.director = director;
    }
    public Director getDirector() {
        return director;
    }
}
