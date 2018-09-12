import intersection from 'lodash/intersection';
import difference from 'lodash/difference';
import uniq from 'lodash/uniq';
import { parseNumber } from './operator';

function parseTwoAcrossSet(numbers, set, count, isCountWeight) {
  if (!set.length) {
    return numbers;
  }

  const result = numbers.filter((num) => {
    const firstIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[0]) - parseNumber(num.num[1]))
    ));
    const secondIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[0]) - parseNumber(num.num[2]))
    ));
    const thirdIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[0]) - parseNumber(num.num[3]))
    ));
    const fourthIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[0]) - parseNumber(num.num[4]))
    ));
    const fifthIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[1]) - parseNumber(num.num[2]))
    ));
    const sixthIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[1]) - parseNumber(num.num[3]))
    ));
    const seventhIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[1]) - parseNumber(num.num[4]))
    ));
    const eighthIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[2]) - parseNumber(num.num[3]))
    ));
    const ninthIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[2]) - parseNumber(num.num[4]))
    ));
    const tenthIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[3]) - parseNumber(num.num[4]))
    ));

    if (count.find(c => c)) {
      if (isCountWeight) {
        const countLength = [
          !!~firstIndex,
          !!~secondIndex,
          !!~thirdIndex,
          !!~fourthIndex,
          !!~fifthIndex,
          !!~sixthIndex,
          !!~seventhIndex,
          !!~eighthIndex,
          !!~ninthIndex,
          !!~tenthIndex,
        ].filter(index => index).length;

        return (
          (count[0] ? countLength === 0 : false)
          || (count[1] ? countLength === 1 : false)
          || (count[2] ? countLength === 2 : false)
          || (count[3] ? countLength === 3 : false)
          || (count[4] ? countLength === 4 : false)
          || (count[5] ? countLength === 5 : false)
        );
      }

      const countLength = uniq([
        firstIndex,
        secondIndex,
        thirdIndex,
        fourthIndex,
        fifthIndex,
        sixthIndex,
        seventhIndex,
        eighthIndex,
        ninthIndex,
        tenthIndex,
      ].filter(index => index >= 0)).length;

      return (
        (count[0] ? countLength === 0 : false)
        || (count[1] ? countLength === 1 : false)
        || (count[2] ? countLength === 2 : false)
        || (count[3] ? countLength === 3 : false)
        || (count[4] ? countLength === 4 : false)
        || (count[5] ? countLength === 5 : false)
      );
    }

    return (
      ~firstIndex
      || ~secondIndex
      || ~thirdIndex
      || ~fourthIndex
      || ~fifthIndex
      || ~sixthIndex
      || ~seventhIndex
      || ~eighthIndex
      || ~ninthIndex
      || ~tenthIndex
    );
  });

  return result;
}

function getCount(condition, options) {
  switch (condition) {
    case 'keepTwoAcrossSet':
      return [
        options.keepTwoAcrossNumberZero,
        options.keepTwoAcrossNumberOne,
        options.keepTwoAcrossNumberTwo,
        options.keepTwoAcrossNumberThree,
        options.keepTwoAcrossNumberFour,
        options.keepTwoAcrossNumberFive,
        options.keepTwoAcrossNumberSix,
        options.keepTwoAcrossNumberSeven,
        options.keepTwoAcrossNumberEight,
        options.keepTwoAcrossNumberNine,
        options.keepTwoAcrossNumberTen,
      ];

    case 'keepTwoFitSet':
      return [
        options.keepTwoFitNumberZero,
        options.keepTwoFitNumberOne,
        options.keepTwoFitNumberTwo,
        options.keepTwoFitNumberThree,
        options.keepTwoFitNumberFour,
        options.keepTwoFitNumberFive,
        options.keepTwoFitNumberSix,
        options.keepTwoFitNumberSeven,
        options.keepTwoFitNumberEight,
        options.keepTwoFitNumberNine,
        options.keepTwoFitNumberTen,
      ];

    case 'keepThreeFitSet':
      return [
        options.keepThreeFitNumberZero,
        options.keepThreeFitNumberOne,
        options.keepThreeFitNumberTwo,
        options.keepThreeFitNumberThree,
        options.keepThreeFitNumberFour,
        options.keepThreeFitNumberFive,
        options.keepThreeFitNumberSix,
        options.keepThreeFitNumberSeven,
        options.keepThreeFitNumberEight,
        options.keepThreeFitNumberNine,
        options.keepThreeFitNumberTen,
      ];

    case 'keepFourFitSet':
      return [
        options.keepFourFitNumberZero,
        options.keepFourFitNumberOne,
        options.keepFourFitNumberTwo,
        options.keepFourFitNumberThree,
        options.keepFourFitNumberFour,
        options.keepFourFitNumberFive,
      ];

    default:
      return [];
  }
}

export function twoAcrossKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/keepTwoAcrossSet/) && entry[1].length)
    .map(([condition, value]) => {
      const count = getCount(condition, options);

      return parseTwoAcrossSet(numbers, value, count, options.keepTwoAcrossCountWeight);
    });

  if (!composed.length) return numbers;

  const [
    twoAcrossSet,
  ] = composed;

  const result = intersection(
    (twoAcrossSet || numbers),
  );

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}

export function twoFitKeeper() {

}

export function threeFitKeeper() {

}

export function fourFitKeeper() {

}
