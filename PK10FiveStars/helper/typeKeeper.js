import difference from 'lodash/difference';
import { parseNumber } from './operator';

function getTargetArray(num) {
  return [
    parseNumber(num.num[0]),
    parseNumber(num.num[1]),
    parseNumber(num.num[2]),
    parseNumber(num.num[3]),
    parseNumber(num.num[4]),
  ];
}

export function bigTypeKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/bigType/) && entry[1] === true);

  if (!composed.length) return numbers;

  const result = [
    ...numbers.filter((num) => {
      if (options.bigTypeZero) {
        return (
          getTargetArray(num).filter(target => target > 5).length === 0
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.bigTypeOne) {
        return (
          getTargetArray(num).filter(target => target > 5).length === 1
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.bigTypeTwo) {
        return (
          getTargetArray(num).filter(target => target > 5).length === 2
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.bigTypeThree) {
        return (
          getTargetArray(num).filter(target => target > 5).length === 3
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.bigTypeFour) {
        return (
          getTargetArray(num).filter(target => target > 5).length === 4
        );
      }

      return false;
    }),
    ...numbers.filter((num) => {
      if (options.bigTypeFive) {
        return (
          getTargetArray(num).filter(target => target > 5).length === 5
        );
      }

      return false;
    }),
  ];

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}

export default { bigTypeKeeper };
