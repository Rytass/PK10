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
import { bigSmallKiller } from '../helper/bigSmallKiller';
import { oddEvenKiller } from '../helper/oddEvenKiller';
import { primeCompositeKiller } from '../helper/primeCompositeKiller';
import {
  hillKiller,
  continuousKiller,
} from '../helper/specialKiller';
import { twoSetKiller } from '../helper/twoSetKiller';
import { twoSetKeeper } from '../helper/twoSetKeeper';
import {
  twoAcrossKeeper,
  twoFitKeeper,
  threeFitKeeper,
  fourFitKeeper,
} from '../helper/acrossFitKeeper';
import { zeroOneTwoKiller } from '../helper/zeroOneTwoKiller';
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
  baseKiller,
  chooseKiller,
  positionKiller,
  acrossKiller,
  tailKiller,
  maxKeeper,
  minKeeper,
  bileKiller,
  bigSmallKiller,
  oddEvenKiller,
  primeCompositeKiller,
  hillKiller,
  continuousKiller,
  twoSetKiller,
  twoSetKeeper,
  twoAcrossKeeper,
  twoFitKeeper,
  threeFitKeeper,
  fourFitKeeper,
  zeroOneTwoKiller,
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
