//Question 1 Value

let answer1 = document.getElementById('question-1');
let answer1Value = answer1.options[answer1.selectedIndex].value;
console.log(answer1Value);

//Add Event Listener to change value once the option is changed
answer1.addEventListener('change', function handleChange(event) {
    console.log(event.target.value); // 👉️ get selected VALUE
  });

//Question 2 Value

let answer2 = document.getElementById('question-2');
let answer2Value = answer2.options[answer2.selectedIndex].value;
console.log(answer2Value);

//Add Event Listener to change value once the option is changed
answer2.addEventListener('change', function handleChange(event) {
    console.log(event.target.value); // 👉️ get selected VALUE
  });


//Question 3 Value

let answer3 = document.getElementById('question-3');
let answer3Value = answer3.options[answer3.selectedIndex].value;
console.log(answer3Value);

//Add Event Listener to change value once the option is changed
answer3.addEventListener('change', function handleChange(event) {
    console.log(event.target.value); // 👉️ get selected VALUE
  });


//Question 4 Value

let answer4 = document.getElementById('question-4');
let answer4Value = answer4.options[answer4.selectedIndex].value;
console.log(answer4Value);

//Add Event Listener to change value once the option is changed
answer4.addEventListener('change', function handleChange(event) {
    console.log(event.target.value); // 👉️ get selected VALUE
  });

//Question 5 Value

let answer5 = document.getElementById('question-5');
let answer5Value = answer5.options[answer5.selectedIndex].value;
console.log(answer5Value);

//Add Event Listener to change value once the option is changed
answer5.addEventListener('change', function handleChange(event) {
    console.log(event.target.value); // 👉️ get selected VALUE
  });


let resultDiv = document.getElementById('result-div');


let resultMainDiv = document.getElementById('result-main-div');


let resultsPhase = document.getElementById('results-phrase');


//Good Decsion Result

function isGoodDecison(){
    console.log('YES')
    resultMainDiv.style.display = "block";
    resultDiv.style.display = "block";
    resultDiv.style.backgroundColor = "#C9F7CE";
    resultsPhase.textContent = "This decision ALIGNS with your values.";

    
};

//Bad Decsion Result

function isBadDecison(){
    console.log('NOO')
    resultMainDiv.style.display = "block";
    resultDiv.style.display = "block";
    resultDiv.style.backgroundColor = "#FFCACA";
    resultsPhase.textContent = "This decision DOES NOT align with your values.";
            
};


let totalValues = [
    answer1.options[answer1.selectedIndex].value, 
    answer2.options[answer2.selectedIndex].value,
    answer3.options[answer3.selectedIndex].value, 
    answer4.options[answer4.selectedIndex].value,
    answer5.options[answer5.selectedIndex].value
];






function startFramework() {
    // let =answer1.options[answer1.selectedIndex].value === 'False';
    let totalValues = [
        answer1.options[answer1.selectedIndex].value, 
        answer2.options[answer2.selectedIndex].value,
        answer3.options[answer3.selectedIndex].value, 
        answer4.options[answer4.selectedIndex].value,
        answer5.options[answer5.selectedIndex].value
    ];
    //This shows the updated the answers in an array
    console.log(totalValues);

    //Assigning  true of false to each question submission. In order for the Good Decision
    //function to run, all answers must be false.
    let value1 = answer1.options[answer1.selectedIndex].value === 'True';
    let value2 = answer2.options[answer2.selectedIndex].value === 'True';
    let value3 = answer3.options[answer3.selectedIndex].value === 'True';
    let value4 = answer4.options[answer4.selectedIndex].value === 'True';
    let value5 = answer5.options[answer5.selectedIndex].value === 'True';

    let values = [
        value1,
        value2,
        value3,
        value4,
        value5
    ];
    //This shows the updated the answers in an array
    console.log(values);


    //Checks if all values in array are true
function allAreTrue(arr) {
    return arr.every(element => element === true);
  };

  console.log(allAreTrue(values)); // 👉️ true

  let trueCheck = allAreTrue(values);
  console.log(trueCheck); 
  

    if (trueCheck === true) {
        isGoodDecison()
    } else {
        isBadDecison()
    };




    // for (let i=0; i<totalValues.length; i++){
        
    // }
    
        

};


//Submit Button Initiates Function On Click
let sumbmitBtn = document.getElementById('submit-btn');
sumbmitBtn.addEventListener("click", startFramework);