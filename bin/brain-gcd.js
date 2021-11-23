#!/usr/bin/env node
import gamePlay from '../src/games/index.js';
import { gameQuastion, gameRules } from '../src/games/gcd-game.js';

gamePlay(gameQuastion, gameRules);
