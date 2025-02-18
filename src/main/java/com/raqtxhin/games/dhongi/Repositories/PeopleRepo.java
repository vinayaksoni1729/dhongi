package com.raqtxhin.games.dhongi.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.raqtxhin.games.dhongi.Entities.People;

/**
 * People
 */
public interface PeopleRepo extends MongoRepository<People, String> {

	
}
