import { parseNumber } from './operator';

export function sumKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/killSum/) && entry[1] === true);

  if (!composed.length) return numbers;

  composed.forEach(([condition]) => {
    switch (condition) {
      case 'killSumTen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 10
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumEleven': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 11
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwelve': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 12
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirteen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 13
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumFourteen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 14
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumFifteen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 15
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumSixteen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 16
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumSeventeen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 17
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumEighteen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 18
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumNineteen': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 19
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwenty': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 20
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyOne': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 21
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyTwo': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 22
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyThree': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 23
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyFour': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 24
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyFive': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 25
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentySix': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 26
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentySeven': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 27
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyEight': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 28
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumTwentyNine': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 29
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirty': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 30
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirtyOne': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 31
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirtyTwo': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 32
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirtyThree': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 33
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killSumThirtyFour': {
        numbers.forEach((num) => {
          if ((
            parseNumber(num.num[0])
            + parseNumber(num.num[1])
            + parseNumber(num.num[2])
            + parseNumber(num.num[3])) === 34
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

export default { sumKiller };
