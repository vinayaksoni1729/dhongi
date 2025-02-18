package com.raqtxhin.games.dhongi.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Player
 */
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Document
public class Player {
	@Id
	String name;
	Boolean isLeader;
	Boolean isDhongi;
	
}
