function biggerIsGreater(w) {
    if (w.length <= 1) return 'no answer';
    let pivot = w.length - 1;
    let broken = false;
    while (pivot >= 0 && !broken) {
        if (w[pivot - 1] >= w[pivot]) {
            pivot--;
        }

        else broken = true;
    }

    if (pivot === 0) return 'no answer';
    let prefix = w.slice(0, pivot - 1);
    let suffix = w.slice(pivot - 1).split("");
    let suffixPivot = suffix.length - 1;
    while (suffix[suffixPivot] <= suffix[0]) {
        suffixPivot--;
    }

    let temp = suffix[0];
    suffix[0] = suffix[suffixPivot];
    suffix[suffixPivot] = temp;
    prefix += suffix[0];
    suffixPivot = suffix.length - 1;

    while (suffixPivot > 0) {
        prefix += suffix[suffixPivot];
        suffixPivot--;
    }
    return prefix;
}

console.log(biggerIsGreater('123321'));