/**
 *
 * @param obj source object
 * @param keys expected property keys
 * @returns new object with corresponding expected keys
 */

export const pick = (obj: Record<string, unknown>, keys: string[]) => {
  return Object.assign({}, ...keys.map((key) => ({ [key]: obj[key] })));
};
