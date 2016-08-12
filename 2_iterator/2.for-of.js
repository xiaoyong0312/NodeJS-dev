// test for-of
var tempArray = ['aaa', 'bbb', 'ccc'];
console.log('tempArray-->>' + tempArray);

for (var i of tempArray) {
  console.log(i);
  //console.log(tempArray[i]);
}
