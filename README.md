# rockPaperScissors - simple RPS game using Javascript & HTML
Simple Rock Paper Scissors exercise that I can launch in the browser, using basic Javascript & HTML.

1st Commit - HTML form with headers and buttons for each element of rock, paper & scissors.

2nd Commit - Picking up each button element from the HTML document by defining them as constants in the app.js file. Could have given them class names but only 3 buttons needed (rock, paper, scissors) for this basic app so can pick up each element using 'geElementById' then to iterate through them using a forEach loop & an event listener within the loop. When launched each element (Rock, Paper or Scissors) appears as the userChoice (next to - Your Choice:) in the browser.

3rd Commit - Make the possibleChoice forEach loop available to another method to choose the computer choice randomly out of the three button elements. Using a Math.random method and wrapping it in a floor method so that each is a rounded-down integer and is multiplied by calling the forEach loop. Index positions start at 0 so need to add + 1 to each random choice to make it 1 to 3 for each button element. By console logging the random response in the browser console we can see the method generating a random number response between 1 & 3.

4th Commit - Made each number generated relate to either Rock, Paper or Scissors using if statements so each time the user clicks a button, a number response is generated that is randomly chosen and gives a response of either RPS that is now printed to the browser.

5th Commit - Function created to generate each possible combination of results from each response generated and the possible outcome of a win, loss or draw and output that to the browser. Some error meaning result not being displayed but followed error in console and located it. Resolved and game working!