export const capAlpha = {
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90
};

export const lowAlpha = {
    A: 97,
    B: 98,
    C: 99,
    D: 100,
    E: 101,
    F: 102,
    G: 103,
    H: 104,
    I: 105,
    J: 106,
    K: 107,
    L: 108,
    M: 109,
    N: 110,
    O: 111,
    P: 112,
    Q: 113,
    R: 114,
    S: 115,
    T: 116,
    U: 117,
    V: 118,
    W: 119,
    X: 120,
    Y: 121,
    Z: 122
};

export const navigation = {
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40
};

export const numbers = {
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57
};

export const other = {
    DASH: 189,
    ESCAPE: 27,
    SUBTRACT: 109
};

export const whitespace = {
    TAB: 9,
    ENTER: 13,
    SPACE: 32
};

export function keyForKeyCode(keyCode, object) {
    let keyLabel = null;

    Object.keys(object).forEach((key) => {
        if (object[key] === keyCode) {
            keyLabel = key;
        }
    });

    return keyLabel;
}

export function isAlphabet(keyCode) {
    return (keyCode >= capAlpha.A && keyCode <= capAlpha.Z) ||
        (keyCode >= lowAlpha.A && keyCode <= lowAlpha.Z);
}

export function isEnter(keyCode) {
    return keyCode === whitespace.ENTER;
}

export function isEscape(keyCode) {
    return keyCode === other.ESCAPE;
}

export function isNavigation(keyCode) {
    return keyCode >= navigation.LEFT_ARROW && keyCode <= navigation.DOWN_ARROW;
}

export function isNumber(keyCode) {
    return keyCode >= numbers[0] && keyCode <= numbers[9];
}

export function isWhitespace(keyCode) {
    return keyCode === whitespace.SPACE ||
        keyCode === whitespace.ENTER ||
        keyCode === whitespace.TAB;
}

export function codeToString(keyCode) {
    if (isAlphabet(keyCode) || isNumber(keyCode)) {
        return String.fromCharCode(keyCode);
    } else if (isNavigation(keyCode)) {
        return keyForKeyCode(keyCode, navigation);
    } else if (isWhitespace(keyCode)) {
        return keyForKeyCode(keyCode, whitespace);
    } else if (isEscape(keyCode)) {
        return 'ESCAPE';
    }

    return keyCode;
}
