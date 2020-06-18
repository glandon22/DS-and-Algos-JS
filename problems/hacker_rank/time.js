/**
 * https://www.hackerrank.com/challenges/the-time-in-words/problem
 */

function time(h, m) {
    let words = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        21: 'twenty one',
        22: 'twenty two',
        23: 'twenty three',
        24: 'twenty four',
        25: 'twenty five',
        26: 'twenty six',
        27: 'twenty seven',
        28: 'twenty eight',
        29: 'twenty nine'
    }

    if (m == '00') {
        return `${words[h]} o\' clock`
    }

    else if (m == '01') {
        return `one minute past ${words[h]}`;
    }

    else if (m == 15) {
        return `quarter past ${words[h]}`;
    }

    else if (m < 30) {
        return `${words[m]} minutes past ${words[h]}`;
    }

    else if (m == 30) {
        return `half past ${words[h]}`;
    }

    else if (m < 40) {
        return `twenty ${words[(60 - m) % 10]} minutes to ${words[h + 1]}`;
    }

    else if (m == 45) {
        return `quarter to ${words[h + 1]}`;
    }

    else if (m == 59) {
        return `one minute to ${words[h + 1]}`;
    }

    else {
        return `${words[60 - m]} minutes to ${words[h + 1]}`;
    }
}

console.log(time(5, 58));