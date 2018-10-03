import { parseNumber } from './operator';

export function acrossKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/across/) && entry[1] === true);

  if (!composed.length) return numbers;

  composed.forEach(([condition]) => {
    switch (condition) {
      case 'acrossOne': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            ) === 1
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossTwo': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            ) === 2
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossThree': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            ) === 3
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossFour': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            ) === 4
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossFive': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            ) === 5
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossSix': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            ) === 6
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossSeven': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            ) === 7
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossEight': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            ) === 8
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'acrossNine': {
        numbers.forEach((num) => {
          if (
            Math.max(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            )
            - Math.min(
              parseNumber(num.num[0]),
              parseNumber(num.num[1])
            ) === 9
          ) {
            num.killFailed();
          }
        });
        break;
      }

      default:
        break;
    }
  });

  return numbers;
}

export default acrossKiller;
