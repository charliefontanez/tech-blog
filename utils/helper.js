module.exports = {
  format_date: date => {
    date = new Date(date);
    var formatedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return formatedDate;
  }
}