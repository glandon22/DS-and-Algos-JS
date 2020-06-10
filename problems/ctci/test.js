function firstOccurrence(s, x) {
    // Write your code here
    if (s.length === 0 || x.length === 0) return -1;
    else if (x.length > s.length) return -1;
    let index = null;
    let p1 = 0;
    let p2 = 0;
    while (p1 < s.length && p2 < x.length) {
        if (x[p2]  == '*') {
            p1++;
            p2++;
        }

        else if (s[p1] !== x[p2]) {
            index = null;
            p2 = 0;
            p1++;
        }

        else if (s[p1] == x[p2] && index == null) {
            index = p1;
            p1++;
            p2++;
        }

        else {
            p1++;
            p2++;
        }
    }

    if (p2 != x.length - 1) {
        index = null;
    }

    return !!index ? index : -1; 
}

console.log(firstOccurrence('juliasamanthasamanthajulia', 'ant*as'));