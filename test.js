/*JavaScript function being refrenced for the index.html page
     -creates a JavaScript pop-up before the page loads.*/
alert("Hello, World/Mundo/Sekai!");

/*Assignment-009 ~ The begining of our
                    for loop method that lets us cycle through elements in the page and do things to them */
var links = document.getElementsByTagName("a");

for(i = 0; i < links.length; i++) {

      links[i].className = "link-" + i;
}
