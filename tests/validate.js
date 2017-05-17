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
    assert.equal(validate(['2', '2']), false, '2 2 should be invalid');
    assert.equal(validate(['word']), false, 'word should be invalid');
    assert.equal(validate(['*', '2']), false, '*2 should be invalid');
    assert.equal(validate(['2', '+']), false, '2+ should be invalid');
    assert.end();
});

test('validate operations with parentheses', assert => {
    assert.equal(validate(['(', '2', '+', '2', ')']), true, '(2+2) should be valid');
    assert.equal(validate(['2', '*', '(', '2', '+', '2', ')']), true, '2*(2+2) should be valid');
    assert.equal(validate(['(', '2', '+', '2', ')', '*', '2']), true, '(2+2)*2 should be valid');
    assert.equal(validate(['2', '*', '(', '2', '+', '2', ')', '*', '2']), true, '2*(2+2)*2 should be valid');
    assert.end();
});
