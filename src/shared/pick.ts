// const pick = <T extends object, k extends keyof T>(
//   obj: T,
//   keys: k[],
// ): Partial<T> => {
//   const finalObject: Partial<T> = {};

//   for (const key of keys) {
//     if (obj && Object.hasOwnProperty.call(obj, key)) {
//       finalObject[key] = obj[key];
//     }
//   }
//   return finalObject;
// };

// export default pick;

//['page','limit','sortBy','sortOrder']

const pick = <T extends Record<string, unknown>, k extends keyof T>(
  obj: T,
  keys: k[],
): Partial<T> => {
  const finalObj: Partial<T> = {};

  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }
  return finalObj;
};

export default pick;
