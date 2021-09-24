function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid.
  // At each position of the grid there is either an "_" or a "#" character.
  // The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  // let tree = "#";
  // let line= "_";
  // for (let i=4; i<=8; i++){
  //   let grid = (tree + line);

  //   console.log(`${grid.repeat(i)}`);
  // }
  
  
  let chess="";
  let grip=8;
  for (let x = 0; x < grip; x++) {   
    if (x % 2 === 0)
      {chess += "#";}
    else
      {chess += "_";}
      
  }
  let separate = chess+",";
  console.log(separate.repeat(8));
  
  //I will comeback to this exercise 

      
  




 


  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11

module.exports = exercise11;
