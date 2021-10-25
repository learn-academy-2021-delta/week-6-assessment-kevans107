// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("eachPerson", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () =>{
    expect(eachPerson(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})


// b) Create the function that makes the test pass.


const eachPerson = (array) => {
  // Create a function called eachPerson that takes in an array of objects
  return array.map(value => {
    // Use .map to iterate through each value
    return `${value.name.replace(/(?:^|\s)\S/g, function(finalName) {return finalName.toUpperCase()})} is ${value.occupation}.`
      // use string interpolation to return an array with a sentence about each person. Use .replace with a regex function on value.name to return the first letter of each string capitalized.
    })
  }


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


describe("divThree", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(divThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(divThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})


// b) Create the function that makes the test pass.


  const divThree = (array) => {
    // create a function called divThree that takes in an array
    let finalNum = []
    // declare a variable called finalNum to push all number data types to
    for(let i = 0; i < array.length; i++){
      // use a for loop to iterate through the array
      if(typeof array[i] === "number"){
        // if the data type at the index is a number push the number to the finalNum array and return the remainder of the value % 3
        finalNum.push(array[i] % 3)
      }
    }
    return finalNum
    // return the array with only the numbers % 3
  }
  

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("cubeSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(cubeSum([2, 3, 4])).toEqual(99)
    expect(cubeSum([0, 5, 10])).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

const cubeSum = (array) => {
  // create a variable called cubeSum that takes in an array as a parameter
  let finalSum = 0
  // create a new variable called finalSum that is set to zero to store the results of the for loop and cube calculation
  for(let i = 0; i < array.length; i++){
    finalSum = finalSum + array[i] ** 3
    // create a for loop that cubes each value and adds the resulting values to each other within the finalSum variable
  }
  return finalSum
  // return the total in finalSum
}

