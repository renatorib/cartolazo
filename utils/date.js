const zeroFront = value => value < 10 ? `0${value}` : value;

export const formatDate = (_date, format) => {
  const date = new Date(_date);

  return format
    .replace(/mm/g, zeroFront(date.getMonth() + 1))
    .replace(/yyyy/g, date.getFullYear())
    .replace(/dd/g, zeroFront(date.getDate()))
    .replace(/hh/g, zeroFront(date.getHours()))
    .replace(/ii/g, zeroFront(date.getMinutes()));
};

export const foo = 'bar';
