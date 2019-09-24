export function adjustColor(col: string, amt: number) {
  var usePound = false;

  if (col[0] == '#') {
    col = col.slice(1);
    usePound = true;
  }

  var R = parseInt(col.substring(0, 2), 16);
  var G = parseInt(col.substring(2, 4), 16);
  var B = parseInt(col.substring(4, 6), 16);

  // to make the colour less bright than the input
  // change the following three "+" symbols to "-"
  R = R + amt;
  G = G + amt;
  B = B + amt;

  if (R > 255) R = 255;
  else if (R < 0) R = 0;

  if (G > 255) G = 255;
  else if (G < 0) G = 0;

  if (B > 255) B = 255;
  else if (B < 0) B = 0;

  var RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

  return (usePound ? '#' : '') + RR + GG + BB;
}
const primary = '#021D44';

const primaryDarker = '#021a3c';
// const secondary = '#FF3E55';
const secondary = '#2c98f0';
const white = '#fff';
const circleGrey = '#4B4B4B';
const lightGrey = '#f2f3f7';

export const colors = {
  lightBlue: '#f2f3f7',
  black: '#000',
  blue: '#2c98f0',
  red: '#ec5453',
  yellow: '#f9bf3f',
  primary,
  purple: '#a84cb8',
  secondary,
  white,
  grey: '#f2f3f7',
  lightGrey,
  circleGrey,
  darkgrey: '#999999',
  primaryDarker
};
