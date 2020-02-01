const storageOperations = {
  taskList: [],
  addUpdatedListToLocalStorage(userTaskInput, collectionKey) {
    const existingItems = this.getAllTaskFromLocalStorage(collectionKey);
    if (existingItems === null) {
      // Initialize the localStorage with the given key and data-structure
      this.taskList.push(userTaskInput);
      this.saveToLocalStorage(collectionKey, this.taskList);
    } else {
      existingItems.push(userTaskInput);
      this.saveToLocalStorage(collectionKey, existingItems);
    }
  },
  saveToLocalStorage(key, dataStoreType) {
    localStorage.setItem(key, JSON.stringify(dataStoreType));
  },
  getAllTaskFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  delElementByKey(key, parenCollectionKey) {
    const allItems = this.getAllTaskFromLocalStorage(parenCollectionKey);
    allItems.splice(allItems.indexOf(key), 1);
    // console.log(`After deletion ${allItems}`);
    this.saveToLocalStorage(parenCollectionKey, allItems);
  },
  clearLocalStorageByKey(parentCollectionKey) {
    localStorage.removeItem(parentCollectionKey);
  },
};
export {
  storageOperations as default,
};
