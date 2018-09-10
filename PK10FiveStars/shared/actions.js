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
import {
  bigTypeKeeper,
  oddTypeKeeper,
  primeTypeKeeper,
  zeroLoadTypeKeeper,
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
  bigTypeKeeper,
  oddTypeKeeper,
  primeTypeKeeper,
  zeroLoadTypeKeeper,
];

export default {
  FILTER_ACTIONS,
};
