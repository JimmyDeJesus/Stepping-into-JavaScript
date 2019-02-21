/*JavaScript function being refrenced for the index.html page
     -creates a JavaScript pop-up before the page loads.*/
alert("Hello, World/Mundo/Sekai!");

/*Assignment-011 ~ gloabaly assigning the var average */
var average = 0;
/*Assignment-010 ~ we start useing the getAverage function to specify what we are dividing*/
function getAverage (a,b){

      var average = (a + b) / 2; //local variable
      console.log(average);
      return average;
}
/*Assignment-010 ~ this is a statement calling the average up above*/
myResult = getAverage(7,11); //global variable

function logResult(){

console.log("the average is " + myResult + " inside the function");
}

logResult();
