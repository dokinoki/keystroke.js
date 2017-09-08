import test from 'ava';
import * as K from '../src/index';

test('Test isAlphabet() returns TRUE if the code is an alphabet letter', (t) => {
    if (K.isAlphabet(50)) return t.fail();
    if (K.isAlphabet(72)) return t.pass();

    return t.fail();
});

test('Test isAlphabet() returns FALSE if the code is not an alphabet letter', (t) => {
    if (!K.isAlphabet(50)) return t.pass();
    if (K.isAlphabet(50)) return t.fail();

    return t.fail();
});