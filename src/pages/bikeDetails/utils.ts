export const isNotDefinedPropertyChecker = (val: any): string | any => {
  if (
    val === null ||
    val === undefined ||
    (typeof val === 'string' && val.trim() === '') ||
    (typeof val === 'number' && isNaN(val))
  ) {
    return 'Not Specified';
  }

  return val;
};
