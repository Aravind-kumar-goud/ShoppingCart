import React from 'react'

function ArrayShuffle() {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
list = list.sort(() => Math.random() - 0.5)
var test = [1, 2, 3, 4, 5]

var Quiz = [];
var random = {};

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
    while (0 !== ctr) {
        index = Math.floor(Math.random() * ctr);
        ctr -= 1
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

for (var i = 0; i < 5; i++) {
    var a = shuffle(test).slice(0)
    Quiz.push({
        options: a,
        riktig: Math.floor((Math.random() * 5) + 1)
    });
}


console.log(Quiz);
  return (
    <div>ArrayShuffle
            <div>{list}</div>

    </div>
  )


}

export default ArrayShuffle