const canUseWindow = typeof window !== 'undefined';

export const get = name =>
  canUseWindow && JSON.parse(window.localStorage.getItem(name));

export const set = (name, data) =>
  canUseWindow && window.localStorage.setItem(name, JSON.stringify(data));

export default {
  get,
  set,
};
