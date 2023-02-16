export const filterCards = (cards,value) => {

    
    const filteredData = cards.filter((element) => {
      return element.data.name.toLowerCase()?.includes(value.toLowerCase());
    });
    return filteredData;
  };

export const imagePresent = (imageId) => {
  if (imageId == undefined) {
    return 0;
  } else if ((imageId.length == 0)) {
    return 0;
  } else {
    return 1;
  }
};