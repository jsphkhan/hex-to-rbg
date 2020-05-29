/** 
 * 
 * Write a function that converts a hexadecimal color, for example blue "#0000FF", into its RGB representation "rgb(0, 0, 255)". Name your function getRGB() and test it with this code:
       >>> var a = getRGB("#00FF00");
       >>> a;
      "rgb(0, 255, 0)"

*/

function getRGB(hexVal:string) {
  var colorVal = hexVal.split('#')[1];
  var one = colorVal.slice(0,2);
  var two = colorVal.slice(2,4);
  var three = colorVal.slice(4,6);
  return `rgb(${parseInt(one, 16)},${parseInt(two, 16)},${parseInt(three, 16)})`
}

console.log(getRGB('#00ff00'));
console.log(getRGB('#ff00fd'));
