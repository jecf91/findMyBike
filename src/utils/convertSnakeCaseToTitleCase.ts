export const convertSnakeCaseToTitleCase = (val: string) => {
  const replacedString = val.replace(/([A-Z])/g, ' $1');
  const preparedString =
    replacedString.charAt(0).toUpperCase() + replacedString.slice(1);
  return preparedString;
};
