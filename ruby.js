// quiz questions and answers

const quizData=[
    {
        question:"What does the splat operator (*) do in Ruby?",
        options:[
            "Exponentiation",
            "Array concatenation",
            "Method definition",
            "Argument expansion",
        ],
        correct:3,
    },

    {
        question:"In Ruby, what is the purpose of a Proc object?",
        options:[
            "To represent a block of code",
            "To define class methods",
            "To handle file I/O operations",
            "To encapsulate instance variables",
        ],
        correct:0,
    },
    {
        question:"What is a singleton method in Ruby?",
        options:[
            "A method defined on a singleton class",
            "A method that can only be called once",
            "A method that accepts a single argument",
            "A method that is overridden by subclasses",

        ],
        correct:0,
    },
    {
        question:"Which method can be used to check if a given variable is nil or not in Ruby?",
        options:[
            "empty?",
            "nil?",
            "blank?",
            "present?",
        ],
        correct:1,
    },
    {
        question:"What does the super keyword do in Ruby?",
        options:[
            "Calls the parent class constructor",
            "Returns a superclass object",
            "Calls the method with the same name in the parent class",
            "Stops the execution of the current method",
        ],
        correct:2,
    },
    {
        question:"In Ruby, what does the yield keyword do?",
        options:[
            "Raises an exception",
            "Returns a value from a block",
            "Suspends the execution of a method",
            "Invokes the block passed to a method",
        ],
        correct:3,
    },
    {
        question:"Which Ruby data structure stores unique, unordered elements?",
        options:[
            "Array",
            "Set",
            "Hash",
            "Tuple",
        ],
        correct:1,
    },
    {
        question:"What does the module keyword do in Ruby?",
        options:[
            "Defines a namespace",
            "Declares a class",
            "Includes external libraries",
            "Raises a custom exception",
        ],
        correct:0,
    },
    {
        question:"In Ruby, what is the purpose of the send method?",
        options:[
            "To call a method dynamically",
            "To send emails",
            "To invoke a private method",
            "To start a new thread",
        ],
        correct:0,
    },
    {
        question:"What is the purpose of the singleton_class method in Ruby?",
        options:[
            "To create a new singleton object",
            "To access the singleton class of an object",
            "To define a method only for a specific object",
            "To override the superclass method",
        ],
        correct:1,
    },
    {
        question:"What does the prepend method do in Ruby modules?",
        options:[
            "Appends a module to the end of the ancestor chain",
            "Inserts a module at the beginning of the ancestor chain",
            "Replaces the existing module with a new one",
            "Removes a module from the ancestor chain",
        ],
        correct:1,
    },
    {
        question:"In Ruby, what is the purpose of the throw and catch keywords?",
        options:[
            "To handle exceptions",
            "To exit a loop",
            "To define a custom error",
            "To implement coroutines",
        ],
        correct:1,
    },
    {
        question:"What does the ||= operator do in Ruby?",
        options:[
            "Bitwise OR assignment",
            "Logical OR assignment",
            "Logical AND assignment",
            "Bitwise AND assignment",
        ],
        correct:1,
    },
    {
        question:"Which method can be used to convert a Ruby object to JSON format?",
        options:[
            "to_json",
            "parse_json",
            "from_json",
            "json_encode",
        ],
        correct:0,
    },
    {
        question:"What does the protected keyword do in Ruby?",
        options:[
            "Restricts access to methods within the class hierarchy",
            "Allows access to methods from anywhere in the program",
            "Marks methods as deprecated",
            "Prevents inheritance of methods",
        ],
        correct:0,
    },
    {
        question:"In Ruby, what is a lambda?",
        options:[
            "A special type of class",
            "A block of code wrapped in an object",
            "A method that accepts multiple arguments",
            "A method that returns a lambda object",
        ],
        correct:1,
    },
    {
        question:"What does the case statement in Ruby compare by default?",
        options:[
            "Equality",
            "Identity",
            "Type",
            "Pattern matching",
        ],
        correct:0,
    },
    {
        question:"What does the load method do in Ruby?",
        options:[
            "Executes the Ruby code in the specified file",
            "Loads a library into memory",
            "Parses a JSON file",
            "Imports a module",
        ],
        correct:0,
    },
    {
        question:"What does the reduce method do in Ruby?",
        options:[
            "Combines all elements of an array into a single value",
            "Filters elements of an array based on a condition",
            "Reverses the order of elements in an array",
            "Finds the maximum element in an array",
        ],
        correct:0,
    },
    {
        question:"Which method in Ruby is used to define a getter and setter for an instance variable?",
        options:[
            "attr_accessor",
            "attr_reader",
            "attr_writer",
            "attr_method",
        ],
        correct:0,
    },
    {
        question:"What does the respond_to_missing? method do in Ruby?",
        options:[
            "Checks if a method is defined for an object",
            "Handles missing method calls",
            "Raises an exception for missing methods",
            "Overrides the method_missing method",
        ],
        correct:1,
    },
    {
        question:"What is the purpose of the autoload method in Ruby?",
        options:[
            "To load external libraries",
            "To define dynamic methods",
            "To lazily load classes when they are first used",
            "To handle asynchronous tasks",
        ],
        correct:2,
    },
    {
        question:"What does the tap method do in Ruby?",
        options:[
            "Modifies the object in place",
            "Returns a copy of the object",
            "Executes a block on the object and returns the object",
            "Invokes a method on the object",
        ],
        correct:2,
    },
    {
        question:"In Ruby, what is a symbol?",
        options:[
            "A string object",
            "A special kind of integer",
            "An immutable identifier",
            "A reserved keyword",
        ],
        correct:2,
    },
    {
        question:"What does the include? method do in Ruby hashes?",
        options:[
            "Checks if a key exists in the hash",
            "Adds a key-value pair to the hash",
            "Removes a key from the hash",
            "Iterates over key-value pairs in the hash",
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



firstBtn.addEventListener("click",()=>{
    Section.style.display="block";
    popup.style.display="none";
    body.style.backgroundColor="rgb(182, 34, 34)";
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