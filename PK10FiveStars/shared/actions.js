import { positionKiller } from '../helper/positionKiller';
import { acrossKiller } from '../helper/acrossKiller';
import { tailKiller } from '../helper/tailKiller';
import {
  maxKeeper,
  minKeeper,
} from '../helper/maxMinKeeper';
import { bigSmallKiller } from '../helper/bigSmallKiller';
import { oddEvenKiller } from '../helper/oddEvenKiller';
import { primeCompositeKiller } from '../helper/primeCompositeKiller';
import { twoSetKiller } from '../helper/twoSetKiller';
import { sumKiller } from '../helper/sumKiller';
import {
  bigTypeKeeper,
  oddTypeKeeper,
  primeTypeKeeper,
  zeroLoadTypeKeeper,
  oneLoadTypeKeeper,
  twoLoadTypeKeeper,
} from '../helper/typeKeeper';

export const FILTER_ACTIONS = [
  positionKiller,
  acrossKiller,
  tailKiller,
  maxKeeper,
  minKeeper,
  bigSmallKiller,
  oddEvenKiller,
  primeCompositeKiller,
  twoSetKiller,
  sumKiller,
  bigTypeKeeper,
  oddTypeKeeper,
  primeTypeKeeper,
  zeroLoadTypeKeeper,
  oneLoadTypeKeeper,
  twoLoadTypeKeeper,
];

export default {
  FILTER_ACTIONS,
};
