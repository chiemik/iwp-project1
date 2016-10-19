// This gradeQuiz() function listens for the submit button in the HTML page. When it the user clicks on the button, this function picks up on it and begins the code to grade the quiz.
function gradeQuiz() {
    
    /* Creates a variable to hold the user's score. */
    var userScore = 0;
    
    /* Uses querySelector to locate the name of the HTML element: q1 then ensures that it is checked using :checked. Evaluates the value using the method, "value", and returns the value number of the element. */
    var answerOne = document.querySelector('input[name="q1"]:checked').value;
    
    // Checks to ensure we are getting the right value by logging the number of the value to the console. Note that answerOne is not a native JS number but rather a value received from HTML.
    console.log("You chose " + answerOne);
    
    /* Uses a conditional to evaluate the value stored in answerOne and assigns points to the user as necessary. Because answerOne is not a native JS number, we cannot check it to ensure it is of the same type and amount. We can only check it based on the same amount, therefore, we use == instead of === */
    if (answerOne == 2) {
        // Adds points to the userScore.
        userScore += 10;
    } else if (answerOne == 1) {
        userScore += 5;
    } else if (answerOne == 3) {
        userScore += 1;
    } else {
        console.log("Fukuoka?");
    }
    
    // Check our userScore to ensure our conditional worked appropriately.
    console.log("Your score is " + userScore);
    
    /* Check response for q2 and assign points accordingly. */
    var answerTwo = document.querySelector('input[name="q2"]:checked').value;
    console.log("You chose " + answerTwo);
    
    if (answerTwo == 1) {
        userScore += 10;
    } else {
        console.log("The answer was true.");
    }
    
    // Check our userScore to ensure our conditional worked appropriately.
    console.log("Your score is " + userScore);
    
    /* Check response for q3 and assign points accordingly. */
    var answerThree = document.querySelector('input[name="q3"]').value;
    console.log("You said " + answerThree);
    
    if (answerThree === "2020") {
        userScore += 10;
    } else if (answerThree === "2024") {
        userScore += 5;
    } else {
        console.log("The answer was 2020");
    }
    
 /* Check answer for question 4 */
 var answerFour = document.querySelector('input[name="q4"]:checked').value;
    
    console.log("You chose " + answerFour);
    
    if (answerFour == 1) {
        // Adds points to the userScore.
        userScore += 10;
    } else if (answerFour == 2) {
        userScore += 5;
    } else if (answerFour == 3) {
        userScore += 1;
    } else {
        console.log("Your answer was wrong.");
    }
    
     /* Check answer for question 5 */
 var answerFive = document.querySelector('input[name="q5"]:checked').value;
    
    console.log("You chose " + answerFive);
    
    if (answerFive == 3) {
        // Adds points to the userScore.
        userScore += 10;
    } else if (answerFive == 1) {
        userScore += 5;
    } else if (answerFive == 2) {
        userScore += 1;
    } else {
        console.log("Your answer was wrong.");
    }
    
         /* Check answer for question 6 */
 var answerSix = document.querySelector('input[name="q6"]:checked').value;
    
    console.log("You chose " + answerSix);
    
    if (answerSix == 4) {
        // Adds points to the userScore.
        userScore += 10;
    } else if (answerSix == 3) {
        userScore += 5;
    } else if (answerSix == 2) {
        userScore += 1;
    } else {
        console.log("Your answer was wrong.");
    }
 
          /* Check answer for question 7 */
 var answerSeven = document.querySelector('input[name="q7"]:checked').value;
    
    console.log("You chose " + answerSeven);
    
    if (answerSeven == 2) {
        // Adds points to the userScore.
        userScore += 10;
    } else {
        console.log("Your answer was wrong.");
    }
    
            /* Check answer for question 8 */
 var answerEight = document.querySelector('input[name="q8"]:checked').value;
    
    console.log("You chose " + answerEight);
  
     if (answerSeven == 2) {
        // Adds points to the userScore.
        userScore += 10;
    } else {
        console.log("Your answer was wrong.");
    } 
    
      /* Check response for q９ and assign points accordingly. */
    var answerNine = document.querySelector('input[name="q9"]').value;
    console.log("You said " + answerNine);
    
    if (answerNine === "1492") {
      userScore += 10;
    } else if (answerNine === "1499") {
        userScore += 5;
    } else {
        console.log("The answer was 1492");
    }  
    
     /* Check answer for question 10 */
 var answerTen = document.querySelector('input[name="q10"]:checked').value;
    
    console.log("You chose " + answerTen);
    
    if (answerTen == 4) {
        // Adds points to the userScore.
        userScore += 10;
    } else if (answerTen == 2) {
        userScore += 5;
    } else if (answerTen == 3) {
        userScore += 1;
    } else {
        console.log("Your answer was wrong.");
    }
    
       /* Check response for q11 and assign points accordingly. */
    var answerEleven = document.querySelector('input[name="q11"]:checked').value;
    console.log("You chose " + answerEleven);
    
    if (answerEleven == 1) {
        userScore += 10;
    } else {
        console.log("The answer was true.");
    }
    
     /* Check answer for question 12 */
 var answerTwelve = document.querySelector('input[name="q12"]:checked').value;
    
    console.log("You chose " + answerTwelve);
    
    if (answerTwelve == 3) {
        // Adds points to the userScore.
        userScore += 10;
    } else if (answerTwelve == 4) {
        userScore += 5;
    } else if (answerTwelve == 1) {
        userScore += 2;
    } else {
        console.log("Your answer was wrong.");
    }

      /* Check answer for question 13 */
 var answerThirteen = document.querySelector('input[name="q13"]:checked').value;
    
    console.log("You chose " + answerThirteen);
    
    if (answerThirteen == 2) {
        // Adds points to the userScore.
        userScore += 10;
    } else if (answerThirteen == 1) {
        userScore += 5;
    } else if (answerThirteen == 3) {
        userScore += 2;
    } else {
        console.log("Your answer was wrong.");
    }
    
          /* Check answer for question 14 */
 var answerFourteen = document.querySelector('input[name="q14"]:checked').value;
    
    console.log("You chose " + answerFourteen);
    
    if (answerFourteen == 4) {
        // Adds points to the userScore.
        userScore += 10;
    } else if (answerFourteen == 1) {
        userScore += 5;
    } else if (answerFourteen == 2) {
        userScore += 2;
    } else {
        console.log("Your answer was wrong.");
    }
    
    /* Check response for q15 and assign points accordingly. */
    var answerFifteen = document.querySelector('input[name="q15"]').value;
    console.log("You said " + answerFifteen);
    
    if (answerFifteen === "SNS") {
        userScore += 10;
    } else if (answerFifteen === "SNN") {
        userScore += 5;
    } else {
        console.log("The answer was SNS");
    }  
  
       /* Check answer for question 16 */
    var answerSixteen = document.querySelector('input[name="q16"]:checked').value;
    
    console.log("You chose " + answerSixteen);
    
    if (answerSixteen == 3) {
        // Adds points to the userScore.
        userScore += 10;
    } else if (answerSixteen == 1) {
        userScore += 5;
    } else if (answerSixteen == 2) {
        userScore += 1;
    } else {
        console.log("Your answer was wrong.");
    }
  
     /* Check response for q17 and assign points accordingly. */
    var answerSeventeen = document.querySelector('input[name="q17"]:checked').value;
    console.log("You chose " + answerSeventeen);
    
    if (answerSeventeen == 2) {
        userScore += 10;
    } else {
        console.log("The answer was Female.");
    } 
  
     /* Check answer for question 18 */
    var answerEighteen = document.querySelector('input[name="q18"]:checked').value;
    
    console.log("You chose " + answerEighteen);
    
    if (answerEighteen == 2) {
        // Adds points to the userScore.
        userScore += 10;
    } else if (answerEighteen == 1) {
        userScore += 5;
    } else if (answerEighteen == 4) {
        userScore += 1;
    } else {
        console.log("Your answer was wrong.");
    }  
  
        /* Check answer for question 19 */
    var answerNineteen = document.querySelector('input[name="q19"]:checked').value;
    
    console.log("You chose " + answerNineteen);
    
    if (answerNineteen == 1) {
        // Adds points to the userScore.
        userScore += 10;
    } else if (answerNineteen == 4) {
        userScore += 5;
    } else if (answerNineteen == 2) {
        userScore += 1;
    } else {
        console.log("Your answer was wrong.");
    }  
    
        /* Check answer for question 20 */
    var answerTwenty = document.querySelector('input[name="q20"]:checked').value;
    
    console.log("You chose " + answerTwenty);
    
    if (answerTwenty == 3) {
        // Adds points to the userScore.
        userScore += 10;
    } else if (answerTwenty == 1) {
        userScore += 5;
    } else if (answerTwenty == 2) {
        userScore += 1;
    } else {
        console.log("Your answer was wrong.");
    }  
    
    // Check our userScore to ensure our conditional worked appropriately.
    console.log("Your score is " + userScore);
    
    /* Determine the results for the user then uses the Javascript method innerHTML to push HTML tags and content onto the page. */
    if (userScore === 200) {
        document.getElementById("userResult").innerHTML = 'Perfect score!';
        
    } else if (userScore >= 150) {
        document.getElementById("userResult").innerHTML = 'Good score!';
        
    } else if (userScore >= 100) {
        document.getElementById("userResult").innerHTML = 'OK score.';
    } else {
        document.getElementById("userResult").innerHTML = 'You did not do very well.';
    }
}


