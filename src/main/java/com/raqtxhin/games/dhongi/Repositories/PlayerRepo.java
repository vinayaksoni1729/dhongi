package com.raqtxhin.games.dhongi.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.raqtxhin.games.dhongi.Entities.Player;

/**
 * PlayerRepo
 */
public interface PlayerRepo extends MongoRepository<Player, String> {

	
}
