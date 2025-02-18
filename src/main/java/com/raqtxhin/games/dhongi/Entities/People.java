package com.raqtxhin.games.dhongi.Entities;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * People
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Document
public class People {
	@Id
	String description;
	ArrayList<String> names;

}
