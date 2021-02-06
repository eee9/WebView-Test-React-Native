/* eslint-disable curly */
import {Platform} from 'react-native';

export const strOS: string = Platform.OS;
export const isANDROID: boolean = Platform.OS === 'android';
export const isWEB: boolean = Platform.OS === 'web';
export const isIOS: boolean = Platform.OS === 'ios';
//export const isELEC: boolean = isWEB && navigator.userAgent.toLowerCase().search('electron') >= 0;
//export const isLINUX: boolean = false;
//export const isWINDOWS: boolean = isWEB && navigator.userAgent.toLowerCase().search('windows') >= 0;

export const YorN = (b: boolean) => (b ? 'YES' : 'no');
export const YN = (ok: boolean): string => (ok ? '+' : '-');

export const nameOS = (): string => {
  let _nameOS = '_UNDEFINED_';
  if (isANDROID) _nameOS = 'ANDROID';
  else if (isIOS) _nameOS = 'IOS';
  //else if (isELEC) _nameOS = isWINDOWS ? 'WINDOWS' : 'LINUX';
  //else if (isWEB) _nameOS = 'WEB';
  return _nameOS;
};

// /* eslint-disable curly */
//==================================================================================================
//  Library for React Native
//==================================================================================================
// import {Platform} from 'react-native';

export const getOSver = (): string => {
  //const verInfo = 'OS:' + Platform.OS;
  //const verInfo = Platform.OS === 'android' ? ' A:' + andAPIlvl() : 'OS:' + Platform.OS;
  return Platform.OS === 'android' ? ' A:' + andAPIlvl() : 'OS:' + Platform.OS;
};

export const andAPIlvl = (): string =>
  Platform.OS === 'android' ? Platform.Version.toString() : '';

export const andAPI = (): number => {
  let res: number = 0;
  if (Platform.OS === 'android') {
    const ver = Platform.Version.toString();
    res = parseInt(ver, 10);
  }
  return res;
};

export const isAnd10plus = () => andAPI() > 28;

const verInfo: Map<number | string, string> = new Map([
  [16, '4.1'],
  [17, '4.2'],
  [18, '4.3'],
  [19, '4.4'],
  [20, '4.4W'],
  [21, '5.0'],
  [22, '5.1'],
  [23, '6.0'],
  [24, '7.0'],
  [25, '7.1'],
  [26, '8.0'],
  [27, '8.1'],
  [28, '9.0'],
  [29, '10.0'],
  [30, '11.0'],
]);

export const andVer = (): string => {
  let res = '';
  if (Platform.OS === 'android') {
    if (Platform.Version > 30) res = '>11.0';
    else if (Platform.Version >= 16) res = verInfo.get(Platform.Version) || '<4.1';
    else res = '<4.1';
  }
  return res;
};

/*
    Data from Android Studio on K4E:
    100.0%      4.0      15
     99.8%      4.1      16
     99.2%      4.2      17
     98.4%      4.3      18
     98.1%      4.4      19
     94.1%      5.0      21
     92.3%      5.1      22
     84.9%      6.0      23
     73.7%      7.0      24
     66.2%      7.1      25
     60.8%      8.0      26
     53.5%      8.1      27
     39.5%      9.0      28
      8.2%     10.0      29

    Data from Android Studio on K3Q:
    100.0%      4.0      15
     99.6%      4.1      16
     98.1%      4.2      17
     95.9%      4.3      18
     95.3%      4.4      19
     85.0%      5.0      21
     80.2%      5.1      22
     62.6%      6.0      23
     37.1%      7.0      24
     14.2%      7.1      25
      6.0%      8.0      26
      1.1%      8.1      27


    Data on K3P
    Android   10.0       29    Q
    Android     9        28    P
    Android     8.1      27    O_MR1
    Android     8.0      26    O
    Android     7.1.1    25    N_MR1
    Android     7.1      25    N_MR1
    Android     7.0      24    N
    Android     6.0      23    M
    Android     5.1      22    LOLLIPOP_MR1
    Android     5.0      21    LOLLIPOP
    Android     4.4W     20    KITKAT_WATCH   KitKat for Wearables Only
    Android     4.4      19    KITKAT
    Android     4.3      18    JELLY_BEAN_MR2
    Android     4.2.2    17    JELLY_BEAN_MR1
    Android     4.2      17    JELLY_BEAN_MR1
    Android     4.1.1    16    JELLY_BEAN
    Android     4.1      16    JELLY_BEAN
    Android     4.0.4    15    ICE_CREAM_SANDWICH_MR1
    Android     4.0.3    15    ICE_CREAM_SANDWICH_MR1
    Android     4.0.2    14    ICE_CREAM_SANDWICH
    Android     4.0.1    14    ICE_CREAM_SANDWICH
    Android     4.0      14    ICE_CREAM_SANDWICH
    Android     3.2      13    HONEYCOMB_MR2
    Android     3.1.x    12    HONEYCOMB_MR1
    Android     3.0.x    11    HONEYCOMB
    Android     2.3.4
    Android     2.3.3    10    GINGERBREAD_MR1
    Android     2.3.2
    Android     2.3.1
    Android     2.3       9    GINGERBREAD
    Android     2.2.x     8    FROYO
    Android     2.1.x     7    ECLAIR_MR1
    Android     2.0.1     6    ECLAIR_0_1
    Android     2.0       5    ECLAIR
    Android     1.6       4    DONUT
    Android     1.5       3    CUPCAKE
    Android     1.1       2    BASE_1_1
    Android     1.0       1    BASE

*/

/*
export const andVer1 = (): string => {
  let res = '';
  if (Platform.OS !== 'android') return '';
  if (Platform.Version > 29)
    res = '>10.0'
  else {
    switch (Platform.Version) {
      case 29:
        res = '10.0';
        break;
      case 28:
        res = '9.0';
        break;
      case 27:
        res = '8.1';
        break;
      case 26:
        res = '8.0';
        break;
      case 25:
        res = '7.1';
        break;
      case 24:
        res = '7.0';
        break;
      case 23:
        res = '6.0';
        break;
      case 22:
        res = '5.1';
        break;
      case 21:
        res = '5.0';
        break;
      case 20:
        res = '4.4W';
        break;
      case 19:
        res = '4.4';
        break;
      case 18:
        res = '4.3';
        break;
      case 17:
        res = '4.2';
        break;
      case 16:
        res = '4.1';
        break;
      default:
        res = '<4.1'
    }
  }
  return res;
}
*/
