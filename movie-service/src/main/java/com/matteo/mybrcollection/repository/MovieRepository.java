package com.matteo.mybrcollection.repository;

import com.matteo.mybrcollection.model.Movie;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MovieRepository extends CrudRepository<Movie, Integer> {

    List<Movie> findAll();
    Movie findByNameLikeIgnoreCase(String name);
    List<Movie> findByDirectorSurnameIgnoreCase(String surname);
    List<Movie> findByNameContainingIgnoreCase(String name);
    @Modifying
    @Query(value = "DELETE FROM movie WHERE id = ?",
            nativeQuery=true
    )
    void deleteMovieById(String id);



}
