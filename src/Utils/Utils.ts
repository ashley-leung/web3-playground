export const assertNotNull = (input: any) => {
  if (input === undefined || input === null) throw new Error("input is empty");
  return input;
};
