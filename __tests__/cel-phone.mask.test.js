import { CelPhoneMask } from '../lib/masks';

test('getType results cel-phone', () => {
    var expected = 'cel-phone';
    var received = CelPhoneMask.getType();

    expect(received).toBe(expected);
});

test('5188888888 results (51) 8888-8888', () => {
    var mask = new CelPhoneMask();
    var expected = '(51) 8888-8888';
    var received = mask.getValue('5188888888');

    expect(received).toBe(expected);
});

test('51888888888 results (51) 88888-8888', () => {
    var mask = new CelPhoneMask();
    var expected = '(51) 88888-8888';
    var received = mask.getValue('51888888888');

    expect(received).toBe(expected);
});

test('88888888 withDDD=false results 8888-8888', () => {
    var mask = new CelPhoneMask();
    var expected = '8888-8888';
    var received = mask.getValue('88888888', {
        withDDD: false
    });

    expect(received).toBe(expected);
});

test('888888888 withDDD=false results 88888-8888', () => {
    var mask = new CelPhoneMask();
    var expected = '88888-8888';
    var received = mask.getValue('888888888', {
        withDDD: false
    });

    expect(received).toBe(expected);
});

test('12377777777 dddMask=999  results 123 7777-7777', () => {
    var mask = new CelPhoneMask();
    var expected = '123 7777-7777';
    var received = mask.getValue('12377777777', {
        dddMask: '999 '
    });

    expect(received).toBe(expected);
});

test('123777777777 dddMask=999  results 123 77777-7777', () => {
    var mask = new CelPhoneMask();
    var expected = '123 77777-7777';
    var received = mask.getValue('123777777777', {
        dddMask: '999 '
    });

    expect(received).toBe(expected);
});