const getDateSeparated = (date) => (
  {
    year: date.getUTCFullYear(),
    month: (date.getUTCMonth() + 1),
    day: date.getUTCDate(),

  }
);

export default getDateSeparated;
