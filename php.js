// quiz questions and answers

const quizData=[
    {
        question:"What is the purpose of the final keyword in PHP?",
        options:[
            "It indicates that a method cannot be overridden",
            "It signifies that a class cannot be extended",
            "It defines a constant value",
            "It marks the end of a namespace",
        ],
        correct:0,
    },
    {
        question:"Which of the following methods is NOT a magic method in PHP?",
        options:[
            "__construct()",
            "__invoke()",
            "__getSet()",
            "__toString()",
        ],
        correct:2,
    },
    {
        question:"In PHP, what does the PDO class represent?",
        options:[
            "A PHP extension for object-oriented database access",
            "A built-in PHP function for parsing XML",
            "A mechanism for defining custom exceptions",
            "A library for handling file input/output operations.",

        ],
        correct:0,
    },
    {
        question:"What does the spl_autoload_register() function do in PHP?",
        options:[
            "It registers a function for autoloading classes",
            "It triggers automatic garbage collection",
            "It establishes a secure SSL connection",
            "It encrypts data before sending it over the network.",
        ],
        correct:0,
    },

    {
        question:"Which PHP magic constant returns the name of the current namespace?",
        options:[
            "NAMESPACE",
            "CLASS",
            "FILE",
            "METHOD",
        ],
        correct:0,
    },
    {
        question:"What is the purpose of the use keyword in PHP namespaces?",
        options:[
            "It includes a file from the system",
            "It imports symbols into the current namespace",
            "It initializes a static variable",
            "It creates an anonymous function",
        ],
        correct:1,
    },
    {
        question:"Which PHP feature allows for the lazy loading of classes?",
        options:[
            "Traits",
            "Namespaces",
            "Autoloaders",
            "Interfaces",
        ],
        correct:2,
    },
    {
        question:"What is the result of executing the code echo `2` + `3`; in PHP?",
        options:[
            "5",
            "23",
            "32",
            "Error",
        ],
        correct:0,
    },
    {
        question:"In PHP, what does the strict_types declaration enforce?",
        options:[
            "Strict typecasting rules for variables",
            "Strict adherence to coding standards",
            "Strict validation of user input",
            "Strict mode for error reporting",
        ],
        correct:0,
    },
    {
        question:"Which of the following sorting algorithms is NOT available in PHP's sort() function?",
        options:[
            "Merge Sort",
            "Bubble Sort",
            "Quick Sort",
            "Insertion Sort",
        ],
        correct:1,
    },
    {
        question:"What is the purpose of the array_merge_recursive() function in PHP?",
        options:[
            "It merges two or more arrays, preserving key-value pairs",
            "It recursively merges two or more arrays, merging elements with the same string key",
            "It recursively merges two or more arrays, appending elements with numeric keys",
            "It recursively merges two or more arrays, appending elements with string keys",
        ],
        correct:1,
    },
    {
        question:"Which PHP design pattern ensures that only one instance of a class is created?",
        options:[
            "Singleton",
            "Factory",
            "Observer",
            "Prototype",
        ],
        correct:0,
    },
    {
        question:"What is the difference between == and === operators in PHP?",
        options:[
            "== checks for both value and type equality, while === checks for value equality only",
            "== checks for value equality only, while === checks for both value and type equality",
            "Both operators are identical and interchangeable",
            "== is used for arithmetic operations, while === is used for comparison",
        ],
        correct:1,
    },
    {
        question:"Which of the following PHP functions is used to check if a variable is empty?",
        options:[
            "empty()",
            "isset()",
            "is_null()",
            "is_empty()",
        ],
        correct:0,
    },
    {
        question:"What is the purpose of the gc_collect_cycles() function in PHP?",
        options:[
            "It manually triggers the garbage collection process",
            "It collects and discards any inaccessible objects",
            "It compacts the memory used by PHP",
            "It checks for cyclic references in the code",
        ],
        correct:0,
    },
    {
        question:"In PHP, what is the default maximum execution time for a script?",
        options:[
            "30 seconds",
            "60 seconds",
            "120 seconds",
            "No limit",
        ],
        correct:1,
    },
    {
        question:"What does the PDOStatement::fetchAll() method do in PHP?",
        options:[
            "It fetches multiple rows from a result set into an array",
            "It fetches a single row from a result set as an associative array",
            "It fetches the next row from a result set as an object",
            "It fetches the total number of rows in a result set",
        ],
        correct:0,
    },
    {
        question:"Which PHP functions is used to format a timestamp into a human-readable date?",
        options:[
            "time_format()",
            "date_format()",
            "timestamp_format()",
            "strtotime()",
        ],
        correct:1,
    },
    {
        question:"What does the json_encode() function in PHP do?",
        options:[
            "It encodes a PHP array into a JSON string",
            "It decodes a JSON string into a PHP object",
            "It formats a timestamp into a JSON date",
            "It encodes a PHP object into a JSON string",
        ],
        correct:0,
    },
    {
        question:"What is the purpose of the header() function in PHP?",
        options:[
            "It sets HTTP response headers",
            "It defines headers for database queries",
            "It includes an external PHP file",
            "It sends emails with custom headers",
        ],
        correct:0,
    },
    {
        question:"In PHP, what is the purpose of the session_start() function?",
        options:[
            "It starts a new session or resumes the existing session",
            "It initializes a database connection",
            "It starts a timer for session timeout",
            "It encrypts session data",
        ],
        correct:0,
    },
    {
        question:"Which PHP superglobal array contains information about uploaded files?",
        options:[
            "$_FILES",
            "$_POST",
            "$_GET",
            "$_SESSION",
        ],
        correct:0,
    },
    {
        question:"What is the purpose of the PHP_EOL constant?",
        options:[
            "It represents the end of a PHP script",
            "It indicates the end of a line in a PHP script",
            "It defines the end of a session in PHP",
            "It represents the end of a logical expression",
        ],
        correct:1,
    },
    {
        question:"Which of the following is NOT a valid PHP error level?",
        options:[
            "E_WARNING",
            "E_PARSE",
            "E_EXCEPTION",
            "E_NOTICE",
        ],
        correct:2,
    },
    {
        question:"What does the spl_autoload_extensions() function do in PHP?",
        options:[
            "It enables the use of SPL iterators",
            "It sets the file extensions that the spl_autoload functions will use",
            "It registers a function to be called when an undefined class is loaded",
            "It enables the use of custom stream wrappers",
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



firstBtn.addEventListener("click",()=>{
    Section.style.display="block";
    popup.style.display="none";
    body.style.backgroundColor="rgb(123, 123, 186)";
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