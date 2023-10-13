import "@testing-library/jest-dom";
const Hashtable = require('../hashtable/hash');

describe('Hashtable', () => {
  let hashtable;

  beforeEach(() => {
    hashtable = new Hashtable();
  });

  it('should set a key/value and retrieve the value', () => {
    hashtable.set('key1', 'value1');
    expect(hashtable.get('key1')).toEqual('value1');
  });

  it('should return null for a key that does not exist', () => {
    expect(hashtable.get('nonexistentKey')).toBeUndefined();
  });

  it('should return a list of all unique keys', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    expect(hashtable.keys()).toEqual(['key1', 'key2']);
  });

});