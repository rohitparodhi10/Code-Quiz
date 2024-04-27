// quiz questions and answers

const quizData=[
    {
        question:"[1, 2, 3, 4].map(parseInt), What will be the output?",
        options:[
            "[1, 2, 3, 4]",
            "[NaN, NaN, NaN, NaN]",
            "[1, NaN, 1, 1]",
            "[0, 1, 2, 3]",
        ],
        correct:2,
    },

    {
        question:"Which of the following best describes the behavior of the this keyword in JavaScript?",
        options:[
            "Refers to the object where it is defined",
            "Refers to the object where it is called",
            "Refers to the global object",
            "Refers to the function's prototype object",
        ],
        correct:1,
    },
    {
        question:"What does the bind() method do in JavaScript?",
        options:[
            "Binds a function to an object",
            "Binds a context to a function, creating a new function",
            "Binds event listeners to DOM elements",
            "Binds variables to a function's lexical scope",

        ],
        correct:1,
    },
    {
        question:"What does the term `hoisting` refer to in JavaScript?",
        options:[
            "Move function and variable declarations to the beginning of their scope",
            "Converting asynchronous code into synchronous code",
            "Optimizing code for better performance",
            "Preventing code execution until certain conditions are met",
        ],
        correct:0,
    },

    {
        question:"Which of the following statements about JavaScript's event loop is true?",
        options:[
            "JavaScript can only handle one task at a time due to its single-threaded nature",
            "The event loop allows JavaScript to execute multiple tasks simultaneously",
            "The event loop is responsible for handling AJAX requests only",
            "The event loop is part of the DOM manipulation process",
        ],
        correct:0,
    },
    {
        question:"What is the purpose of a closure in JavaScript?",
        options:[
            "To prevent memory leaks by automatically releasing unused variables",
            "To encapsulate private variables and functions within a scope",
            "To improve code performance by avoiding function calls",
            "To enforce strict type checking in function parameters",

        ],
        correct:1,
    },
    {
        question:"What is the key difference between the `==` and `===` operators in JavaScript?",
        options:[
            " `==` compares both value and type, while `===` compares only value",
            " `==` compares only value, while `===` compares both value and type",
            "`==` is used for assignment, while `===` is used for comparison",
            "`==` performs bitwise comparison, while `===` performs logical comparison",
        ],
        correct:1,
    },
    {
        question:"What does the `this` keyword refer to in JavaScript?",
        options:[
            "The current function being executed",
            "The global object where the function is defined",
            "The object that is executing the current function",
            "The parent function of the current function",
        ],
        correct:2,
    },
    {
        question:"Which `Prototypal inheritance` in JavaScript: inheriting via prototypes.",
        options:[
            "Objects inherit properties and methods directly from other objects",
            "Objects inherit properties and methods from their constructor functions",
            "Objects can only inherit from their immediate parent objects",
            "Inheritance in JavaScript is strictly class-based",
        ],
        correct:0,
    },
    {
        question:"What does the `use strict` directive do in JavaScript?",
        options:[
            "Enforces strict type checking throughout the code",
            "Allows the use of experimental JavaScript features",
            "Enables strict mode, which enforces stricter parsing and error handling",
            "Optimizes code execution for better performance",
        ],
        correct:2,
    },
    {
        question:"What does the `NaN` property represent in JavaScript?",
        options:[
            "`Not a Name`: Used for undefined variables",
            "`Not a Node`: Used for invalid DOM references",
            "`Not a Number`: Represents a value that is not a valid number",
            "`Null and Negative`: Represents negative or null values",
        ],
        correct:2,
    },
    {
        question:"Which of the following statements about promises in JavaScript is true?",
        options:[
            "Promises are only used for asynchronous operations",
            "Promises can be either fulfilled or rejected, but not pending",
            "You can chain promises with `then` to handle async tasks one after the other.",
            "Promises are synchronous by default",
        ],
        correct:2,
    },
    {
        question:"What is the purpose of the `yield` keyword in JavaScript?",
        options:[
            "Pauses and resumes the execution of a generator function",
            "Terminates the execution of a function and returns a specified value",
            "Declares a variable with block scope",
            "Resumes execution after an asynchronous operation is completed",
        ],
        correct:0,
    },
    {
        question:"What is a Web Worker in JavaScript?",
        options:[
            "A JavaScript library for handling HTTP requests",
            "Separate thread enables parallel execution in JavaScript",
            "A built-in function for creating animated effects in web pages",
            "A security feature that restricts access to certain browser APIs",
        ],
        correct:1,
    },
    {
        question:"How to handle errors in async JavaScript?",
        options:[
            "try/catch block",
            "setTimeout function",
            "Promise.catch method",
            "console.error function",
        ],
        correct:2,
    },
    {
        question:"What is the purpose of the `map` method in JavaScript arrays?",
        options:[
            "To filter out elements from an array based on a specified condition",
            "To modify each element in an array based on a specified transformation function",
            "To concatenate multiple arrays into a single array",
            "To find the first occurrence of a specified element in an array",
        ],
        correct:1,
    },
    {
        question:"What is the purpose of the `with` statement in JavaScript?",
        options:[
            "To declare variables within a specific lexical scope",
            "To create aliases for object properties to simplify code",
            "To execute a block of code repeatedly until a condition is met",
            "To perform bitwise operations on numeric value",
        ],
        correct:1,
    },
    {
        question:"Which of the following JavaScript methods is used to merge two or more arrays?",
        options:[
            "concat()",
            "join()",
            "merge()",
            "splice()",
        ],
        correct:0,
    },
    {
        question:"What does the `callee` property of arguments object represent in JavaScript?",
        options:[
            "It contains an array-like list of the arguments passed to a function",
            "It refers to the currently executing function",
            "It points to the parent function of the current function",
            "It returns the name of the current function as a string",
        ],
        correct:1,
    },
    {
        question:"What is the purpose of the `bind` method in JavaScript?",
        options:[
            "To associate an event handler with a DOM element",
            "To create a new function with a specified context and parameters",
            "To remove event listeners from DOM elements",
            "To convert a string into a JavaScript object",
        ],
        correct:1,
    },
    {
        question:"`async` in JavaScript functions signals that they return promises.",
        options:[
            "It defines a function that returns a promise",
            "`async` marks functions for `await` inside.",
            "It ensures that the function is executed asynchronously in a separate thread",
            "It specifies the access level of the function within a module",
        ],
        correct:1,
    },
    {
        question:"What is the purpose of the `finally` block in a try-catch-finally statement in JavaScript?",
        options:[
            "To handle errors thrown within the try block",
            "To execute code regardless of whether an exception is thrown or not",
            "To specify conditions under which the catch block should be executed",
            "To define default values for variables used within the try block",
        ],
        correct:1,
    },
    {
        question:"Which JavaScript method creates a shallow object copy?",
        options:[
            " Object.clone()",
            "Object.assign()",
            "Object.copy()",
            "Object.deepcopy()",
        ],
        correct:1,
    },
    {
        question:"What is the purpose of the `Reflect` object in JavaScript?",
        options:[
            "To perform meta-programming tasks such as introspection and reflection",
            "To manipulate the browser's Document Object Model (DOM)",
            "To create immutable data structures in JavaScript",
            "To control the behavior of JavaScript garbage collection",
        ],
        correct:0,
    },
    {
        question:"What is the purpose of the `BigInt` data type introduced in ECMAScript 2020?",
        options:[
            "Use BigInt to represent large integers beyond the limit of the `Number` data type.",
            "To improve the performance of mathematical calculations in JavaScript",
            "To handle complex numbers in mathematical operations",
            "To enforce strict type checking in numeric operations",
        ],
        correct:0,
    }
];

// access all important HTMl tags 
const questions=document.querySelector("#question");
const answers=document.querySelectorAll(".answer");
const [option_1,option_2,option_3,option_4]=document.querySelectorAll("#option_1,#option_2,#option_3,#option_4");
const nextBtn=document.querySelector("#submit");
const quiz=document.querySelector(".quiz");
const prevBtn=document.querySelector("#prevsubmit");
const finalResult=document.querySelector(".result");
const Section=document.querySelector(".quiz-section");
const finalText=document.querySelector("#finalText");
const finalBtn=document.querySelector("#finalBtn");
const body=document.querySelector("body");
const finalScoreTxt=document.querySelector("#finalScoreTxt");
const startQuiz=document.querySelector(".start");
const popup=document.querySelector(".first");
const popupTxt=document.querySelector("#firsttext");
const firstBtn=document.querySelector("#firstBtn");
const check=document.querySelector("#check");
const qq=document.querySelector("#tt");
const lastBtn=document.querySelector("#finalBt");



firstBtn.addEventListener("click",()=>{
    Section.style.display="block";
    popup.style.display="none";
    body.style.backgroundColor="rgb(197, 222, 145)";
});

// create variable

let currentQuiz=0;
let score=0;


// Load Quiz 

const loadQuiz=()=>{
    const{question, options}=quizData[currentQuiz];

    //now we change our h1 with real questions
    questions.innerText=`${currentQuiz+1}. ${question}`;

    // now we change our options with real options

    options.forEach(
        (curOption, index)=>(window[`option_${index+1}`].innerText=curOption)
    );
};

loadQuiz();


// to deselect answer when move to next question

const deselctAnswer=()=>{
    answers.forEach((curQues)=>curQues.checked=false);
}
//next button click 


const getSelectedOptions=()=>{
    let answerIdx;
    answers.forEach((curOption,index)=>{
        if(curOption.checked){
            answerIdx=index;
        };
    });
    return answerIdx;
}
nextBtn.addEventListener("click",()=>{
    const selectedOptionIndex=getSelectedOptions();

    if(selectedOptionIndex===quizData[currentQuiz].correct){
        score=score+1;
    }

    currentQuiz++;

    if(currentQuiz<quizData.length){
        deselctAnswer();
        loadQuiz();
    }else{
        quiz.style.display="none";
        questions.style.display="none";
        nextBtn.style.display="none";
        prevBtn.style.display="none";
        Section.style.backgroundColor="white";
        body.style.background="white";
        finalResultFunc();
        
    }

});


prevBtn.addEventListener("click",()=>{
    previousQuestion();
});
const previousQuestion=()=>{
    currentQuiz--;
    loadQuiz();
};

const finalResultFunc=()=>{
    finalResult.style.display="block";
    finalText.innerHTML=`Your Overall Score <br><br> <mark> ${((score/quizData.length)*100).toFixed(2)}</mark>%`;
    finalScoreTxt.innerHTML=`<br>Your correct answers are <mark id="a">${score}</mark> out of <mark id="a">${quizData.length}</mark>`;
    finalBtn.addEventListener("click",()=>{
        window.location.href='index.html';
    })
}

const StartFun=()=>{
    startQuiz.style.display='block';
    quiz.style.display="none";
    questions.style.display="none";
    nextBtn.style.display="none";
    prevBtn.style.display="none";
    Section.style.backgroundColor="white";
    body.style.background="white";

}

check.addEventListener("click", ()=>{
    qq.style.display="block";
    lastBtn.style.display="block";
    finalResult.style.display="none";
    let output = '';
    quizData.forEach((obj, index) => {
    output += `Question ${index + 1}: ${obj.question}\n`;
    output += `Options:\n`;
    obj.options.forEach((option, optionIndex) => {
        output += `${String.fromCharCode(65 + optionIndex)}. ${option}\n`;
    });
    // Retrieve the correct answer from the options array using the correct index
    const correctOption = obj.options[obj.correct];
    output += `Correct Answer: ${correctOption}\n\n\n`;
});

// Now set the innerText of your element to the constructed output
    qq.innerText = output;
});

lastBtn.addEventListener("click",()=>{
    window.location.href="index.html";
})