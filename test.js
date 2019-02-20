/*JavaScript function being refrenced for the index.html page
     -creates a JavaScript pop-up before the page loads.*/
alert("Hello, World/Mundo/Sekai!");

/*Assignment-008 ~ The begining of our for loop method */
var links = document.getElementsByTagName("a");

/*Assignment-009 ~ The begining of our for loop method showing break and continue*/
for (i = 0; i < 10; i++) {
/*Assignment-009 ~ we are saying if i is equal to 5 or 3 "skip" those numbers in the loop*/
    if (i === 5 || i === 3) {
/*Assignment-009 ~ continue makes it so you just skip this blocks iteration of code*/
      continue;

    }
    console.log(i);

    if (i === 7) {
/*Assignment-009 ~ break ends the function and any progression of code from
                      here on aka kills the code*/
      break;

    }

}
  console.log("I have broken out of the loop");
