package com.matteo.mybrcollection.repository;

import org.springframework.data.repository.CrudRepository;
import com.matteo.mybrcollection.model.Director;

public interface DirectorRepository extends CrudRepository<Director, Integer> {

    Director findByNameLikeIgnoreCase(String name);
    Director findBySurnameIgnoreCase(String surname);
}
