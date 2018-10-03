import { parseNumber } from './operator';

export function hillKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/hill/) && entry[1] === true);

  if (!composed.length) return numbers;

  composed.forEach(([condition]) => {
    switch (condition) {
      case 'uphill': {
        numbers.forEach((num) => {
          if (
            parseNumber(num.num[0]) < parseNumber(num.num[1])
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'downhill': {
        numbers.forEach((num) => {
          if (
            parseNumber(num.num[0]) > parseNumber(num.num[1])
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

export function continuousKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/Continuous/) && entry[1] === true);

  if (!composed.length) return numbers;

  composed.forEach(([condition]) => {
    switch (condition) {
      case 'noContinuous': {
        numbers.forEach((num) => {
          if (
            !(~num.num.indexOf('1') && ~num.num.indexOf('2'))
            && !(~num.num.indexOf('2') && ~num.num.indexOf('3'))
            && !(~num.num.indexOf('3') && ~num.num.indexOf('4'))
            && !(~num.num.indexOf('4') && ~num.num.indexOf('5'))
            && !(~num.num.indexOf('5') && ~num.num.indexOf('6'))
            && !(~num.num.indexOf('6') && ~num.num.indexOf('7'))
            && !(~num.num.indexOf('7') && ~num.num.indexOf('8'))
            && !(~num.num.indexOf('8') && ~num.num.indexOf('9'))
            && !(~num.num.indexOf('9') && ~num.num.indexOf('0'))
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'isContinuous': {
        numbers.forEach((num) => {
          if ((
            (
              ~num.num.indexOf('1')
              && ~num.num.indexOf('2')
              && !~num.num.indexOf('3')
            )
            || (
              !~num.num.indexOf('1')
              && ~num.num.indexOf('2')
              && ~num.num.indexOf('3')
              && !~num.num.indexOf('4')
            )
            || (
              !~num.num.indexOf('2')
              && ~num.num.indexOf('3')
              && ~num.num.indexOf('4')
              && !~num.num.indexOf('5')
            )
            || (
              !~num.num.indexOf('3')
              && ~num.num.indexOf('4')
              && ~num.num.indexOf('5')
              && !~num.num.indexOf('6')
            )
            || (
              !~num.num.indexOf('4')
              && ~num.num.indexOf('5')
              && ~num.num.indexOf('6')
              && !~num.num.indexOf('7')
            )
            || (
              !~num.num.indexOf('5')
              && ~num.num.indexOf('6')
              && ~num.num.indexOf('7')
              && !~num.num.indexOf('8')
            )
            || (
              !~num.num.indexOf('6')
              && ~num.num.indexOf('7')
              && ~num.num.indexOf('8')
              && !~num.num.indexOf('9')
            )
            || (
              !~num.num.indexOf('7')
              && ~num.num.indexOf('8')
              && ~num.num.indexOf('9')
              && !~num.num.indexOf('0')
            )
            || (
              !~num.num.indexOf('8')
              && ~num.num.indexOf('9')
              && ~num.num.indexOf('0')
            ))
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
