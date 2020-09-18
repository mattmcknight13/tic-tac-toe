export function calculateWinner(squares) {
  // look up array to compare moves
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // for variable i is less than length of lines, increment i
  for (let i = 0; i < lines.length; i++) {
    // const array = lines at i
    const [a, b, c] = lines[i];
    // if fist values are same check to see if second and third values are also the same
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // return x or o
      return squares[a];
    }
  }
  // return null if no winner
  return null;
}

// const squares = [null, null, null, "x", "x", "o", null, null, null]; 

// console.log(calculateWinner(squares))