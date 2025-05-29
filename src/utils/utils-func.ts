export function isUndefined(value: any): value is undefined {
  return value === undefined;
}

export function omitBy<T extends Record<string, any>>(
  obj: T,
  predicate: (value: T[keyof T], key: keyof T) => boolean
): Partial<T> {
  const result: Partial<T> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (!predicate(obj[key], key)) {
        result[key] = obj[key];
      }
    }
  }
  return result;
}
