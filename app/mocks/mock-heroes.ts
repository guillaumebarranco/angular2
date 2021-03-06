import { Hero } from './../classes/hero';

/**
 * Returns generated random number between min and max
 * @constructor
 * @param {int} min - The min range number
 * @param {int} max - The max range number
 *
 * @return {int} The result random integer
 */
function rand(min, max) {
  var rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return rand;
}

const states = [
  "sleeping",
  "listening"
];

export const HEROES: Hero[] = [
  {
    id: 1,
    name: 'Nico',
    state: states[rand(0,1)]
  },
  {
    id: 2,
    name: 'Toto',
    state: states[rand(0,1)]
  },
  {
    id: 3,
    name: 'Lulu',
    state: states[rand(0,1)]
  },
  {
    id: 4,
    name: 'Rouk',
    state: states[rand(0,1)]
  },
  {
    id: 5,
    name: 'Irf',
    state: states[rand(0,1)]
  },
  {
    id: 6,
    name: 'Yao',
    state: states[rand(0,1)]
  }
];
