//==================================================================================================
//  Library for Maix common functions (KAJ)
//==================================================================================================

export const _none_ = (_anything?: any) => {};
export const cccc = _none_;
export const _ccc = _none_;
export const _cc = _none_;
export const cc = console.log;
export const ccc = (t: string) => cc(getTimeNow() + ': ' + t);
export const cct = (...args: any[]) => cc('[' + getTimeNow() + ']', ...args);
export const secx = () => getTimeNow().substr(-6);
export const pref0 = (n: number, len: number): string => ('0'.repeat(len) + n).slice(-1 * len);
export const pref0_ = (n: number, len: number): string =>
  String(n).length < n ? ('0'.repeat(len) + n).slice(-1 * len) : String(n);
export const EOL = '\n';
export const LL = '\n';
export const TAB = '\t';
export const Q = "'";
export const QQ = '"';
export const BR = '<br/>';

export const unixMilisec = () => new Date().getTime();
export const sFTime = (time?: string): string => {
  const d = time ? new Date(time) : new Date();
  const _day = _add2(d.getDate());
  const _month = _add2(d.getMonth() + 1);
  const _year = d.getFullYear();
  return `${_year}.${_month}.${_day} ` + getTimeMx(d);
  //return oDateNow.toLocaleString() + '.' + _add3(oDateNow.getMilliseconds());
};
export const getTimeMx = (objDate: Date): string => {
  let res = '';
  res += _add2(objDate.getHours()) + ':';
  res += _add2(objDate.getMinutes()) + ':';
  res += _add2(objDate.getSeconds());
  res += '.' + _add3(objDate.getMilliseconds());
  return res;
};
const _add3 = (n: number): string => pref0(n, 3);
const _add2 = (n: number): string => pref0(n, 2);

export const getTimeNow = (): string => getTimeMx(new Date());

export const T = () => getTimeMx(new Date());
export const dT = (st: Date, end = new Date()): number => end.getTime() - st.getTime();
export const dTs = (st: Date, end = new Date()): string =>
  '{Δ:' + (end.getTime() - st.getTime()) + 'ms}';

export const YorN = (b: boolean) => (b ? 'YES' : 'no');
export const yn = (ok: boolean): string => (ok ? '+' : '-');

//--------------------------------------------------------------------------------------------------
export const getRandomInt = (max: number): number => Math.floor(Math.random() * Math.floor(max));

export const f = async (msg: string, ms: number) => {
  let pattern = `delay "${msg}" with ${ms}`;
  cc(sFTime() + `: ${pattern} starts...`);
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve(msg), ms);
  });
  let result = await promise;
  cc(sFTime() + `: ${pattern} ends with result: "${result}".`);
};

export const J = (obj: any): string => JSON.stringify(obj, null, '  ');
export const lObj = (obj: any) => cc(JSON.stringify(obj, null, '    '));
export const JObj = (obj: any, tabs?: string) => cc(JSON.stringify(obj, null, tabs || '  '));
export const lObj_ = (obj: any) => cc(JSON.stringify(obj, null, '    '));

export const numbBy3 = (numb: number): string => numb.toString().replace(/\d(?=(\d{3})+$)/g, '$& ');
export const numbBy3s = (numb: string): string => {
  // Error with RNFS.ReadDirItem.size !!! Need deeper checks.
  if (numb.length < 4) {
    return numb;
  }
  return numb.trim().replace(/\d(?=(\d{3})+$)/g, '$& ');
};

export const b2Kb = (bytes: number): number => bytes / 1024.0;
export const b2Mb = (bytes: number): number => bytes / (1024 * 1024.0);
export const b2Gb = (bytes: number): number => bytes / (1024 * 1024 * 1024.0);

export const lSort = (a: string, b: string): number =>
  a.localeCompare(b, undefined, {sensitivity: 'base'});

export const uniqueArray = (arr: any[]): any[] => [...new Set(arr)];

export const findIndexAny = (val: any, arr: any[]): number =>
  arr.findIndex((el: any) => el === val);
export function findIndexF<_T>(val: _T, arr: _T[]): number {
  return arr.findIndex((el: _T) => el === val);
}
export const findIndexT = <_T>(val: _T, arr: _T[]): number => arr.findIndex((el: _T) => el === val);

export const lHash = (hash: any) => hash.forEach(_logMapElements);
const _logMapElements = (value: any, key: any) => cc(`{${key}} => "${value}"`);

export const aSortUnique = (arr: string[]): string[] => [...new Set(arr)].sort();
export const aSortUniqueNumb = (arr: number[]): number[] => [...new Set(arr)].sort((a, b) => a - b);

export const aArrayUnion = (arr1: string[], arr2: string[]): string[] => arr1.concat(arr2);

export const sGetByREx = (str: string, re: string): string => {
  const regex = new RegExp(re, 'g');
  let match: any;
  match = regex.exec(str);
  return match && match.length >= 2 ? match[1] : '';
};

export const aGetByREx = (str: string, re: string): string[] => {
  let aRes: string[] = [];
  const regex = new RegExp(re, 'g');
  const match = regex.exec(str) || [];
  if (match.length >= 2) {
    aRes.push(match[1]);
  }
  return aRes;
};

export const showProps = (obj: any, objName: any) => {
  var result = '';
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
};

export const replaceAll = (str: string, find: string, replace: string) => {
  return str.replace(new RegExp(find, 'g'), replace);
};

//--------------------------------------------------------------------------------------------------
// eslint-disable-next-line no-shadow
enum OBJTYPE {
  FUNC = 'function',
  OBJ = 'object',
  ANY = 'any',
}
interface IObj {
  type: OBJTYPE;
  isObj: boolean;
  value: string;
}
// show more extended object's properties, where JSON.stringify can miss, with some counters
interface IShowObjResult {
  message: string;
  counter: number;
}
export const showOBJ = (Obj: any, index = ''): IShowObjResult => {
  const keysArray: string[] = [];
  const propsMap = new Map<string, IObj>();
  for (const property in Obj) {
    keysArray.push(property);
    const nowObj = Obj[property];
    const strType = typeof nowObj;
    //cc('nowObj, strType', nowObj, strType)
    const type: OBJTYPE =
      strType === OBJTYPE.OBJ ? OBJTYPE.OBJ : strType === OBJTYPE.FUNC ? OBJTYPE.FUNC : OBJTYPE.ANY;
    const value = type === OBJTYPE.ANY ? Obj[property] : strType;
    propsMap.set(property, {
      type: type,
      isObj: type === OBJTYPE.OBJ,
      value: value,
    });
  }
  keysArray.sort();
  let i = 0;
  let counter = 0;
  keysArray.forEach((key: string) => {
    const _props = propsMap.get(key);
    if (_props) {
      i++;
      counter++;
      let _value = _props.value;
      if (_props.type === OBJTYPE.OBJ) {
        _value = '[' + _value.toUpperCase() + ']';
      }
      if (_props.type === OBJTYPE.FUNC) {
        _value += '()';
      }
      if (_props.type === OBJTYPE.ANY) {
        _value = QQ + _value + QQ;
      }
      cc(`${index}${i}. "${key}": ${_value}`);
      if (_props.isObj) {
        const _res: IShowObjResult = showOBJ(Obj[key], i + '.');
        counter += _res.counter;
      }
    }
  });
  const res: IShowObjResult = {message: 'showOBJ. Total properties = ' + counter, counter: counter};
  return res;
};
