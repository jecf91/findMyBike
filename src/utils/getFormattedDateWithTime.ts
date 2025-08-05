export const getFormattedDateWithTime = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000);
  const addZeroIfMissing = (val:number) => val.toString().padStart(2,"0")
  const day = addZeroIfMissing(date.getDay());
  const month = addZeroIfMissing(date.getMonth() +1);
  const year = addZeroIfMissing(date.getFullYear());
  const hours = addZeroIfMissing(date.getHours());
  const minutes = addZeroIfMissing(date.getMinutes());
  const seconds = addZeroIfMissing(date.getSeconds());

  const formatted = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

  return formatted;
};
