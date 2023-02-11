// Date.prototype.getYesterday = function () {
  //   const choosenDate = new Date(this);
  //   const yesterdayDate = new Date(choosenDate.getTime() - 1000 * 60 * 60 * 24);
  //   return yesterdayDate.toISOString().split("T")[0];
  // };





function getYesterday(input) {
    const choosenDate = new Date(input);
    const yesterdayDate = new Date(choosenDate.getTime() - 1000 * 60 * 60 * 24);
    return yesterdayDate.toISOString().split("T")[0];
  };

  export default getYesterday