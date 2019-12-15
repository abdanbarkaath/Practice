// var i;
// var output ="";
// for(i=0;i<5;i++){
//     for(var j=0;j<=i;j++){
//      output += "*";
//     }
//     console.log(output);
//     output=""
// }

var i;
var str = "";
var n = 5;
for (i = 0; i < n; i++) {
  for (var j = 1; j < n - i; j++) {
    str = str + "*";
  }
  for (var k = 1; k <= 2 * i + 1; k++) {
    str = str + "-";
  }
  console.log(str);
  str="";
}
