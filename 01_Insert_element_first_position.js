const insertElementFirstTime = (list, newData) => {
    for (let index = list.length - 1; index >= list.length - 1; index--) {
      list[index + 1] = newData;
    }
    return list;
  };
  
  
  const newData = "item 1";
  const displayInsertElementFirstTime = insertElementFirstTime([10], newData);
  console.log("🚀 insert element first position", displayInsertElementFirstTime);