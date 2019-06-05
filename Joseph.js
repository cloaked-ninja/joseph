function josephus(items, k) {

    let result = [];
    // terminate early if the k value is 1, because it won't affect the returning array
    if (k === 1) {
        return items;
    }
    let itemsLength = items.length;
    let indexToRemove = 0;
    // we have to take the items.length outside of the loop so it only
    // runs on the original length of the items array because the array will be changing
    // while will count down to zero on the original length of the items array
    while (itemsLength--) {
        // get the value of the item to remove from the array and place in the results
        // we started on 1 instead of zero, this makes sure we start at 0 on the array index
        indexToRemove = (indexToRemove + k - 1) % items.length;
        // add the value to the result array
        result.push(items[indexToRemove]);
        // locate the same index using the splice function and remove 1 value from the items array
        items.splice(indexToRemove, 1);
    }
    console.log(result);
    return result;
}

