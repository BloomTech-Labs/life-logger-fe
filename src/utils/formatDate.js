// returns string in YYYY-MM-DD format
export const formatDate = (dateObj) => {
  const year = dateObj.getFullYear();

  let month = (1 + dateObj.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  let day = dateObj.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return `${year}-${month}-${day}`;
};
