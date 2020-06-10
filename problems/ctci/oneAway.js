function oneAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) return false;
    let p1 = 0;
    let p2 = 0;
    let edits = 0;
    if (str1.length < str2.length) {
        let temp = str1;
        str1 = str2;
        str2 = temp;
    }
    while (p1 < str1.length && edits <= 1) {
        if (str1[p1] != str2[p2]) {
            if (str1.length != str2.length) {
                edits++;
                p1++;
            }

            else {
                edits++;
                p1++;
                p2++;
            }
        }
        
        else {
            p1++;
            p2++;
        }
    }

    return edits <= 1;
}

console.log(oneAway('pales', 'pale'));