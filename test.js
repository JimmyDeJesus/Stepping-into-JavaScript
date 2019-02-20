/*JavaScript function being refrenced for the index.html page
     -creates a JavaScript pop-up before the page loads.*/
alert("Hello, World/Mundo/Sekai!");

/*Assignment-010 ~ we start useing the getAverage function to specify what we are dividing*/
function getAverage (a,b,c,d,e,f){

      var average = (a + b + c + d + e + f) / 6;
      console.log(average);
      return average;
}
/*Assignment-010 ~ this is a statement calling the average up above*/
var myResult = getAverage(7,8,9,10,11,12);
console.log("the average is " + myResult);
