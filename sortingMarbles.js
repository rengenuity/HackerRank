function countMissingMarbles (groupToTest, sortedSegment) {
    let missingMarbles = 0
    for (let marble of sortedSegment) {
        console.log(JSON.stringify({marble, groupToTest, sortedSegment}))
        missingMarbles += Boolean(!groupToTest.includes(marble))
    }
    return missingMarbles
}

function getMinMoves (groupA, groupB, groupC) {
    console.log(groupA, groupB, groupC)
    let moves = 0;
    let sortedMarbles = [...groupA, ...groupB, ...groupC].sort((a, b) => a - b)
    let newGroupFromA = sortedMarbles.slice(0, groupA.length) 
    let newGroupFromB = sortedMarbles.slice(groupA.length, groupA.length + groupB.length)  
    let newGroupFromC = sortedMarbles.slice(groupA.length + groupB.length)  

    moves += countMissingMarbles(groupA, newGroupFromA) + countMissingMarbles(groupB, newGroupFromB) + countMissingMarbles(groupC, newGroupFromC)
    console.log(Math.ceil(moves/2))
    return Math.ceil(moves/2)    
}

getMinMoves([ 3, 5 ] ,[ 1, 4 ] ,[ 2, 6 ]) // 3
getMinMoves([2,1.3], [4],[5]) // 0
getMinMoves([2,3],[1,4,6],[5,7])
