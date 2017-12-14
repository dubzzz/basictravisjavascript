"use strict";
const assert = require('assert'); //TODO: import on ES6
const gcd = require('../src/lib');

describe('gcd', () => {
    it('gcd(4,4) = 4', () => assert.equal(gcd(4, 4), 4));
    it('gcd(5,25) = 5', () => assert.equal(gcd(5, 25), 5));
    it('gcd(42,21) = 21', () => assert.equal(gcd(42, 21), 21));
    it('gcd(3,7) = 1', () => assert.equal(gcd(3, 7), 1));
    it('gcd(0,7) = 7', () => assert.equal(gcd(0, 7), 7));
    it('gcd(7,0) = 7', () => assert.equal(gcd(7, 0), 7));
});
