'use strict';

function leftJoin(synonyms, antonyms) {
    const result = [];

    for(const [word, synonym] of synonyms) {
        const antonym = antonyms.get(word) || null;
        result.push([word, synonym, antonym]);
    }

    return result;
}