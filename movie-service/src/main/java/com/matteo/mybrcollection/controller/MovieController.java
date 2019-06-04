package com.matteo.mybrcollection.controller;

import com.matteo.mybrcollection.exception.BadRequestException;
import com.matteo.mybrcollection.model.Director;
import com.matteo.mybrcollection.model.Movie;
import com.matteo.mybrcollection.repository.DirectorRepository;
import com.matteo.mybrcollection.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

@Transactional
@RestController
@RequestMapping("/movie")
public class MovieController {

    @Autowired
    MovieRepository movieRepository;
    @Autowired
    DirectorRepository directorRepository;

    @GetMapping("/")
    public List<Movie> getMovies(){
        return movieRepository.findAll();
    }

    @PostMapping("/add")
    public ResponseEntity<?> addMovie(@RequestParam String name, @RequestParam Integer year, @RequestParam Integer length, @RequestParam String directorName, @RequestParam String directorSurname)  {
        Movie movie = movieRepository.findByNameLikeIgnoreCase(name);
        Movie savedMovie;
        if ( movie != null) {
            throw new BadRequestException("Il film è già stato inserito");
        }
        else{
            movie = new Movie();
            movie.setName(name);
            movie.setYear(year);
            movie.setLength(length);
        }
        Director director = directorRepository.findBySurnameIgnoreCase(directorSurname);
        if (  director != null) {
            movie.setDirector(director);
            savedMovie = movieRepository.save(movie);
        }
        else{
            director = new Director();
            director.setName(directorName);
            director.setSurname(directorSurname);
            movie.setDirector(director);
            savedMovie = movieRepository.save(movie);
        }
        Integer id = savedMovie.getId();
        Integer directorId = savedMovie.getDirector().getId();
        HashMap map = new HashMap();
        map.put("id", id);
        map.put("directorId", directorId);
        return ResponseEntity.ok().body(map);

    }

    @GetMapping("/search/director/surname")
    public List<Movie> getMoviesByDirectorSurname(@RequestParam String surname) {
        return movieRepository.findByDirectorSurnameIgnoreCase(surname);
    }

    @GetMapping("/search/name")
    public List<Movie> getMoviesByName(@RequestParam String name) {
        return movieRepository.findByNameContainingIgnoreCase(name);
    }

    @DeleteMapping("delete")
    public void deleteMovie(@RequestParam String id) {
        movieRepository.deleteMovieById(id);
    }

}
