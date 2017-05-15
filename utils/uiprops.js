const or = (p1, p2) => (p1 === undefined) ? p2 : p1;

export default schema => (propName, schemaName, _default) => props =>
  schema[schemaName][or(props[propName], _default)] || '';
