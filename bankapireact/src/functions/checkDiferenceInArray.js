
function checkDiferenceInArray(array) {
  
    // eslint-disable-next-line
    const returnArray = array.map((item) => {
    if (item > 0) {
      return {
        name: "Wartosc wzrosla",
        picture: "Up-arrow",
      };
    } else if (item === 0) {
      return {
        name: "wartosc spadla",
        picture: "Right-arrow",
      };
    } else if (item < 0) {
      return {
        name: "Wartosc spadla",
        picture: "Down-arrow",
      };
    }
  });

  return returnArray
}

export default checkDiferenceInArray;
