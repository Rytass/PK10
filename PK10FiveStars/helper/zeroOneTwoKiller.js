export function zeroOneTwoKiller(numbers, options) {
  if (!options.zeroOneTwo) return numbers;

  const target = options.zeroOneTwo
    .split(/[\s\n(\r\n)]/)
    .filter(t => t)
    .map(condition =>
      `(${Array.from(condition).map((key) => {
        switch (key) {
          case '0':
            return '[369]';

          case '1':
            return '[1470]';

          case '2':
            return '[258]';

          default:
            return '.';
        }
      }).join('')})`).join('|');

  const re = new RegExp(target);

  numbers.forEach((num) => {
    if (`${num.num}`.match(re)) {
      num.killFailed();
    }
  });

  return numbers;
}

export default zeroOneTwoKiller;
