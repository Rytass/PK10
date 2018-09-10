import { parseNumber } from './operator';

export function positionKiller(numbers, options) {
  const first = [
    options.firstOne,
    options.firstTwo,
    options.firstThree,
    options.firstFour,
    options.firstFive,
    options.firstSix,
    options.firstSeven,
    options.firstEight,
    options.firstNine,
    options.firstTen,
  ];

  const second = [
    options.secondOne,
    options.secondTwo,
    options.secondThree,
    options.secondFour,
    options.secondFive,
    options.secondSix,
    options.secondSeven,
    options.secondEight,
    options.secondNine,
    options.secondTen,
  ];

  const third = [
    options.thirdOne,
    options.thirdTwo,
    options.thirdThree,
    options.thirdFour,
    options.thirdFive,
    options.thirdSix,
    options.thirdSeven,
    options.thirdEight,
    options.thirdNine,
    options.thirdTen,
  ];

  const fourth = [
    options.fourthOne,
    options.fourthTwo,
    options.fourthThree,
    options.fourthFour,
    options.fourthFive,
    options.fourthSix,
    options.fourthSeven,
    options.fourthEight,
    options.fourthNine,
    options.fourthTen,
  ];

  const fifth = [
    options.fifthOne,
    options.fifthTwo,
    options.fifthThree,
    options.fifthFour,
    options.fifthFive,
    options.fifthSix,
    options.fifthSeven,
    options.fifthEight,
    options.fifthNine,
    options.fifthTen,
  ];

  numbers.forEach((num) => {
    if (first[parseNumber(num.num[0]) - 1]) {
      num.failed();
    }

    if (second[parseNumber(num.num[1]) - 1]) {
      num.failed();
    }

    if (third[parseNumber(num.num[2]) - 1]) {
      num.failed();
    }

    if (fourth[parseNumber(num.num[3]) - 1]) {
      num.failed();
    }

    if (fifth[parseNumber(num.num[4]) - 1]) {
      num.failed();
    }

    if (
      !options.positionFaultZero
      && !options.positionFaultOne
      && !options.positionFaultTwo
      && !options.positionFaultThree
      && !options.positionFaultFour
      && !options.positionFaultFive
    ) {
      if (!num.isPass(0)) {
        num.killFailed();
        return;
      }
      return;
    }

    if (
      !(
        (options.positionFaultZero ? num.isPass(0) : false)
        || (options.positionFaultOne ? num.isPass(1) : false)
        || (options.positionFaultTwo ? num.isPass(2) : false)
        || (options.positionFaultThree ? num.isPass(3) : false)
        || (options.positionFaultFour ? num.isPass(4) : false)
        || (options.positionFaultFive ? num.isPass(5) : false)
      )
    ) {
      num.killFailed();
    }
  });

  return numbers;
}

export default positionKiller;
