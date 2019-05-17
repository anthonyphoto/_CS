function matrix(n) {
    const arr = [];
    for (let y = 0; y < n; y++){
      arr[y] = [];
      for (let x = 0; x < n; x++) {
        arr[y].push(0)
      }
    }
  
    let num = 1, y = 0, x = 0, direction = "right";
    while (arr[y][x] === 0) {
      arr[y][x] = num;
      num++;
      switch (direction) {
        case "right": 
          x++;
          if (arr[y][x] !== 0) {
            x--;
            y++;
            direction = "down";
          } 
          break;
  
        case "down":
          y++;
          if(!arr[y] || arr[y][x] !== 0) {
            y--;
            x--;
            direction = "left";
          }
          break;
  
        case "left":
          x--; 
          if (arr[y][x] !== 0) {
            x++;
            y--;
            direction = "up";
          }
          break;
  
        case "up":
          y--; 
          if (arr[y][x] !== 0) {
            y++;
            x++;
            direction = "right";
          }
          break;
      }
    }
    return arr;
  }
  
  console.log(matrix(4));
  