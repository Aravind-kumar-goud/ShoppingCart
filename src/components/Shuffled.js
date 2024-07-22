 import React, { useEffect, useState } from "react";

const myArray = [
  { name: "cat", count: 0 },
  { name: "dog", count: 0 },
  { name: "hamster", count: 0 },
  { name: "lizard", count: 0 }
];

function shuffle(arra1) {
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

function Shuffled(props) {
  const [list, setList] = useState(myArray);
  useEffect(() => {
    const mountArray = shuffle(myArray);
    setList(mountArray);
  }, []);

  function handleShuffle() {
    const changes = shuffle([...list]);
    setList(changes);
    console.log("Shuffle", myArray);
  }

  return (
    <div>
      {list.map((x, index) => (
        <div key={x.name + x.index}>
          {x.name} - {x.count}
          <button onClick={() => setList([...list], (x.count = x.count + 1))}>
            +
          </button>
        </div>
      ))}
      <button onClick={handleShuffle}>Shuffle</button>
    </div>
  );
}

export default Shuffled;