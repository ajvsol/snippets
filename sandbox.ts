//export function decodedValue(value: string): number {
//  let arr = value.toLowerCase().split(' ');

//  console.log(`arr`, arr)

//  function colourDecode(value2: string): any {

//    switch (value2) {
//      case "black": return 0; break;
//      case "brown": return 1; break;
//      case "red": return 2; break;
//      case "orange": return 3; break;
//      case "yellow": return 4; break;
//      case "green": return 5; break;
//      case "blue": return 6; break;
//      case "violet": return 7; break;
//      case "grey": return 8; break;
//      case "white": return 9; break;
//    }
//  }

//  return parseInt(`${colourDecode(arr[0])} + ${colourDecode(arr[2])}`)

//  throw new Error('Remove this statement and implement this function')
//}

export function decodedValue(value: string[]): any {
  let str: string = ``;

  value.forEach((el, ind) => {
    if (ind === 0 || ind === 1) {
      switch (el) {
        case "black":
          str += `0`;
          break;
        case "brown":
          str += `1`;
          break;
        case "red":
          str += `2`;
          break;
        case "orange":
          str += `3`;
          break;
        case "yellow":
          str += `4`;
          break;
        case "green":
          str += `5`;
          break;
        case "blue":
          str += `6`;
          break;
        case "violet":
          str += `7`;
          break;
        case "grey":
          str += `8`;
          break;
        case "white":
          str += `9`;
          break;
      }
    }
  });

  return parseInt(str);

  throw new Error("Remove this statement and implement this function");
}
