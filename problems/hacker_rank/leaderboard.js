function leaderboard(lb, scores) {
    let positions = [];
    let rank = 1;
    let lbIdx = 0;
    for (let i = scores.length - 1; i >= 0; i--) {
        if (rank > lb.length) {
            positions[i] = rank;
            continue;
        }

        for (let j = lbIdx; lbIdx < lb.length; lbIdx++) {
            if (scores[i] >= lb[lbIdx]) {
                positions[i] = rank;
                break;
            }
            else {
                if (!lb[lbIdx + 1]) {
                    positions[i] = ++rank;
                    break;
                }
                
                else if (lb[lbIdx] != lb[lbIdx + 1]) rank++;
            }
        }
    }
    console.log(positions);
    return positions;
}

console.log(leaderboard([100,90,89,80,75,60],[74, 75, 76, 77, 78, 79]));

//[100,100,50,40,40,20,10], [5, 25, 50, 120]

//[100,90,90,80,75,60],[50,65,77,90,102]