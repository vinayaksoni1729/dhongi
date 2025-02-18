package com.raqtxhin.games.dhongi.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.raqtxhin.games.dhongi.Entities.Game;

/**
 * GameRepo
 */
public interface GameRepo extends MongoRepository<Game, String> {

	
}
