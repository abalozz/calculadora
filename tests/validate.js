const test = require('tape');
const validate = require('../public/validate');

test('validate simple operations', assert => {
    assert.equal(validate(['2', '+', '2']), true);
    assert.equal(validate(['2', '-', '2']), true);
    assert.equal(validate(['2', '*', '2']), true);
    assert.equal(validate(['2', '/', '2']), true);
    assert.end();
});

test('validate fails if tokens are invalid', assert => {
    assert.equal(validate(['2', '2']), false);
    assert.equal(validate(['word']), false);
    assert.equal(validate(['*', '2']), false);
    assert.equal(validate(['2', '+']), false);
    assert.end();
});

test('validate operations with parentheses', assert => {
    assert.equal(validate(['(', '2', '+', '2', ')']), true);
    assert.equal(validate(['2', '*', '(', '2', '+', '2', ')']), true);
    assert.equal(validate(['(', '2', '+', '2', ')', '*', '2']), true);
    assert.equal(validate(['2', '*', '(', '2', '+', '2', ')', '*', '2']), true);
    assert.end();
});
