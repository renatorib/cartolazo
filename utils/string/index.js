export const standardize = string => string
  .toLowerCase()
  .replace(/[\xE0-\xE6]/g, 'a')
  .replace(/[\xE8-\xEB]/g, 'e')
  .replace(/[\xEC-\xEF]/g, 'i')
  .replace(/[\xF2-\xF6]/g, 'o')
  .replace(/[\xF9-\xFC]/g, 'u')
  .replace(/\xE7/g, 'c')
  .replace(/\xF1/g, 'n');

export default {
  standardize,
};
