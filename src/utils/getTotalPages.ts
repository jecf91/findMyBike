export const getTotalPages = (numberOfRecords: number) =>
  Math.ceil(numberOfRecords / 10);
