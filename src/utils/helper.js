export const filterCards = (cards,value) => {

    
    const filteredData = cards.filter((element) => {
      return element.data.name.toLowerCase()?.includes(value.toLowerCase());
    });
    return filteredData;
  };