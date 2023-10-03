'use strict';

describe('testing sorting by most recent year'), () => {
    test('It should sort through movie years and return sorted starting with the most recent year', () => {
        expect(Insert([1994, 2008, 1971, 1972, 2010]).toStrictEqual([2010, 2008, 1994, 1972, 1971]));
    });
};

describe('testing sorting by title excluding A, An, and The at the beginning'), () => {
    test('It should sort the titles of the movies alphebetically and exclude the beginnings of titles that start with A, An, and The, returning the movies alphebetically', () => {
        expect(Insert(['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'A Clockwork Orange', 'An Inception']).toStrictEqual(['A Clockwork Orange', 'The Dark Knight', 'The Godfather', 'An Inception', 'The Shawshank Redemption']));
    });
};