const or = (p1, p2) => (p1 === undefined) ? p2 : p1;

export default schema => (schemaName, propName, defaul) => props =>
  schema[schemaName][or(props[propName], defaul)] || '';
