function isSubsequence(s1,s2) {
    if (s1.length > s2.length) {
        return false;
    }

    let pointer = 0;

    for (const char of s2) {
        if (char == s1[pointer]) {
            pointer++;
            if (pointer >= s1.length) {
                return true;
            }
        }
    }

    return false;
}

console.log(isSubsequence('hgi','hddgggggjdsjdfsjsdfji'));