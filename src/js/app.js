/**
 * Entry point of app: don't change this
 */
import GamePlay from './GamePlay';
import GameController from './GameController';
import GameStateService from './GameStateService';

// import Character from './Character';
// import Bowman from './characters/Bowman';
// // import Swordsman from './characters/Swordsman';
// import {characterGenerator, generateTeam} from './generators';
// import { showCharacterStats } from './utils';
// // import Bowman from './characters/Bowman';
// import Team from './Team';
// import themes from './themes';

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector('#game-container'));

const stateService = new GameStateService(localStorage);

const gameCtrl = new GameController(gamePlay, stateService);
gameCtrl.init();

// don't write your code here
// const team1 = new Team();
// const bow = new Bowman(3);
// // team1.add(bow);
// // // team1.addTeamNameToCharacter('player');
// console.log(bow);
// // bow.health = 1
// bow.levelUp()
// console.log(bow)
// // team1.delete(bow);
// console.log(team1)
// console.log(themes)
// console.log(themes[1])
// console.log(3 ** 2);
