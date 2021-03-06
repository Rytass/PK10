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
      across === Math.abs(parseNumber(num.num[1]) - parseNumber(num.num[2]))
    ));
    const fifthIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[1]) - parseNumber(num.num[3]))
    ));
    const sixthIndex = set.findIndex(across => (
      across === Math.abs(parseNumber(num.num[2]) - parseNumber(num.num[3]))
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
        ].filter(index => index).length;

        return (
          (count[0] ? countLength === 0 : false)
          || (count[1] ? countLength === 1 : false)
          || (count[2] ? countLength === 2 : false)
          || (count[3] ? countLength === 3 : false)
          || (count[4] ? countLength === 4 : false)
          || (count[5] ? countLength === 5 : false)
          || (count[6] ? countLength === 6 : false)
        );
      }

      const countLength = uniq([
        firstIndex,
        secondIndex,
        thirdIndex,
        fourthIndex,
        fifthIndex,
        sixthIndex,
      ].filter(index => index >= 0)).length;

      return (
        (count[0] ? countLength === 0 : false)
        || (count[1] ? countLength === 1 : false)
        || (count[2] ? countLength === 2 : false)
        || (count[3] ? countLength === 3 : false)
        || (count[4] ? countLength === 4 : false)
        || (count[5] ? countLength === 5 : false)
        || (count[6] ? countLength === 6 : false)
      );
    }

    return (
      ~firstIndex
      || ~secondIndex
      || ~thirdIndex
      || ~fourthIndex
      || ~fifthIndex
      || ~sixthIndex
    );
  });

  return result;
}

function parseTwoFitSet(numbers, set, count, isCountWeight) {
  if (!set.length) {
    return numbers;
  }

  const result = numbers.filter((num) => {
    const firstIndex = set.findIndex(fit => (
      fit === (parseNumber(num.num[0]) + parseNumber(num.num[1])) % 10
    ));
    const secondIndex = set.findIndex(fit => (
      fit === (parseNumber(num.num[0]) + parseNumber(num.num[2])) % 10
    ));
    const thirdIndex = set.findIndex(fit => (
      fit === (parseNumber(num.num[0]) + parseNumber(num.num[3])) % 10
    ));
    const fourthIndex = set.findIndex(fit => (
      fit === (parseNumber(num.num[1]) + parseNumber(num.num[2])) % 10
    ));
    const fifthIndex = set.findIndex(fit => (
      fit === (parseNumber(num.num[1]) + parseNumber(num.num[3])) % 10
    ));
    const sixthIndex = set.findIndex(fit => (
      fit === (parseNumber(num.num[2]) + parseNumber(num.num[3])) % 10
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
        ].filter(index => index).length;

        return (
          (count[0] ? countLength === 0 : false)
          || (count[1] ? countLength === 1 : false)
          || (count[2] ? countLength === 2 : false)
          || (count[3] ? countLength === 3 : false)
          || (count[4] ? countLength === 4 : false)
          || (count[5] ? countLength === 5 : false)
          || (count[6] ? countLength === 6 : false)
        );
      }

      const countLength = uniq([
        firstIndex,
        secondIndex,
        thirdIndex,
        fourthIndex,
        fifthIndex,
        sixthIndex,
      ].filter(index => index >= 0)).length;

      return (
        (count[0] ? countLength === 0 : false)
        || (count[1] ? countLength === 1 : false)
        || (count[2] ? countLength === 2 : false)
        || (count[3] ? countLength === 3 : false)
        || (count[4] ? countLength === 4 : false)
        || (count[5] ? countLength === 5 : false)
        || (count[6] ? countLength === 6 : false)
      );
    }

    return (
      ~firstIndex
      || ~secondIndex
      || ~thirdIndex
      || ~fourthIndex
      || ~fifthIndex
      || ~sixthIndex
    );
  });

  return result;
}

function parseThreeFitSet(numbers, set, count, isCountWeight) {
  if (!set.length) {
    return numbers;
  }

  const result = numbers.filter((num) => {
    const firstIndex = set.findIndex(fit => (
      fit === (parseNumber(num.num[0]) + parseNumber(num.num[1]) + parseNumber(num.num[2])) % 10
    ));
    const secondIndex = set.findIndex(fit => (
      fit === (parseNumber(num.num[0]) + parseNumber(num.num[1]) + parseNumber(num.num[3])) % 10
    ));
    const thirdIndex = set.findIndex(fit => (
      fit === (parseNumber(num.num[0]) + parseNumber(num.num[2]) + parseNumber(num.num[3])) % 10
    ));
    const fourthIndex = set.findIndex(fit => (
      fit === (parseNumber(num.num[1]) + parseNumber(num.num[2]) + parseNumber(num.num[3])) % 10
    ));

    if (count.find(c => c)) {
      if (isCountWeight) {
        const countLength = [
          !!~firstIndex,
          !!~secondIndex,
          !!~thirdIndex,
          !!~fourthIndex,
        ].filter(index => index).length;

        return (
          (count[0] ? countLength === 0 : false)
          || (count[1] ? countLength === 1 : false)
          || (count[2] ? countLength === 2 : false)
          || (count[3] ? countLength === 3 : false)
          || (count[4] ? countLength === 4 : false)
        );
      }

      const countLength = uniq([
        firstIndex,
        secondIndex,
        thirdIndex,
        fourthIndex,
      ].filter(index => index >= 0)).length;

      return (
        (count[0] ? countLength === 0 : false)
        || (count[1] ? countLength === 1 : false)
        || (count[2] ? countLength === 2 : false)
        || (count[3] ? countLength === 3 : false)
        || (count[4] ? countLength === 4 : false)
      );
    }

    return (
      ~firstIndex
      || ~secondIndex
      || ~thirdIndex
      || ~fourthIndex
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
      ];

    case 'keepThreeFitSet':
      return [
        options.keepThreeFitNumberZero,
        options.keepThreeFitNumberOne,
        options.keepThreeFitNumberTwo,
        options.keepThreeFitNumberThree,
        options.keepThreeFitNumberFour,
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

export function twoFitKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/keepTwoFitSet/) && entry[1].length)
    .map(([condition, value]) => {
      const count = getCount(condition, options);

      return parseTwoFitSet(numbers, value, count, options.keepTwoFitCountWeight);
    });

  if (!composed.length) return numbers;

  const [
    twoFitSet,
  ] = composed;

  const result = intersection(
    (twoFitSet || numbers),
  );

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}

export function threeFitKeeper(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/keepThreeFitSet/) && entry[1].length)
    .map(([condition, value]) => {
      const count = getCount(condition, options);

      return parseThreeFitSet(numbers, value, count, options.keepThreeFitCountWeight);
    });

  if (!composed.length) return numbers;

  const [
    threeFitSet,
  ] = composed;

  const result = intersection(
    (threeFitSet || numbers),
  );

  difference(numbers, result).forEach(num => num.killFailed());

  return numbers;
}
