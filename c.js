// quiz questions and answers

const quizData=[
    {
        question:"Which of the following is not a storage class in C?",
        options:[
            "auto",
            "static",
            "dynamic",
            "register",
        ],
        correct:2,
    },

    {
        question:"Which of the following is correct about a 'volatile' variable in C?",
        options:[
            "Its value cannot be changed after initialization",
            "Compiler optimizations may ignore it",
            "It can only be accessed by atomic operations",
            "It cannot be declared as a pointer",
        ],
        correct:1,
    },
    {
        question:"What does the 'register' keyword indicate in C?",
        options:[
            "Requests compiler to store the variable in CPU register",
            "Declares a global variable",
            "Specifies that the variable can be accessed by multiple threads",
            "Prevents a variable from being optimized",

        ],
        correct:0,
    },
    {
        question:"What does the 'extern' keyword indicate in C?",
        options:[
            "Indicates an external linkage of the variable",
            "Declares a variable as constant",
            "Specifies that the variable is only accessible within the file",
            "Requests the compiler to allocate memory for the variable",
        ],
        correct:0,
    },

    {
        question:"Which of the following is true about C programming language?",
        options:[
            "C is a high-level language",
            "C is a low-level language",
            "C is a middle-level language",
            "C is a scripting language",
        ],
        correct:2,
    },
    {
        question:"What is the purpose of a header file in C?",
        options:[
            "To declare variables",
            "To include external libraries",
            "To define functions",
            "To initialize arrays",
        ],
        correct:1,
    },
    {
        question:"What is the purpose of the 'void' keyword in C?",
        options:[
            "To declare an empty function",
            "To indicate an unknown data type",
            "To specify a function that does not return a value",
            "To declare a global variable",
        ],
        correct:2,
    },
    {
        question:"Which of the following is not a valid variable name in C?",
        options:[
            "my_variable",
            "2ndVariable",
            "var_name",
            "_myVariable",
        ],
        correct:1,
    },
    {
        question:"In C, which operator is used to allocate memory dynamically?",
        options:[
            "new",
            "malloc",
            "allocate",
            "alloc",
        ],
        correct:1,
    },
    {
        question:"What is the purpose of the 'break' statement in C?",
        options:[
            "To terminate the loop",
            "To skip the current iteration",
            "To jump to a specific label",
            "To continue to the next iteration",
        ],
        correct:0,
    },
    {
        question:"In C, which library function is used to dynamically allocate memory?",
        options:[
            "alloc()",
            "calloc()",
            "malloc()",
            "memory()",
        ],
        correct:2,
    },
    {
        question:"What does the 'const' keyword indicate in C?",
        options:[
            "Indicates a constant variable",
            "Indicates a volatile variable",
            "Indicates a pointer variable",
            "Indicates an automatic variable",
        ],
        correct:0,
    },
    {
        question:"Which of the following is not a valid data type in C?",
        options:[
            "float",
            "real",
            "double",
            "long double",
        ],
        correct:1,
    },
    {
        question:"In C, what is the size of an integer data type?",
        options:[
            "2 bytes",
            "4 bytes",
            "8 bytes",
            "Depends on the compiler",
        ],
        correct:1,
    },
    {
        question:"Which of the following is not a valid operator in C?",
        options:[
            "::",
            "->",
            ".",
            "<:",
        ],
        correct:3,
    },
    {
        question:"What is the purpose of the 'return' statement in C?",
        options:[
            "To terminate the program",
            "To return a value from a function",
            "To skip the current iteration",
            "To jump to a specific label",
        ],
        correct:1,
    },
    {
        question:"In C, which library function is used to read a character from the standard input?",
        options:[
            "scanf()",
            "getchar()",
            "gets()",
            "read()",
        ],
        correct:1,
    },
    {
        question:"What is the purpose of the 'typedef' keyword in C?",
        options:[
            "To declare a new variable type",
            "To define a constant value",
            "To declare a function",
            "To create a new name for an existing data type",
        ],
        correct:3,
    },
    {
        question:"What is the purpose of the 'register' keyword in C?",
        options:[
            "It requests the compiler to store the variable in CPU registers",
            "It indicates that the variable's value cannot be changed after initialization",
            "It specifies that the variable can only be accessed by atomic operations",
            "It informs the compiler that the variable may be modified externally",
        ],
        correct:0,
    },
    {
        question:"In C, what is the purpose of the 'static' keyword when used with a global variable?",
        options:[
            "It specifies that the variable is accessible only within the current source file",
            "It indicates that the variable's value cannot be changed after initialization",
            "It requests the compiler to store the variable in CPU registers",
            "It allocates memory for the variable on the stack",
        ],
        correct:0,
    },
    {
        question:"In C, what is the difference between 'scanf' and 'gets'?",
        options:[
            "'scanf' is used for formatted input, while 'gets' is used for unformatted input",
            "'scanf' is used for string input, while 'gets' is used for integer input",
            "'scanf' is used for file input, while 'gets' is used for console input",
            "'scanf' is used for reading a single character, while 'gets' is used for reading multiple characters",
        ],
        correct:0,
    },
    {
        question:"In C, what is the purpose of the 'inline' keyword?",
        options:[
            "Specifies that a function's definition is provided in another source file",
            "Requests the compiler to inline the function's code at the call site",
            "Declares a function to be external to the current source file",
            "Indicates that a function is to be compiled separately",
        ],
        correct:1,
    },
    {
        question:"What is the purpose of the 'do-while' loop in C?",
        options:[
            "It executes a block of code repeatedly as long as a specified condition is true",
            "It executes a block of code zero or more times",
            "It executes a block of code once, then repeats the execution based on a specified condition",
            "It executes a block of code repeatedly until a specified condition is false",
        ],
        correct:3,
    },
    {
        question:"n C, what does the '>>' operator do?",
        options:[
            "Bitwise AND",
            "Bitwise OR",
            "Bitwise right shift",
            "Bitwise left shift",
        ],
        correct:2,
    },
    {
        question:"What is the purpose of the 'goto' statement in C?",
        options:[
            "It is used to exit a loop",
            "It is used to jump to a specific label within a function",
            "It is used to call another function",
            "It is used to skip the rest of the code in a block",
        ],
        correct:1,
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
    body.style.backgroundColor="rgb(28, 28, 144)";
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