/*JavaScript function being refrenced for the index.html page
     -creates a JavaScript pop-up before the page loads.*/
alert("Hello, World/Mundo/Sekai!");

/*Assignment-007 ~ The begining of our for loop method */
var links = document.getElementsByTagName("a");

for (i = 1; i < links.length; i++) {

    console.log("this is link number" + i);

}
document.write("all links now looped");
