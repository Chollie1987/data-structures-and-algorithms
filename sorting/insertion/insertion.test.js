'use strict';

describe('testing random array'), () => {
    test('It should take in a random array and return the array sorted', () => {
        expect(Insert([8, 4, 23, 42, 16, 15]).toStrictEqual([4, 8, 15, 16, 23, 42]));
    });
};

describe('testing duplicate numbers'), () => {
    test('It should take in a random array with duplicate numbers and return the array sorted', () => {
        expect(Insert([5, 2, 7, 2, 5, 3]).toStrictEqual([2, 2, 3, 5, 5, 7]));
    });
};

describe('testing negative numbers'), () => {
    test('It should take in a random array with negative numbers and return the array sorted', () => {
        expect(Insert([6, 13, -5, 8, -2, 3]).toStrictEqual([-5, -2, 3, 6, 8, 13]));
    });
};

