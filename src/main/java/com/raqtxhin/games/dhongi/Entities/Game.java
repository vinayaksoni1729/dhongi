package com.raqtxhin.games.dhongi.Entities;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Game
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Document
public class Game {
	@Id
	String gameId;
	ArrayList<Player> players;
	Boolean isGameActive;
	Boolean isGameAlive;
	String desciption;
	String people;
}
