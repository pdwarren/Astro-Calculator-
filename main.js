
 var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];
function populateDropdown() {
    const selectElement = document.getElementById('planets');
    
    // Reverse the array to show Sun first
    planets.reverse().forEach(planet => {
      const option = document.createElement('option');
      option.value = planet[0];  // Use the planet's name as value
      option.textContent = planet[0];  // Display the planet's name
      selectElement.appendChild(option);
    }); 
  }
  
    // We are going to solve this by breaking the problem into three parts. 
    // Programmers like automating things, we'll populate the HTML drop down options using code, 
    // instead of having to type out all the values. 
    // Create a function that does the some math and gives us the new weight. 
    // Then create a function that responds when the user clicks on the button. 

    // 1. Populate the dropdown element with the data found in the planets array. 
    // The value of each option should be the planet's name. 
    // Use the following built-in methods
    // `.forEach` `document.createElement` `document.getElementById` `.appendChild` 


    function calculateWeight(weight, planetName) {
        return weight * planets.find(planet => {
            return planet[0] === planetName;  // Check if the planet's name matches the selected planet's name.  // Use the find method.  // Use the array's find method to find the planet's data in the planets array.  // Return the planet's data if found, otherwise return null.  // Use the find method to find the planet's data in the planets array.  // Return the planet's data if found, otherwise return null.
        })[1]
        
        // const planet = planets.find(p => p[0] === planetName);
        
        // if (planet) {
        //     const result = weight * planet[1];
            
        //     // Format the result: if it has a decimal, keep one; if it’s whole, show without decimals
        //     return result % 2 === 0 ? `${result}lbs` : `${(Math.round(result * 100) / 100).toFixed(2)}lbs`;
        // } else {
        //     return null;
        // }
    }


    function handleClickEvent(e) {
        const userWeight = document.getElementById('user-weight').value;
        const planetName = document.getElementById('planets').value;
      var result = calculateWeight(userWeight, planetName) 
      document.getElementById('output').innerHTML =  `If you were on ${planetName}, you would weigh ${result}lbs!`;

        // if (!isNaN(userWeight)) {
        //     const newWeight = calculateWeight(userWeight, planetName);
          
        //     if (newWeight !== null) {
        //         document.getElementById('output').textContent = `If you were on ${planetName}, you would weigh ${newWeight}!`;
        //     } else {
        //         document.getElementById('output').textContent = 'Please select a planet.';
        //     }
        // } else {
        //     document.getElementById('output').textContent = 'Please enter a valid weight.';
        // }
    }
    // 3. Declare a variable called userWeight and assign the value of the user's weight. 

    // 4. Delcare a variable called planetName and assign the name of the selected planet from the drop down. 

    // 5. Declare a variable called result and assign the value of the new calculated weight. 

    // 6. Write code to display the message shown in the screenshot. 

document.getElementById('calculate-button').addEventListener('click', handleClickEvent);
window.onload = populateDropdown;
    // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

    // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
    // feel free to add classes and id's to the HTML elements as you need, 
    // import.a google font and use it for some or all of the text on your page. 


    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.