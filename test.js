/*JavaScript function being refrenced for the index.html page
     -creates a JavaScript pop-up before the page loads.*/
alert("Hello, World/Mundo/Sekai!");

/*002.021 This if,else statement shows if the statement is true in this case
          if youLikeSpace is true display "Your gonna carry that weight..."*/
var youLikeSpace = true;

if (youLikeSpace) {

    document.write("You're gonna carry that weight...");
  } else{

    document.write("see you space cowboy...");
  }
/*002.023 Created a if else program that display the age if true*/
var myAge = 31;

if (myAge >30){

    document.write("you are over 30!");

  } else if (myAge > 20){

    document.write("you are over 20!");

  } else if (myAge > 10){

    document.write("you are over 10!");
  } else{

    document.write("you are not over 10!");


}
/*002.026 Created a logical operation to see
            if your cool or not by checking if you age is true to a statment.*/
var myAge = 26;

if (myAge < 18 || myAge > 30 || myAge === 25){

    document.write("You aint coming!");

} else{

    document.write(" You can come, you cool dude");
}
