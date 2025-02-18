package com.raqtxhin.games.dhongi.Controllers;

import org.springframework.web.bind.annotation.RestController;

import com.raqtxhin.games.dhongi.Entities.People;
import com.raqtxhin.games.dhongi.Services.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;


/**
 * Controller
 */
@RestController
@RequestMapping("dhongi/api/v1")
public class Controller {

	@Autowired
	private Service service;

	@GetMapping("/health")
	public ResponseEntity<String> getHealth() {
		return new ResponseEntity<>("Health.Ok", HttpStatus.OK);
	}

	@GetMapping("/createGame")
	public ResponseEntity<String> createGame(@RequestParam String playerName) {
		String responsString = service.createGame(playerName);
		if (responsString.contains("ERROR"))
			return new ResponseEntity<>(responsString, HttpStatus.INTERNAL_SERVER_ERROR);
		else
			return new ResponseEntity<>(responsString, HttpStatus.OK);
	}

	@GetMapping("/joinGame")
	public ResponseEntity<String> joinGame(@RequestParam String gameId, @RequestParam String playerName) {
		String responseString = service.joinGame(playerName, gameId);
		if (responseString.contains("ERROR"))
			return new ResponseEntity<>(responseString, HttpStatus.INTERNAL_SERVER_ERROR);
		else
			return new ResponseEntity<>(responseString, HttpStatus.OK);
	}

	@GetMapping("/startGame")
	public ResponseEntity<String> startGame(@RequestParam String gameId, @RequestParam String playerName) {
		if (service.startGame(playerName, gameId))
			return new ResponseEntity<>("Game Started", HttpStatus.OK);
		else
			return new ResponseEntity<>("Game Failed", HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@GetMapping("/getName")
	public ResponseEntity<String> getName(@RequestParam String gameId, @RequestParam String playerName) {
		String responseString = service.getName(gameId, playerName);

		if (responseString.contains("ERROR"))
			return new ResponseEntity<>(responseString, HttpStatus.INTERNAL_SERVER_ERROR);
		else
			return new ResponseEntity<>(responseString, HttpStatus.OK);
	}
	@PostMapping("/addPeople")
	public ResponseEntity<String> addPeople(@RequestBody People people)
	{
		return new ResponseEntity<>(service.addPeople(people), HttpStatus.OK);
	}

}
