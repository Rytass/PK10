import { baseKiller } from '../helper/baseKiller';
import { chooseKiller } from '../helper/chooseKiller';
import { positionKiller } from '../helper/positionKiller';
import { acrossKiller } from '../helper/acrossKiller';
import { tailKiller } from '../helper/tailKiller';
import {
  maxKeeper,
  minKeeper,
} from '../helper/maxMinKeeper';
import { bileKiller } from '../helper/bileKiller';
import { sumKiller } from '../helper/sumKiller';
import { bigSmallKiller } from '../helper/bigSmallKiller';
import { oddEvenKiller } from '../helper/oddEvenKiller';
import { primeCompositeKiller } from '../helper/primeCompositeKiller';
import { zeroOneTwoKiller } from '../helper/zeroOneTwoKiller';

export const FILTER_ACTIONS = [
  baseKiller,
  chooseKiller,
  positionKiller,
  acrossKiller,
  tailKiller,
  maxKeeper,
  minKeeper,
  bileKiller,
  sumKiller,
  bigSmallKiller,
  oddEvenKiller,
  primeCompositeKiller,
  zeroOneTwoKiller,
];

export default {
  FILTER_ACTIONS,
};
