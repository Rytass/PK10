import { bigSmallKiller } from '../helper/bigSmallKiller';
import { oddEvenKiller } from '../helper/oddEvenKiller';
import { primeCompositeKiller } from '../helper/primeCompositeKiller';

export const FILTER_ACTIONS = [
  bigSmallKiller,
  oddEvenKiller,
  primeCompositeKiller,
];

export default {
  FILTER_ACTIONS,
};
