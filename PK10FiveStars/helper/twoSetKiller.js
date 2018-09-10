export function twoSetKiller(numbers, options) {
  const composed = Object.entries(options)
    .filter(entry => entry[0].match(/killTwoSet/) && entry[1] === true);

  if (!composed.length) return numbers;

  composed.forEach(([condition]) => {
    switch (condition) {
      case 'killTwoSetOneTwo': {
        numbers.forEach((num) => {
          if (
            num.num.match(/1.*2|2.*1/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetOneThree': {
        numbers.forEach((num) => {
          if (
            num.num.match(/1.*3|3.*1/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetOneFour': {
        numbers.forEach((num) => {
          if (
            num.num.match(/1.*4|4.*1/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetOneFive': {
        numbers.forEach((num) => {
          if (
            num.num.match(/1.*5|5.*1/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetOneSix': {
        numbers.forEach((num) => {
          if (
            num.num.match(/1.*6|6.*1/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetOneSeven': {
        numbers.forEach((num) => {
          if (
            num.num.match(/1.*7|7.*1/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetOneEight': {
        numbers.forEach((num) => {
          if (
            num.num.match(/1.*8|8.*1/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetOneNine': {
        numbers.forEach((num) => {
          if (
            num.num.match(/1.*9|9.*1/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetOneTen': {
        numbers.forEach((num) => {
          if (
            num.num.match(/1.*0|0.*1/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetTwoThree': {
        numbers.forEach((num) => {
          if (
            num.num.match(/2.*3|3.*2/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetTwoFour': {
        numbers.forEach((num) => {
          if (
            num.num.match(/2.*4|4.*2/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetTwoFive': {
        numbers.forEach((num) => {
          if (
            num.num.match(/2.*5|5.*2/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetTwoSix': {
        numbers.forEach((num) => {
          if (
            num.num.match(/2.*6|6.*2/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetTwoSeven': {
        numbers.forEach((num) => {
          if (
            num.num.match(/2.*7|7.*2/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetTwoEight': {
        numbers.forEach((num) => {
          if (
            num.num.match(/2.*8|8.*2/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetTwoNine': {
        numbers.forEach((num) => {
          if (
            num.num.match(/2.*9|9.*2/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetTwoTen': {
        numbers.forEach((num) => {
          if (
            num.num.match(/2.*0|0.*2/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetThreeFour': {
        numbers.forEach((num) => {
          if (
            num.num.match(/3.*4|4.*3/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetThreeFive': {
        numbers.forEach((num) => {
          if (
            num.num.match(/3.*5|5.*3/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetThreeSix': {
        numbers.forEach((num) => {
          if (
            num.num.match(/3.*6|6.*3/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetThreeSeven': {
        numbers.forEach((num) => {
          if (
            num.num.match(/3.*7|7.*3/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetThreeEight': {
        numbers.forEach((num) => {
          if (
            num.num.match(/3.*8|8.*3/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetThreeNine': {
        numbers.forEach((num) => {
          if (
            num.num.match(/3.*9|9.*3/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetThreeTen': {
        numbers.forEach((num) => {
          if (
            num.num.match(/3.*0|0.*3/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetFourFive': {
        numbers.forEach((num) => {
          if (
            num.num.match(/4.*5|5.*4/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetFourSix': {
        numbers.forEach((num) => {
          if (
            num.num.match(/4.*6|6.*4/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetFourSeven': {
        numbers.forEach((num) => {
          if (
            num.num.match(/4.*7|7.*4/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetFourEight': {
        numbers.forEach((num) => {
          if (
            num.num.match(/4.*8|8.*4/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetFourNine': {
        numbers.forEach((num) => {
          if (
            num.num.match(/4.*9|9.*4/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetFourTen': {
        numbers.forEach((num) => {
          if (
            num.num.match(/4.*0|0.*4/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetFiveSix': {
        numbers.forEach((num) => {
          if (
            num.num.match(/5.*6|6.*5/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetFiveSeven': {
        numbers.forEach((num) => {
          if (
            num.num.match(/5.*7|7.*5/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetFiveEight': {
        numbers.forEach((num) => {
          if (
            num.num.match(/5.*8|8.*5/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetFiveNine': {
        numbers.forEach((num) => {
          if (
            num.num.match(/5.*9|9.*5/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetFiveTen': {
        numbers.forEach((num) => {
          if (
            num.num.match(/5.*0|0.*5/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetSixSeven': {
        numbers.forEach((num) => {
          if (
            num.num.match(/6.*7|7.*6/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetSixEight': {
        numbers.forEach((num) => {
          if (
            num.num.match(/6.*8|8.*6/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetSixNine': {
        numbers.forEach((num) => {
          if (
            num.num.match(/6.*9|9.*6/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetSixTen': {
        numbers.forEach((num) => {
          if (
            num.num.match(/6.*0|0.*6/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetSevenEight': {
        numbers.forEach((num) => {
          if (
            num.num.match(/7.*8|8.*7/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetSevenNine': {
        numbers.forEach((num) => {
          if (
            num.num.match(/7.*9|9.*7/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetSevenTen': {
        numbers.forEach((num) => {
          if (
            num.num.match(/7.*0|0.*7/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetEightNine': {
        numbers.forEach((num) => {
          if (
            num.num.match(/8.*9|9.*8/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetEightTen': {
        numbers.forEach((num) => {
          if (
            num.num.match(/8.*0|0.*8/)
          ) {
            num.killFailed();
          }
        });
        break;
      }

      case 'killTwoSetNineTen': {
        numbers.forEach((num) => {
          if (
            num.num.match(/9.*0|0.*9/)
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

export default { twoSetKiller };
