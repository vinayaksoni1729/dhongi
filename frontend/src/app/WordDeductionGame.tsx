"use client";

import React, { useState, useEffect } from 'react';

// Game states
type GameState = 'create' | 'join' | 'createOrJoin' | 'waiting' | 'playing' | 'results';

// Player interface
interface Player {
  id: string;
  name: string;
  avatar: string;
  color: string;
}

const WordDeductionGame: React.FC = () => {
  // State
  const [gameState, setGameState] = useState<GameState>('createOrJoin');
  const [roomCode, setRoomCode] = useState<string>('unique_code');
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [isHost, setIsHost] = useState<boolean>(true);
  const [currentWord, setCurrentWord] = useState<string>('');
  const [gameMode, setGameMode] = useState<string>('Saccha'); // or 'Dhongi'
  const [inputRoomCode, setInputRoomCode] = useState<string>('');

  // Mock current player
  const currentPlayer = {
    id: '1',
    name: 'Player',
    avatar: 'C',
    color: 'bg-pink-400'
  };

  // Game screen renderer
  const renderGameScreen = () => {
    switch (gameState) {
      case 'create':
        return renderCreateScreen();
      case 'join':
        return renderJoinScreen();
      case 'createOrJoin':
        return renderCreateOrJoinScreen();
      case 'waiting':
        return renderWaitingScreen();
      case 'playing':
        return renderPlayingScreen();
      case 'results':
        return renderResultsScreen();
      default:
        return renderCreateOrJoinScreen();
    }
  };

  // Create screen
  const renderCreateScreen = () => (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center max-w-xs w-full">
      <h2 className="text-white text-xl mb-4">Create</h2>
      <div className="flex justify-center mb-4">
        <div className={`w-16 h-16 ${currentPlayer.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
          {currentPlayer.avatar}
        </div>
      </div>
      <p className="text-pink-400 mb-2">{roomCode}</p>
      <div className="text-center mb-4">
        <span className="text-white text-5xl font-bold">{playerCount}</span>
        <p className="text-white text-sm">players joined</p>
      </div>
      <p className="text-gray-400 text-sm mt-auto">-- -- -- --</p>
    </div>
  );

  // Join screen
  const renderJoinScreen = () => (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center max-w-xs w-full">
      <h2 className="text-white text-xl mb-4">Join</h2>
      <div className="flex justify-center mb-4">
        <div className={`w-16 h-16 ${currentPlayer.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
          {currentPlayer.avatar}
        </div>
      </div>
      <div className="w-full mb-4">
        <input 
          type="text" 
          placeholder="unique_code"
          className="bg-white text-black text-center py-2 px-4 rounded-md w-full"
          value={inputRoomCode}
          onChange={(e) => setInputRoomCode(e.target.value)}
        />
      </div>
      <button 
        className="bg-blue-500 text-white rounded-full py-2 px-6 w-full"
        onClick={() => {
          setRoomCode(inputRoomCode || 'unique_code');
          setGameState('waiting');
        }}
      >
        Join
      </button>
      <p className="text-gray-400 text-sm mt-6">-- -- -- --</p>
    </div>
  );

  // Create or Join screen
  const renderCreateOrJoinScreen = () => (
    <div className="flex flex-col space-y-6 items-center">
      <div className="grid grid-cols-2 gap-6 max-w-2xl w-full">
        <div 
          className="bg-gray-800 p-6 rounded-lg flex flex-col items-center cursor-pointer"
          onClick={() => setGameState('create')}
        >
          <h2 className="text-white text-xl mb-4">Create</h2>
          <div className="flex justify-center mb-4">
            <div className={`w-16 h-16 ${currentPlayer.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
              {currentPlayer.avatar}
            </div>
          </div>
          <p className="text-pink-400 mb-2">{roomCode}</p>
          <div className="text-center mb-4">
            <span className="text-white text-5xl font-bold">{playerCount}</span>
            <p className="text-white text-sm">players joined</p>
          </div>
          <p className="text-gray-500 text-sm mt-auto">waiting for host to start game...</p>
          <p className="text-gray-400 text-sm mt-2">-- -- -- --</p>
        </div>
        
        <div 
          className="bg-gray-800 p-6 rounded-lg flex flex-col items-center cursor-pointer"
          onClick={() => setGameState('join')}
        >
          <h2 className="text-white text-xl mb-4">Join</h2>
          <div className="flex justify-center mb-4">
            <div className={`w-16 h-16 ${currentPlayer.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
              {currentPlayer.avatar}
            </div>
          </div>
          <div className="w-full mb-4">
            <input 
              type="text" 
              placeholder="unique_code"
              className="bg-white text-black text-center py-2 px-4 rounded-md w-full"
              value={inputRoomCode}
              onChange={(e) => setInputRoomCode(e.target.value)}
            />
          </div>
          <button 
            className="bg-blue-500 text-white rounded-full py-2 px-6 mb-4"
            onClick={(e) => {
              e.stopPropagation();
              setRoomCode(inputRoomCode || 'unique_code');
              setGameState('waiting');
            }}
          >
            Join
          </button>
          <p className="text-gray-400 text-sm mt-auto">-- -- -- --</p>
        </div>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center max-w-2xl w-full">
        <h2 className="text-white text-xl mb-4">Create or Join</h2>
        <div className="flex justify-center mb-4">
          <div className={`w-16 h-16 ${currentPlayer.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
            {currentPlayer.avatar}
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 mt-2 max-w-xs">
          <button 
            className="bg-green-500 text-white rounded-full py-2 px-4"
            onClick={() => {
              setIsHost(true);
              setGameState('waiting');
            }}
          >
            CREATE
          </button>
          <button 
            className="bg-blue-500 text-white rounded-full py-2 px-4"
            onClick={() => {
              setIsHost(false);
              setGameState('join');
            }}
          >
            JOIN
          </button>
        </div>
        <p className="text-gray-400 text-sm mt-4">-- -- -- --</p>
      </div>
    </div>
  );

  // Waiting screen
  const renderWaitingScreen = () => (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center max-w-xs w-full">
      <div className="flex justify-center mb-2">
        <div className={`w-16 h-16 ${currentPlayer.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
          {currentPlayer.avatar}
        </div>
      </div>
      <p className="text-pink-400 mb-2">{roomCode}</p>
      <div className="text-center mb-6">
        <span className="text-white text-5xl font-bold">{playerCount}</span>
        <p className="text-white text-sm">players joined</p>
      </div>
      
      {isHost ? (
        <button 
          className="bg-green-500 text-white rounded-full py-2 px-8"
          onClick={() => setGameState('playing')}
        >
          Start
        </button>
      ) : (
        <p className="text-white">Waiting for host to start game...</p>
      )}
      
      <p className="text-gray-400 text-sm mt-6">-- -- -- --</p>
    </div>
  );

  // Playing screen (Saccha - normal player view)
  const renderPlayingScreen = () => (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center max-w-xs w-full">
      <div className="flex justify-center mb-4">
        <div className={`w-16 h-16 ${currentPlayer.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
          {currentPlayer.avatar}
        </div>
      </div>
      <p className="text-white mb-1">You word is</p>
      <h1 className="text-pink-400 text-3xl font-bold mb-4">
        Lionel Messi
      </h1>
      
      <button 
        className="bg-blue-500 text-white rounded-full py-2 px-6 mt-2"
        onClick={() => setGameState('results')}
      >
        Next Round
      </button>
      
      <p className="text-gray-400 text-sm mt-6">-- -- -- --</p>
    </div>
  );

  // Results screen (Dhongi - imposter view)
  const renderResultsScreen = () => (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center max-w-xs w-full">
      <div className="flex justify-center mb-4">
        <div className={`w-16 h-16 ${currentPlayer.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
          {currentPlayer.avatar}
        </div>
      </div>
      <p className="text-white mb-1">You word is</p>
      <h1 className="text-pink-400 text-3xl font-bold mb-6">
        Footballer
      </h1>
      
      <div className="w-full space-y-3">
        <button 
          className="bg-blue-500 text-white rounded-full py-2 px-6 w-full"
          onClick={() => {
            setGameState('playing');
            setGameMode('Saccha');
          }}
        >
          Next Round
        </button>
        
        <button 
          className="bg-pink-400 text-white rounded-full py-2 px-6 w-full"
          onClick={() => setGameState('createOrJoin')}
        >
          End Game
        </button>
      </div>
      
      <p className="text-gray-400 text-sm mt-6">-- -- -- --</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-4">
      <div className="w-full max-w-6xl">
        {gameState === 'playing' || gameState === 'results' ? (
          <div className="flex flex-col items-center">
            <h2 className="text-white text-2xl mb-6">
              Game - {gameState === 'playing' ? 'Saccha' : 'Dhongi'}
            </h2>
            {renderGameScreen()}
          </div>
        ) : (
          renderGameScreen()
        )}
      </div>
    </div>
  );
};

export default WordDeductionGame;