let chai = require('chai');
let assert = chai.assert;


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

describe('Josephus function tests', function () {
    it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', function () {
        assert.deepEqual(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('should return [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]', function () {
        assert.deepEqual(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]);
    });
    it('should return [\'e\', \'s\', \'W\', \'o\', \'C\', \'d\', \'r\', \'a\']', function () {
        assert.deepEqual(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4), ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']);
    });
    it('should return ', function () {
        assert.deepEqual(josephus([1, 2, 3, 4, 5, 6, 7], 3), [3, 6, 2, 7, 5, 1, 4]);
    });
    it('should return', function () {
        assert.deepEqual(josephus([], 3), [],);
    });

});


