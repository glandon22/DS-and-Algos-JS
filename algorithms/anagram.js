function isAnagram(s1, s2) {
    let count1 = {};
    for (const elem of s1) {
        count1[elem] = ++count1[elem] || 1;
    }
    for (const elem1 of s2) {
        //char doesn't exist in s1 but does in s2
        if (!count1[elem1]) {
            return false;
        }

        else {
            count1[elem1]--;
        }
    }

    return true;
}

console.log(isAnagram('aabaab', 'bbcaaa'))