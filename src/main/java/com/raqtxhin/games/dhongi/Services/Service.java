package com.raqtxhin.games.dhongi.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;

import com.raqtxhin.games.dhongi.Entities.Game;
import com.raqtxhin.games.dhongi.Entities.People;
import com.raqtxhin.games.dhongi.Entities.Player;
import com.raqtxhin.games.dhongi.Repositories.GameRepo;
import com.raqtxhin.games.dhongi.Repositories.PeopleRepo;

/**
 * Service
 */
@org.springframework.stereotype.Service
public class Service {

	@Autowired
	private GameRepo gameRepo;
	@Autowired
	private PeopleRepo peopleRepo;

	public String createGame(String playerName) {
		String newGameId = UUID.randomUUID().toString();
		ArrayList<Player> playerList = new ArrayList<>();
		Player newPlayer = new Player(playerName, true, false);
		playerList.add(newPlayer);
		Game newGame = new Game(newGameId, playerList, true, true, "NA", "NA");
		gameRepo.insert(newGame);
		return newGameId;
	}

	public String joinGame(String playerName, String gameId) {
		Optional<Game> currGame = gameRepo.findById(gameId);
		if (currGame.isEmpty())
			return "ERROR : 404 GAME NOT FOUND";
		if (!currGame.get().getIsGameAlive() || !currGame.get().getIsGameActive())
			return "ERROR : 500 GAME NOT ACTIVE";
		Player newPlayer = new Player(playerName, false, false);
		currGame.get().getPlayers().add(newPlayer);
		gameRepo.save(currGame.get());
		return currGame.get().getGameId();
	}

	public Boolean startGame(String playerName, String gameId) {
		Optional<Game> currGame = gameRepo.findById(gameId);
		if (currGame.isEmpty())
			return false;
		ArrayList<Player> currPlayerList = currGame.get().getPlayers();
		Optional<Player> currPlayer = currPlayerList.stream().filter(player -> player.getName().equals(playerName))
				.findFirst();
		if (currPlayer.isEmpty() || !currPlayer.get().getIsLeader())
			return false;
		setGame(currGame.get(), currPlayerList);
		return true;

	}

	private void setGame(Game game, ArrayList<Player> players) {
		List<People> topicList = peopleRepo.findAll();
		Random random = new Random();
		People randPeopleDesc = topicList.get(random.nextInt(topicList.size()));
		String randPeople = randPeopleDesc.getNames().get(random.nextInt(randPeopleDesc.getNames().size()));
		Player randPlayer = players.get(random.nextInt(players.size()));
		game.setDesciption(randPeopleDesc.getDescription());
		game.setPeople(randPeople);
		players.stream().filter((p) -> p.getName().equals(randPlayer.getName())).findFirst()
				.ifPresent(p -> p.setIsDhongi(true));
		game.setPlayers(players);
		gameRepo.save(game);

	}

	public String getName(String gameId, String playerName) {
		Optional<Game> currGame = gameRepo.findById(gameId);
		if (currGame.isEmpty())
			return "ERROR : 404 GAME NOT FOUND";
		if (!currGame.get().getIsGameActive())
			return "ERROR : 500 GAME NOT ACTIVE";
		Optional<Player> currPlayer = currGame.get().getPlayers().stream().filter(p -> p.getName().equals(playerName))
				.findFirst();
		if (currPlayer.isEmpty())
			return "ERROR : 404 PLAYER NOT FOUND";
		if (currPlayer.get().getIsDhongi())
			return currGame.get().getDesciption();
		else
			return currGame.get().getPeople();
	}

	public String addPeople(People people) {
		peopleRepo.insert(people);
		return "Added";
	}

}
