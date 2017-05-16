const test = require('tape');
const calculate = require('../public/calculate');

test('calculate basic operations', assert => {
    assert.equal(calculate([4, '+', 3]), 7);
    assert.equal(calculate([4, '-', 3]), 1);
    assert.equal(calculate([4, '*', 3]), 12);
    assert.equal(calculate([12, '/', 3]), 4);
    assert.end();
});

test('calculate with multiple operations', assert => {
    assert.equal(calculate([4, '+', 3, '-', 2]), 5);
    assert.end();
});
