const test = require('tape');
const tokenize = require('../public/tokenize');

test('get tokens of simple operations', assert => {
    assert.same(tokenize('2+2'), ['2', '+', '2']);
    assert.same(tokenize('2-2'), ['2', '-', '2']);
    assert.same(tokenize('2*2'), ['2', '*', '2']);
    assert.same(tokenize('2/2'), ['2', '/', '2']);
    assert.same(tokenize('123+321'), ['123', '+', '321']);

    assert.end();
});

test('get tokens with spaces', assert => {
    const expected = tokenize('   2 +   2  ');
    const result = ['2', '+', '2'];

    assert.same(expected, result);
    assert.end();
});

test('get tokens of operations with 3 operators', assert => {
    assert.same(tokenize('2+2-3'), ['2', '+', '2', '-', '3']);
    assert.same(tokenize('24*2/48'), ['24', '*', '2', '/', '48']);
    assert.end();
});

test('get tokens of operations with parenthesis', assert => {
    assert.same(tokenize('2+(2-3)'), ['2', '+', '(', '2', '-', '3', ')']);
    assert.same(tokenize('2 + ((3 - 4) + 5)'), ['2', '+', '(', '(', '3', '-', '4', ')', '+', '5', ')']);
    assert.end();
});

test('get tokens of incorrect operations returns an error', assert => {
    assert.throws(() => tokenize('not an op'), Error);
    assert.throws(() => tokenize('2+3p4'), Error);
    assert.end();
});
