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


//Good Decsion Result

function isGoodDecison(){
    console.log('YES')
    
};

//Bad Decsion Result

function isBadDecison(){
    console.log('NOO')
            
};


let totalValues = [
    answer1.options[answer1.selectedIndex].value, 
    answer2.options[answer2.selectedIndex].value,
    answer3.options[answer3.selectedIndex].value, 
    answer4.options[answer4.selectedIndex].value,
    answer5.options[answer5.selectedIndex].value
];




function startFramework() {
        
        if ( answer1.options[answer1.selectedIndex].value === 'True') {
            isGoodDecison()
        } else {
            isBadDecison()
        };

};


//Submit Button Initiates Function On Click
let sumbmitBtn = document.getElementById('submit-btn');
sumbmitBtn.addEventListener("click", startFramework);